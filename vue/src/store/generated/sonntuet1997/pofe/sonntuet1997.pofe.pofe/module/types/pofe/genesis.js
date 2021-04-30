/* eslint-disable */
import { Claim } from "../pofe/claim";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "sonntuet1997.pofe.pofe";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.claimList) {
            Claim.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.claimList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimList.push(Claim.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.claimList = [];
        if (object.claimList !== undefined && object.claimList !== null) {
            for (const e of object.claimList) {
                message.claimList.push(Claim.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.claimList) {
            obj.claimList = message.claimList.map((e) => e ? Claim.toJSON(e) : undefined);
        }
        else {
            obj.claimList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.claimList = [];
        if (object.claimList !== undefined && object.claimList !== null) {
            for (const e of object.claimList) {
                message.claimList.push(Claim.fromPartial(e));
            }
        }
        return message;
    },
};
