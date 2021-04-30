// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateClaim } from "./types/pofe/tx";
import { MsgUpdateClaim } from "./types/pofe/tx";
import { MsgDeleteClaim } from "./types/pofe/tx";
const types = [
    ["/sonntuet1997.pofe.pofe.MsgCreateClaim", MsgCreateClaim],
    ["/sonntuet1997.pofe.pofe.MsgUpdateClaim", MsgUpdateClaim],
    ["/sonntuet1997.pofe.pofe.MsgDeleteClaim", MsgDeleteClaim],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgCreateClaim: (data) => ({ typeUrl: "/sonntuet1997.pofe.pofe.MsgCreateClaim", value: data }),
        msgUpdateClaim: (data) => ({ typeUrl: "/sonntuet1997.pofe.pofe.MsgUpdateClaim", value: data }),
        msgDeleteClaim: (data) => ({ typeUrl: "/sonntuet1997.pofe.pofe.MsgDeleteClaim", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
