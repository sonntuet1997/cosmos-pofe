import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sonntuet1997.pofe.pofe";
export interface Claim {
    creator: string;
    id: number;
    proof: string;
}
export declare const Claim: {
    encode(message: Claim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Claim;
    fromJSON(object: any): Claim;
    toJSON(message: Claim): unknown;
    fromPartial(object: DeepPartial<Claim>): Claim;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
