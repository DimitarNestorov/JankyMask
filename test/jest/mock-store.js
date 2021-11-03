import { MAINNET_CHAIN_ID } from '../../shared/constants/network';

export const createSwapsMockStore = () => {
  return {
    swaps: {
      customGas: {
        fallBackPrice: 5,
      },
      fromToken: 'ETH',
    },
    metamask: {
      provider: {
        chainId: MAINNET_CHAIN_ID,
      },
      cachedBalances: {
        [MAINNET_CHAIN_ID]: 5,
      },
      preferences: {
        showFiatInTestnets: true,
      },
      currentCurrency: 'ETH',
      conversionRate: 1,
      contractExchangeRates: {
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': 2,
        '0x1111111111111111111111111111111111111111': 0.1,
      },
      accounts: {
        '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc': {
          address: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
          balance: '0x0',
        },
        '0xec1adf982415d2ef5ec55899b9bfb8bc0f29251b': {
          address: '0xec1adf982415d2ef5ec55899b9bfb8bc0f29251b',
          balance: '0x0',
        },
      },
      selectedAddress: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
      frequentRpcListDetail: [],
      tokens: [
        {
          erc20: true,
          symbol: 'BAT',
          decimals: 18,
          address: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
        },
        {
          erc20: true,
          symbol: 'USDT',
          decimals: 6,
          address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        },
      ],
      swapsState: {
        quotes: {},
        fetchParams: {
          metaData: {
            sourceTokenInfo: {
              symbol: 'BAT',
            },
            destinationTokenInfo: {
              symbol: 'ETH',
            },
          },
        },
        tradeTxId: null,
        approveTxId: null,
        quotesLastFetched: null,
        customMaxGas: '',
        customGasPrice: null,
        selectedAggId: null,
        customApproveTxData: '',
        errorKey: '',
        topAggId: null,
        routeState: '',
        swapsFeatureIsLive: false,
      },
    },
  };
};
