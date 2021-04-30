/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Claim } from "../pofe/claim";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "sonntuet1997.pofe.pofe";

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

const baseQueryGetClaimRequest: object = { id: 0 };

export const QueryGetClaimRequest = {
  encode(
    message: QueryGetClaimRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetClaimRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetClaimRequest } as QueryGetClaimRequest;
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

  fromJSON(object: any): QueryGetClaimRequest {
    const message = { ...baseQueryGetClaimRequest } as QueryGetClaimRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetClaimRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetClaimRequest>): QueryGetClaimRequest {
    const message = { ...baseQueryGetClaimRequest } as QueryGetClaimRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetClaimResponse: object = {};

export const QueryGetClaimResponse = {
  encode(
    message: QueryGetClaimResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Claim !== undefined) {
      Claim.encode(message.Claim, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetClaimResponse } as QueryGetClaimResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Claim = Claim.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetClaimResponse {
    const message = { ...baseQueryGetClaimResponse } as QueryGetClaimResponse;
    if (object.Claim !== undefined && object.Claim !== null) {
      message.Claim = Claim.fromJSON(object.Claim);
    } else {
      message.Claim = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetClaimResponse): unknown {
    const obj: any = {};
    message.Claim !== undefined &&
      (obj.Claim = message.Claim ? Claim.toJSON(message.Claim) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetClaimResponse>
  ): QueryGetClaimResponse {
    const message = { ...baseQueryGetClaimResponse } as QueryGetClaimResponse;
    if (object.Claim !== undefined && object.Claim !== null) {
      message.Claim = Claim.fromPartial(object.Claim);
    } else {
      message.Claim = undefined;
    }
    return message;
  },
};

const baseQueryAllClaimRequest: object = {};

export const QueryAllClaimRequest = {
  encode(
    message: QueryAllClaimRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllClaimRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllClaimRequest } as QueryAllClaimRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllClaimRequest {
    const message = { ...baseQueryAllClaimRequest } as QueryAllClaimRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllClaimRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllClaimRequest>): QueryAllClaimRequest {
    const message = { ...baseQueryAllClaimRequest } as QueryAllClaimRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllClaimResponse: object = {};

export const QueryAllClaimResponse = {
  encode(
    message: QueryAllClaimResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Claim) {
      Claim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllClaimResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllClaimResponse } as QueryAllClaimResponse;
    message.Claim = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Claim.push(Claim.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllClaimResponse {
    const message = { ...baseQueryAllClaimResponse } as QueryAllClaimResponse;
    message.Claim = [];
    if (object.Claim !== undefined && object.Claim !== null) {
      for (const e of object.Claim) {
        message.Claim.push(Claim.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllClaimResponse): unknown {
    const obj: any = {};
    if (message.Claim) {
      obj.Claim = message.Claim.map((e) => (e ? Claim.toJSON(e) : undefined));
    } else {
      obj.Claim = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllClaimResponse>
  ): QueryAllClaimResponse {
    const message = { ...baseQueryAllClaimResponse } as QueryAllClaimResponse;
    message.Claim = [];
    if (object.Claim !== undefined && object.Claim !== null) {
      for (const e of object.Claim) {
        message.Claim.push(Claim.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Claim(request: QueryGetClaimRequest): Promise<QueryGetClaimResponse>;
  ClaimAll(request: QueryAllClaimRequest): Promise<QueryAllClaimResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Claim(request: QueryGetClaimRequest): Promise<QueryGetClaimResponse> {
    const data = QueryGetClaimRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonntuet1997.pofe.pofe.Query",
      "Claim",
      data
    );
    return promise.then((data) =>
      QueryGetClaimResponse.decode(new Reader(data))
    );
  }

  ClaimAll(request: QueryAllClaimRequest): Promise<QueryAllClaimResponse> {
    const data = QueryAllClaimRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonntuet1997.pofe.pofe.Query",
      "ClaimAll",
      data
    );
    return promise.then((data) =>
      QueryAllClaimResponse.decode(new Reader(data))
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
