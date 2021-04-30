import { Reader, Writer } from "protobufjs/minimal";
import { Claim } from "../pofe/claim";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "sonntuet1997.pofe.pofe";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetClaimRequest {
    id: number;
}
export interface QueryGetClaimResponse {
    Claim: Claim | undefined;
}
export interface QueryAllClaimRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllClaimResponse {
    Claim: Claim[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetClaimRequest: {
    encode(message: QueryGetClaimRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetClaimRequest;
    fromJSON(object: any): QueryGetClaimRequest;
    toJSON(message: QueryGetClaimRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetClaimRequest>): QueryGetClaimRequest;
};
export declare const QueryGetClaimResponse: {
    encode(message: QueryGetClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetClaimResponse;
    fromJSON(object: any): QueryGetClaimResponse;
    toJSON(message: QueryGetClaimResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetClaimResponse>): QueryGetClaimResponse;
};
export declare const QueryAllClaimRequest: {
    encode(message: QueryAllClaimRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllClaimRequest;
    fromJSON(object: any): QueryAllClaimRequest;
    toJSON(message: QueryAllClaimRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllClaimRequest>): QueryAllClaimRequest;
};
export declare const QueryAllClaimResponse: {
    encode(message: QueryAllClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllClaimResponse;
    fromJSON(object: any): QueryAllClaimResponse;
    toJSON(message: QueryAllClaimResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllClaimResponse>): QueryAllClaimResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Claim(request: QueryGetClaimRequest): Promise<QueryGetClaimResponse>;
    ClaimAll(request: QueryAllClaimRequest): Promise<QueryAllClaimResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Claim(request: QueryGetClaimRequest): Promise<QueryGetClaimResponse>;
    ClaimAll(request: QueryAllClaimRequest): Promise<QueryAllClaimResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
