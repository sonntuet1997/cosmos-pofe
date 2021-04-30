/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "sonntuet1997.pofe.pofe";

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

export interface MsgUpdateClaimResponse {}

export interface MsgDeleteClaim {
  creator: string;
  id: number;
}

export interface MsgDeleteClaimResponse {}

const baseMsgCreateClaim: object = { creator: "", proof: "" };

export const MsgCreateClaim = {
  encode(message: MsgCreateClaim, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.proof !== "") {
      writer.uint32(18).string(message.proof);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateClaim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateClaim } as MsgCreateClaim;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.proof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateClaim {
    const message = { ...baseMsgCreateClaim } as MsgCreateClaim;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = String(object.proof);
    } else {
      message.proof = "";
    }
    return message;
  },

  toJSON(message: MsgCreateClaim): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateClaim>): MsgCreateClaim {
    const message = { ...baseMsgCreateClaim } as MsgCreateClaim;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof;
    } else {
      message.proof = "";
    }
    return message;
  },
};

const baseMsgCreateClaimResponse: object = { id: 0 };

export const MsgCreateClaimResponse = {
  encode(
    message: MsgCreateClaimResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateClaimResponse } as MsgCreateClaimResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateClaimResponse {
    const message = { ...baseMsgCreateClaimResponse } as MsgCreateClaimResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateClaimResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateClaimResponse>
  ): MsgCreateClaimResponse {
    const message = { ...baseMsgCreateClaimResponse } as MsgCreateClaimResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateClaim: object = { creator: "", id: 0, proof: "" };

export const MsgUpdateClaim = {
  encode(message: MsgUpdateClaim, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateClaim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateClaim } as MsgUpdateClaim;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.proof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateClaim {
    const message = { ...baseMsgUpdateClaim } as MsgUpdateClaim;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = String(object.proof);
    } else {
      message.proof = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateClaim): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateClaim>): MsgUpdateClaim {
    const message = { ...baseMsgUpdateClaim } as MsgUpdateClaim;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof;
    } else {
      message.proof = "";
    }
    return message;
  },
};

const baseMsgUpdateClaimResponse: object = {};

export const MsgUpdateClaimResponse = {
  encode(_: MsgUpdateClaimResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateClaimResponse } as MsgUpdateClaimResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateClaimResponse {
    const message = { ...baseMsgUpdateClaimResponse } as MsgUpdateClaimResponse;
    return message;
  },

  toJSON(_: MsgUpdateClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateClaimResponse>): MsgUpdateClaimResponse {
    const message = { ...baseMsgUpdateClaimResponse } as MsgUpdateClaimResponse;
    return message;
  },
};

const baseMsgDeleteClaim: object = { creator: "", id: 0 };

export const MsgDeleteClaim = {
  encode(message: MsgDeleteClaim, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteClaim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteClaim } as MsgDeleteClaim;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteClaim {
    const message = { ...baseMsgDeleteClaim } as MsgDeleteClaim;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteClaim): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteClaim>): MsgDeleteClaim {
    const message = { ...baseMsgDeleteClaim } as MsgDeleteClaim;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteClaimResponse: object = {};

export const MsgDeleteClaimResponse = {
  encode(_: MsgDeleteClaimResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteClaimResponse } as MsgDeleteClaimResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteClaimResponse {
    const message = { ...baseMsgDeleteClaimResponse } as MsgDeleteClaimResponse;
    return message;
  },

  toJSON(_: MsgDeleteClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteClaimResponse>): MsgDeleteClaimResponse {
    const message = { ...baseMsgDeleteClaimResponse } as MsgDeleteClaimResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateClaim(request: MsgCreateClaim): Promise<MsgCreateClaimResponse>;
  UpdateClaim(request: MsgUpdateClaim): Promise<MsgUpdateClaimResponse>;
  DeleteClaim(request: MsgDeleteClaim): Promise<MsgDeleteClaimResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateClaim(request: MsgCreateClaim): Promise<MsgCreateClaimResponse> {
    const data = MsgCreateClaim.encode(request).finish();
    const promise = this.rpc.request(
      "sonntuet1997.pofe.pofe.Msg",
      "CreateClaim",
      data
    );
    return promise.then((data) =>
      MsgCreateClaimResponse.decode(new Reader(data))
    );
  }

  UpdateClaim(request: MsgUpdateClaim): Promise<MsgUpdateClaimResponse> {
    const data = MsgUpdateClaim.encode(request).finish();
    const promise = this.rpc.request(
      "sonntuet1997.pofe.pofe.Msg",
      "UpdateClaim",
      data
    );
    return promise.then((data) =>
      MsgUpdateClaimResponse.decode(new Reader(data))
    );
  }

  DeleteClaim(request: MsgDeleteClaim): Promise<MsgDeleteClaimResponse> {
    const data = MsgDeleteClaim.encode(request).finish();
    const promise = this.rpc.request(
      "sonntuet1997.pofe.pofe.Msg",
      "DeleteClaim",
      data
    );
    return promise.then((data) =>
      MsgDeleteClaimResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
