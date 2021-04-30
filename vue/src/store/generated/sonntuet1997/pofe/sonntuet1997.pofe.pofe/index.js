import { txClient, queryClient } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { Claim } from "./module/types/pofe/claim";
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Claim: {},
        ClaimAll: {},
        _Structure: {
            Claim: getStructure(Claim.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getClaim: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Claim[JSON.stringify(params)] ?? {};
        },
        getClaimAll: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ClaimAll[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('init');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach((subscription) => {
                dispatch(subscription.action, subscription.payload);
            });
        },
        async QueryClaim({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryClaim(key.id, query)).data : (await (await initQueryClient(rootGetters)).queryClaim(key.id)).data;
                commit('QUERY', { query: 'Claim', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryClaim', payload: { options: { all }, params: { ...key }, query } });
                return getters['getClaim']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryClaim', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryClaimAll({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryClaimAll(query)).data : (await (await initQueryClient(rootGetters)).queryClaimAll()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryClaimAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'ClaimAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryClaimAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getClaimAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryClaimAll', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async sendMsgCreateClaim({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateClaim(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateClaim:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgUpdateClaim({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateClaim(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateClaim:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgDeleteClaim({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteClaim(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteClaim:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async MsgCreateClaim({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateClaim(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateClaim:Create', 'Could not create message.');
                }
            }
        },
        async MsgUpdateClaim({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateClaim(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateClaim:Create', 'Could not create message.');
                }
            }
        },
        async MsgDeleteClaim({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteClaim(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteClaim:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteClaim:Create', 'Could not create message.');
                }
            }
        },
    }
};
