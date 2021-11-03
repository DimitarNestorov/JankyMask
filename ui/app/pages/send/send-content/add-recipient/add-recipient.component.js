import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import Identicon from '../../../../components/ui/identicon';
import Dialog from '../../../../components/ui/dialog';
import ContactList from '../../../../components/app/contact-list';
import RecipientGroup from '../../../../components/app/contact-list/recipient-group/recipient-group.component';
import { ellipsify } from '../../send.utils';
import Button from '../../../../components/ui/button';
import Confusable from '../../../../components/ui/confusable';
import {
  isBurnAddress,
  isValidHexAddress,
} from '../../../../../../shared/modules/hexstring-utils';

export default class AddRecipient extends Component {
  static propTypes = {
    query: PropTypes.string,
    ownedAccounts: PropTypes.array,
    addressBook: PropTypes.array,
    updateGas: PropTypes.func,
    updateSendTo: PropTypes.func,
    ensResolution: PropTypes.string,
    toError: PropTypes.string,
    toWarning: PropTypes.string,
    ensResolutionError: PropTypes.string,
    addressBookEntryName: PropTypes.string,
    contacts: PropTypes.array,
    nonContacts: PropTypes.array,
    setInternalSearch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.recentFuse = new Fuse(props.nonContacts, {
      shouldSort: true,
      threshold: 0.45,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [{ name: 'address', weight: 0.5 }],
    });

    this.contactFuse = new Fuse(props.contacts, {
      shouldSort: true,
      threshold: 0.45,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        { name: 'name', weight: 0.5 },
        { name: 'address', weight: 0.5 },
      ],
    });
  }

  static contextTypes = {
    t: PropTypes.func,
    metricsEvent: PropTypes.func,
  };

  state = {
    isShowingTransfer: false,
  };

  selectRecipient = (to, nickname = '') => {
    const { updateSendTo, updateGas } = this.props;

    updateSendTo(to, nickname);
    updateGas({ to });
  };

  searchForContacts = () => {
    const { query, contacts } = this.props;

    let _contacts = contacts;

    if (query) {
      this.contactFuse.setCollection(contacts);
      _contacts = this.contactFuse.search(query);
    }

    return _contacts;
  };

  searchForRecents = () => {
    const { query, nonContacts } = this.props;

    let _nonContacts = nonContacts;

    if (query) {
      this.recentFuse.setCollection(nonContacts);
      _nonContacts = this.recentFuse.search(query);
    }

    return _nonContacts;
  };

  render() {
    const { ensResolution, query, addressBookEntryName } = this.props;
    const { isShowingTransfer } = this.state;

    let content;

    if (
      !isBurnAddress(query) &&
      isValidHexAddress(query, { mixedCaseUseChecksum: true })
    ) {
      content = this.renderExplicitAddress(query);
    } else if (ensResolution) {
      content = this.renderExplicitAddress(
        ensResolution,
        addressBookEntryName || query,
      );
    } else if (isShowingTransfer) {
      content = this.renderTransfer();
    }

    return (
      <div className="send__select-recipient-wrapper">
        {this.renderDialogs()}
        {content || this.renderMain()}
      </div>
    );
  }

  renderExplicitAddress(address, name) {
    return (
      <div
        key={address}
        className="send__select-recipient-wrapper__group-item"
        onClick={() => this.selectRecipient(address, name)}
      >
        <Identicon address={address} diameter={28} />
        <div className="send__select-recipient-wrapper__group-item__content">
          <div className="send__select-recipient-wrapper__group-item__title">
            {name ? <Confusable input={name} /> : ellipsify(address)}
          </div>
          {name && (
            <div className="send__select-recipient-wrapper__group-item__subtitle">
              {ellipsify(address)}
            </div>
          )}
        </div>
      </div>
    );
  }

  renderTransfer() {
    let { ownedAccounts } = this.props;
    const { query, setInternalSearch } = this.props;
    const { t } = this.context;
    const { isShowingTransfer } = this.state;

    if (isShowingTransfer && query) {
      ownedAccounts = ownedAccounts.filter(
        (item) =>
          item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
          item.address.toLowerCase().indexOf(query.toLowerCase()) > -1,
      );
    }

    return (
      <div className="send__select-recipient-wrapper__list">
        <Button
          type="link"
          className="send__select-recipient-wrapper__list__link"
          onClick={() => {
            setInternalSearch(false);
            this.setState({ isShowingTransfer: false });
          }}
        >
          <div className="send__select-recipient-wrapper__list__back-caret" />
          {t('backToAll')}
        </Button>
        <RecipientGroup
          label={t('myAccounts')}
          items={ownedAccounts}
          onSelect={this.selectRecipient}
        />
      </div>
    );
  }

  renderMain() {
    const { t } = this.context;
    const {
      query,
      ownedAccounts = [],
      addressBook,
      setInternalSearch,
    } = this.props;

    return (
      <div className="send__select-recipient-wrapper__list">
        <ContactList
          addressBook={addressBook}
          searchForContacts={this.searchForContacts.bind(this)}
          searchForRecents={this.searchForRecents.bind(this)}
          selectRecipient={this.selectRecipient.bind(this)}
        >
          {ownedAccounts && ownedAccounts.length > 1 && !query && (
            <Button
              type="link"
              className="send__select-recipient-wrapper__list__link"
              onClick={() => {
                setInternalSearch(true);
                this.setState({ isShowingTransfer: true });
              }}
            >
              {t('transferBetweenAccounts')}
            </Button>
          )}
        </ContactList>
      </div>
    );
  }

  renderDialogs() {
    const {
      toError,
      toWarning,
      ensResolutionError,
      ensResolution,
    } = this.props;
    const { t } = this.context;

    if (ensResolutionError) {
      return (
        <Dialog type="error" className="send__error-dialog">
          {ensResolutionError}
        </Dialog>
      );
    } else if (toError && toError !== 'required' && !ensResolution) {
      return (
        <Dialog type="error" className="send__error-dialog">
          {t(toError)}
        </Dialog>
      );
    } else if (toWarning) {
      return (
        <Dialog type="warning" className="send__error-dialog">
          {t(toWarning)}
        </Dialog>
      );
    }

    return null;
  }
}
