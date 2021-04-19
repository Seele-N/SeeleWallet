export const MAINNET_PRIMARY_THEME_COLOR = '#3cc68a'
export const MAINNET_SECONDARY_THEME_COLOR = '#3cc68a'
export const TESTNET_PRIMARY_THEME_COLOR = '#617bbd'
export const TESTNET_SECONDARY_THEME_COLOR = '#85A1EA'

export default Object.freeze({
    API_BASE: "https://testnet.seeleview.net/api/v1",
    API:{
        STATUS: "/status",
		BLOCKLIST: "/blocks",
		BLOCK: "/block",
		ACCOUNT: "/account",
        VALIDATORS: "/validators",
        VALIDATOR: "/validator",
        PROPOSALS: "/proposals",
        PROPOSAL: "/proposal",
        TRANSACTIONS: "/transactions",
        TRANSACTION: "/transaction",
		PARAMETER: "/parameter",
    },
    NUM: {
		BASE_MULT: 100000000,
		DEFAULT_DECIMALS: 8,
		PAGE_SIZE: 20,

		SPARE_PAGE_CNT: 2, //  amount of pages to preload in pagination
		BINACE_API_ROWS_LIMIT: 1000, //  max rows binance api allows
		BINANCE_API_PAGES_LIMIT: 100, //  max page binance api allows

		REAL_TIME_DELAY_MS: 2000, //  real-time refetch interval(for indexedPagination)
		DASH_REAL_TIME_DELAY_MS: 3000, //  dashboard refetch interval
		ACCOUNT_REFETCH_INTERVAL_MS: 5000, // TODO : currently not used
		ASSET_REFETCH_INTERVAL_MS: 80000,
		ASSET_REFETCH_PRICE_INTERVAL_MS: 80000,
		BASIC_DATA_FETCH_INTERVAL_MS: 30000,
	},
});
