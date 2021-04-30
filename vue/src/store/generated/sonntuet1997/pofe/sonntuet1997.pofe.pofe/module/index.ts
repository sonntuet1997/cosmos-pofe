// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteClaim } from "./types/pofe/tx";
import { MsgCreateClaim } from "./types/pofe/tx";
import { MsgUpdateClaim } from "./types/pofe/tx";


const types = [
  ["/sonntuet1997.pofe.pofe.MsgDeleteClaim", MsgDeleteClaim],
  ["/sonntuet1997.pofe.pofe.MsgCreateClaim", MsgCreateClaim],
  ["/sonntuet1997.pofe.pofe.MsgUpdateClaim", MsgUpdateClaim],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgDeleteClaim: (data: MsgDeleteClaim): EncodeObject => ({ typeUrl: "/sonntuet1997.pofe.pofe.MsgDeleteClaim", value: data }),
    msgCreateClaim: (data: MsgCreateClaim): EncodeObject => ({ typeUrl: "/sonntuet1997.pofe.pofe.MsgCreateClaim", value: data }),
    msgUpdateClaim: (data: MsgUpdateClaim): EncodeObject => ({ typeUrl: "/sonntuet1997.pofe.pofe.MsgUpdateClaim", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
