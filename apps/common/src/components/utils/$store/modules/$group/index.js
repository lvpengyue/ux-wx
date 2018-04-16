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
    address: ''
};

const $GROUP_SET_RSA = '$GROUP_SET_RSA';
const $GROUP_SET_USER_DATA = '$GROUP_SET_USER_DATA';
const $GROUP_SET_ADDRESS = '$GROUP_SET_ADDRESS';


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
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
