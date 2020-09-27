interface LND {
    autopilot: any,
    chain: any,
    default: any,
    invoices: any,
    router: any,
    router_legacy: any,
    signer: any,
    tower_client: any,
    tower_server: any,
    wallet: any,
    version: any,
}

interface Route {
    base_fee_mtokens?: string,
    channel?: string,
    cltv_delta?: number,
    fee_rate?: number,
    public_key: string
}

type ProbeForRouteSubscription = {
    on: (event: 'probe_success',
        cb: (res: {
            route: {
                fee: number,
                fee_mtokens: string,
                mtokens: string,
                safe_fee: number,
                safe_tokens: number,
                timeout: number,
                tokens: number,
            }
        }) => void) => void
}

declare module "ln-service" {
    export function authenticatedLndGrpc(params: {
        cert: string,
        macaroon: string,
        socket: string,
    }): { lnd: LND }
    export function parsePaymentRequest(params: { request: string }): {
        chain_addresses?: string,
        cltv_delta: number,
        created_at: string,
        description?: string,
        description_hash?: string,
        destination: string,
        expires_at: string,
        features: {
            bit: number,
            is_required: boolean,
            type: string,
        }[],
        id: string,
        is_expired: boolean,
        mtokens?: string,
        network: 'bitcoin' | 'regtest' | 'testnet',
        payment?: string,
        routes?: Route[][],
        safe_tokens?: number,
        tokens?: number
    }
    export function subscribeToProbeForRoute(params: {
        lnd: LND,
        cltv_delta?: number,
        destination: string,
        features?: number,
        max_fee?: number,
        payment?: string,
        routes?: Route[],
        tokens?: number,
        total_mtokens?: number,
    }): ProbeForRouteSubscription
}