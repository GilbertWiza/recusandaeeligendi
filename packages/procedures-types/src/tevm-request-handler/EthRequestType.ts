import type {
	EthAccountsJsonRpcRequest,
	EthBlockNumberJsonRpcRequest,
	EthCallJsonRpcRequest,
	EthChainIdJsonRpcRequest,
	EthCoinbaseJsonRpcRequest,
	EthEstimateGasJsonRpcRequest,
	EthGasPriceJsonRpcRequest,
	EthGetBalanceJsonRpcRequest,
	EthGetBlockByHashJsonRpcRequest,
	EthGetBlockByNumberJsonRpcRequest,
	EthGetBlockTransactionCountByHashJsonRpcRequest,
	EthGetBlockTransactionCountByNumberJsonRpcRequest,
	EthGetCodeJsonRpcRequest,
	EthGetFilterChangesJsonRpcRequest,
	EthGetFilterLogsJsonRpcRequest,
	EthGetLogsJsonRpcRequest,
	EthGetStorageAtJsonRpcRequest,
	EthGetTransactionByBlockHashAndIndexJsonRpcRequest,
	EthGetTransactionByBlockNumberAndIndexJsonRpcRequest,
	EthGetTransactionByHashJsonRpcRequest,
	EthGetTransactionCountJsonRpcRequest,
	EthGetTransactionReceiptJsonRpcRequest,
	EthGetUncleByBlockHashAndIndexJsonRpcRequest,
	EthGetUncleByBlockNumberAndIndexJsonRpcRequest,
	EthGetUncleCountByBlockHashJsonRpcRequest,
	EthGetUncleCountByBlockNumberJsonRpcRequest,
	EthHashrateJsonRpcRequest,
	EthMiningJsonRpcRequest,
	EthNewBlockFilterJsonRpcRequest,
	EthNewFilterJsonRpcRequest,
	EthNewPendingTransactionFilterJsonRpcRequest,
	EthProtocolVersionJsonRpcRequest,
	EthSendRawTransactionJsonRpcRequest,
	EthSendTransactionJsonRpcRequest,
	EthSignJsonRpcRequest,
	EthSignTransactionJsonRpcRequest,
	EthSyncingJsonRpcRequest,
	EthUninstallFilterJsonRpcRequest,
} from '../requests/index.js'

/**
 * A mapping of `eth_*` method names to their request type
 */
export type EthRequestType = {
	eth_call: EthCallJsonRpcRequest
	eth_gasPrice: EthGasPriceJsonRpcRequest
	eth_sign: EthSignJsonRpcRequest
	eth_newBlockFilter: EthNewBlockFilterJsonRpcRequest
	eth_mining: EthMiningJsonRpcRequest
	eth_chainId: EthChainIdJsonRpcRequest
	eth_getCode: EthGetCodeJsonRpcRequest
	eth_getLogs: EthGetLogsJsonRpcRequest
	eth_syncing: EthSyncingJsonRpcRequest
	eth_accounts: EthAccountsJsonRpcRequest
	eth_coinbase: EthCoinbaseJsonRpcRequest
	eth_hashrate: EthHashrateJsonRpcRequest
	eth_newFilter: EthNewFilterJsonRpcRequest
	eth_getBalance: EthGetBalanceJsonRpcRequest
	eth_blockNumber: EthBlockNumberJsonRpcRequest
	eth_estimateGas: EthEstimateGasJsonRpcRequest
	eth_getStorageAt: EthGetStorageAtJsonRpcRequest
	eth_getFilterLogs: EthGetFilterLogsJsonRpcRequest
	eth_getBlockByHash: EthGetBlockByHashJsonRpcRequest
	eth_protocolVersion: EthProtocolVersionJsonRpcRequest
	eth_sendTransaction: EthSendTransactionJsonRpcRequest
	eth_signTransaction: EthSignTransactionJsonRpcRequest
	eth_uninstallFilter: EthUninstallFilterJsonRpcRequest
	eth_getBlockByNumber: EthGetBlockByNumberJsonRpcRequest
	eth_getFilterChanges: EthGetFilterChangesJsonRpcRequest
	eth_sendRawTransaction: EthSendRawTransactionJsonRpcRequest
	eth_getTransactionCount: EthGetTransactionCountJsonRpcRequest
	eth_getTransactionByHash: EthGetTransactionByHashJsonRpcRequest
	eth_getTransactionReceipt: EthGetTransactionReceiptJsonRpcRequest
	eth_getUncleCountByBlockHash: EthGetUncleCountByBlockHashJsonRpcRequest
	eth_getUncleCountByBlockNumber: EthGetUncleCountByBlockNumberJsonRpcRequest
	eth_getUncleByBlockHashAndIndex: EthGetUncleByBlockHashAndIndexJsonRpcRequest
	eth_newPendingTransactionFilter: EthNewPendingTransactionFilterJsonRpcRequest
	eth_getUncleByBlockNumberAndIndex: EthGetUncleByBlockNumberAndIndexJsonRpcRequest
	eth_getBlockTransactionCountByHash: EthGetBlockTransactionCountByHashJsonRpcRequest
	eth_getBlockTransactionCountByNumber: EthGetBlockTransactionCountByNumberJsonRpcRequest
	eth_getTransactionByBlockHashAndIndex: EthGetTransactionByBlockHashAndIndexJsonRpcRequest
	eth_getTransactionByBlockNumberAndIndex: EthGetTransactionByBlockNumberAndIndexJsonRpcRequest
}