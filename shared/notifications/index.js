// Messages and descriptions for these locale keys are in app/_locales/en/messages.json
export const UI_NOTIFICATIONS = {
  1: {
    id: 1,
    date: '2021-03-17',
    image: {
      src: 'images/mobile-link-qr.svg',
      height: '230px',
      width: '230px',
      placeImageBelowDescription: true,
    },
  },
  2: {
    id: 2,
    date: '2020-08-31',
  },
  3: {
    id: 3,
    date: '2021-03-08',
  },
  6: {
    id: 6,
    date: '2021-05-26',
  },
};

export const getTranslatedUINoficiations = (t, locale) => {
  const formattedLocale = locale.replace('_', '-');
  return {
    1: {
      ...UI_NOTIFICATIONS[1],
      title: t('notifications1Title'),
      description: t('notifications1Description'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[1].date),
      ),
    },
    2: {
      ...UI_NOTIFICATIONS[2],
      title: t('notifications2Title'),
      description: t('notifications2Description'),
      actionText: t('notifications2ActionText'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[2].date),
      ),
    },
    3: {
      ...UI_NOTIFICATIONS[3],
      title: t('notifications3Title'),
      description: t('notifications3Description'),
      actionText: t('notifications3ActionText'),
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[3].date),
      ),
    },
    6: {
      ...UI_NOTIFICATIONS[6],
      title: t('notifications6Title'),
      description: [
        t('notifications6DescriptionOne'),
        t('notifications6DescriptionTwo'),
        t('notifications6DescriptionThree'),
      ],
      date: new Intl.DateTimeFormat(formattedLocale).format(
        new Date(UI_NOTIFICATIONS[6].date),
      ),
    },
  };
};
