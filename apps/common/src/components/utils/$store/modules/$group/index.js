import util from 'util';
import $apiConf from '../../../$api-conf';



const state = {

    /**
     * rsa加密字符串
     * @type {String}
     */
    rsa: '',

    /**
     * 用户信息
     * @type {Object}
     */
    userData: '',

    /**
     * 收货地址
     */
    address: '',

    /**
     * 3.0首页入口获取的加密字符串
     */
    rsa3: '5fe8a0784376b5af9cfcbce5235df123cee49bd83e2fe41af2755e74ee937b5588da31bfda8042b342de318dcf9bce022fb26f7f381a705e2e5ca507602160f6e3153047070598ceb618cec31b5606e00325b991e9a8afe935d14a1fd41ee5f2a0ccff8edea8be2762a5c67e0273d3d62d61e2200941605bbd58b37dbf305a20',

    user3: '', // 用户信息

    userAccount3: '', // 用户认证地址

    config3: '', // 配置信息

    sourceParams3: {
        reqType: 'wxMp',
        wxAppid: 'wx94393c7b982e87443a82ab383c6f59ff',
        apiSign: '',
        apiTimestamp: 0,
        token: '7C23AD34C76B899A34EBB74F226DB87F',
        userId: 2335
    }
};

const $GROUP_SET_RSA = '$GROUP_SET_RSA';
const $GROUP_SET_RSA3 = '$GROUP_SET_RSA3';
const $GROUP_SET_USER_DATA = '$GROUP_SET_USER_DATA';
const $GROUP_SET_ADDRESS = '$GROUP_SET_ADDRESS';
const $GROUP_SET_USER3 = '$GROUP_SET_USER3';
const $GROUP_SET_USER_ACCOUNT3 = '$GROUP_SET_USER_ACCOUNT3';
const $GROUP_SET_CONFIG3 = '$GROUP_SET_CONFIG3';
const $GROUP_SET_SOURCE_PARAMS3 = '$GROUP_SET_SOURCE_PARAMS3';


const mutations = {
    /**
     * rsa加密字符串
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [$GROUP_SET_RSA](state, mutation) {
        state.rsa = mutation.payload;
    },

    /**
     * 用户信息
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [$GROUP_SET_USER_DATA](state, mutation) {
        state.userData = mutation.payload;
    },

    /**
     * 收货信息
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [$GROUP_SET_ADDRESS](state, mutation) {
        state.address = mutation.payload;
    },

    /**
     * rsa3加密字符串
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [$GROUP_SET_RSA3](state, mutation) {
        state.rsa3 = mutation.payload;
    },

    /**
     * 3.0用户信息
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [$GROUP_SET_USER3](state, mutation) {
        state.user3 = mutation.payload;
    },

    /**
     * 3.0 用户认证地址
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [$GROUP_SET_USER_ACCOUNT3](state, mutation) {
        state.userAccount3 = mutation.payload;
    },

    /**
     * 3.0 配置信息
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [$GROUP_SET_CONFIG3](state, mutation) {
        state.config3 = mutation.payload;
    },

    /**
     * 3.0 接口基础校验参数
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [$GROUP_SET_SOURCE_PARAMS3](state, mutation) {
        state.sourceParams3 = Object.assign({}, state.sourceParams3, mutation.payload);
    }
};

const actions = {

    /**
     * rsa加密字符串
     * @method $groupSetAccount
     * @param {Object} context context
     * @param {String} info rsa加密字符串
     */
    async $groupSetRsa({
        commit
    }, info) {
        if (util.isString(info)) {
            commit({
                type: $GROUP_SET_RSA,
                payload: info
            });
        } else {
            throw new Error('$groupSetRsa invalid info');
        }
    },

    /**
     * 用户信息
     * @method $groupSetAccount
     * @param {Object} context context
     * @param {Object} info 用户信息
     */
    async $groupSetUserData({
        commit
    }, info) {
        commit({
            type: $GROUP_SET_USER_DATA,
            payload: info
        });
    },

    /**
     * 保存收货地址
     * @method $groupSetAccount
     * @param {Object} context context
     * @param {Object} info 用户信息
     */
    async $groupSetGetAddress({
        commit
    }, info) {
        commit({
            type: $GROUP_SET_ADDRESS,
            payload: info
        });
    },

    /**
     * 调用添加收货地址
     * @param {Object} context context
     * @param {Object} params {id, token, userid}
     */
    async $groupSetAddress({
        commit,
        dispatch,
        state
    }, params) {
        try {
            const response = await dispatch('$apisCall', {
                config: $apiConf.API_ADDRESS_SAVE,
                params
            });

            if (response.code !== 1) {
                alert(response.msg);
            }

            commit({
                type: $GROUP_SET_ADDRESS,
                payload: response
            });
        } catch (error) {
            alert('添加收货地址失败');
        }
    },

    /**
     * 3.0加密字符串
     * @method $groupSetUser3
     * @param {Object} context context
     * @param {Object} info 用户信息
     */
    async $groupSetRsa3({
        commit
    }, info) {
        commit({
            type: $GROUP_SET_RSA3,
            payload: info
        });
    },


    /**
     * 调用获取设置的接口
     * @param {Object} context context
     */
    // async $groupSetConfig3({
    //     commit,
    //     dispatch,
    //     state
    // }) {
    //     try {
    //         const response = await dispatch('$apisCall', {
    //             config: $apiConf.API_MALL_PRODUCT_LIST
    //         });

    //         if (response.code !== 1) {
    //             alert(response.info);
    //         }

    //         commit({
    //             type: MALL_HOME_SET_DATA,
    //             payload: response
    //         });
    //     } catch (error) {
    //         console.log(`获取商城列表失败:${error.code}`);
    //     }
    // }

    /**
     * 3.0用户信息
     * @method $groupSetUser3
     * @param {Object} context context
     * @param {Object} info 用户信息
     */
    async $groupSetUser3({
        commit
    }, info) {
        commit({
            type: $GROUP_SET_USER3,
            payload: info
        });
    },

    /**
     * 3.0用户认证地址
     * @method $groupSetUserAccount3
     * @param {Object} context context
     * @param {Object} info 用户信息
     */
    async $groupSetUserAccount3({
        commit
    }, info) {
        commit({
            type: $GROUP_SET_USER_ACCOUNT3,
            payload: info
        });
    },

    /**
     * 3.0 配置信息
     * @method $groupSetUserAccount3
     * @param {Object} context context
     * @param {Object} config 配置信息
     */
    async $groupSetConfig3({
        commit
    }, config) {
        commit({
            type: $GROUP_SET_CONFIG3,
            payload: config
        });
    },

    /**
     * 3.0 接口基础校验参数
     * @method $groupSetUserAccount3
     * @param {Object} context context
     * @param {Object} params 参数信息
     */
    async $groupSetSourceParams3({
        commit
    }, params) {
        commit({
            type: $GROUP_SET_SOURCE_PARAMS3,
            payload: params
        });
    }
};

const getters = {

    /**
     * 获取rsa
     * @param {Object} state 状态数据
     * @return {Object} state.rsa 用户对象
     */
    $groupRsa(state) {
        return state.rsa;
    },

    /**
     * 获取rsa3
     * @param {Object} state 状态数据
     * @return {Object} state.rsa 用户对象
     */
    $groupRsa3(state) {
        return state.rsa3;
    },

    /**
     * 获取userData
     * @param {Object} state 状态数据
     * @return {Object} state.userData 用户对象
     */
    $groupUserData(state) {
        return state.userData;
    },

    /**
     * 获取address
     * @param {Object} state 状态数据
     * @return {Object} state.address 收货地址
     */
    $groupAddress(state) {
        return state.address;
    },

    /**
     * 获取3.0用户信息
     * @param {Object} state 状态数据
     * @return {Object} state.user3 用户信息
     */
    $groupUser3(state) {
        return state.user3;
    },

    /**
     * 获取3.0用户认证地址
     * @param {Object} state 状态数据
     * @return {Object} state.userAccount3 用户认证地址
     */
    $groupUserAccount3(state) {
        return state.userAccount3;
    },

    /**
     * 获取3.0配置信息
     * @param {Object} state 状态数据
     * @return {Object} state.config3 用户认证地址
     */
    $groupUserConfig3(state) {
        return state.config3;
    },

    /**
     * 获取3.0接口基础参数
     * @param {Object} state 状态数据
     * @return {Object} state.sourceParams3 接口基础参数
     */
    $groupSourceParams3(state) {
        return state.sourceParams3;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
