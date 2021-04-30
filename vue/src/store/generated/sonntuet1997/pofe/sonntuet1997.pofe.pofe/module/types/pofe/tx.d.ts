import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "sonntuet1997.pofe.pofe";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateClaim {
    creator: string;
    proof: string;
}
export interface MsgCreateClaimResponse {
    id: number;
}
export interface MsgUpdateClaim {
    creator: string;
    id: number;
    proof: string;
}
export interface MsgUpdateClaimResponse {
}
export interface MsgDeleteClaim {
    creator: string;
    id: number;
}
export interface MsgDeleteClaimResponse {
}
export declare const MsgCreateClaim: {
    encode(message: MsgCreateClaim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateClaim;
    fromJSON(object: any): MsgCreateClaim;
    toJSON(message: MsgCreateClaim): unknown;
    fromPartial(object: DeepPartial<MsgCreateClaim>): MsgCreateClaim;
};
export declare const MsgCreateClaimResponse: {
    encode(message: MsgCreateClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateClaimResponse;
    fromJSON(object: any): MsgCreateClaimResponse;
    toJSON(message: MsgCreateClaimResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateClaimResponse>): MsgCreateClaimResponse;
};
export declare const MsgUpdateClaim: {
    encode(message: MsgUpdateClaim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateClaim;
    fromJSON(object: any): MsgUpdateClaim;
    toJSON(message: MsgUpdateClaim): unknown;
    fromPartial(object: DeepPartial<MsgUpdateClaim>): MsgUpdateClaim;
};
export declare const MsgUpdateClaimResponse: {
    encode(_: MsgUpdateClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateClaimResponse;
    fromJSON(_: any): MsgUpdateClaimResponse;
    toJSON(_: MsgUpdateClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateClaimResponse>): MsgUpdateClaimResponse;
};
export declare const MsgDeleteClaim: {
    encode(message: MsgDeleteClaim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteClaim;
    fromJSON(object: any): MsgDeleteClaim;
    toJSON(message: MsgDeleteClaim): unknown;
    fromPartial(object: DeepPartial<MsgDeleteClaim>): MsgDeleteClaim;
};
export declare const MsgDeleteClaimResponse: {
    encode(_: MsgDeleteClaimResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteClaimResponse;
    fromJSON(_: any): MsgDeleteClaimResponse;
    toJSON(_: MsgDeleteClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteClaimResponse>): MsgDeleteClaimResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateClaim(request: MsgCreateClaim): Promise<MsgCreateClaimResponse>;
    UpdateClaim(request: MsgUpdateClaim): Promise<MsgUpdateClaimResponse>;
    DeleteClaim(request: MsgDeleteClaim): Promise<MsgDeleteClaimResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateClaim(request: MsgCreateClaim): Promise<MsgCreateClaimResponse>;
    UpdateClaim(request: MsgUpdateClaim): Promise<MsgUpdateClaimResponse>;
    DeleteClaim(request: MsgDeleteClaim): Promise<MsgDeleteClaimResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
