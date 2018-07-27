import util from 'util';
import $apiConf from '../../../$api-conf';



const state = {

    /**
     * 首页信息
     * @type {String}
     */
    detail: '',

    /**
     * 配置数据
    */
    config: '',

    /**
     * 微信支付基础配置
    */
    wxconfig: '',

    /**
     * 用户中心的数据
    */
    userCenter: ''
};

const HOME_SET_DETAIL = 'HOME_SET_DETAIL';
const HOME_SET_CONFIG = 'HOME_SET_CONFIG';
const HOME_SET_WXCONFIG = 'HOME_SET_WXCONFIG';
const HOME_SET_USER_CENTER = 'HOME_SET_USER_CENTER';

const mutations = {

    /**
     * 首页的数据
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [HOME_SET_DETAIL](state, mutation) {
        state.detail = mutation.payload;
    },

    /**
     * 配置信息
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [HOME_SET_CONFIG](state, mutation) {
        state.config = mutation.payload;
    },

    /**
     * 微信配置信息
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [HOME_SET_WXCONFIG](state, mutation) {
        state.wxconfig = mutation.payload;
    },

    /**
     * 用户中心信息
     * @param {Object} state state
     * @param {FSA} mutation mutation
     */
    [HOME_SET_USER_CENTER](state, mutation) {
        state.userCenter = mutation.payload;
    }
};

const actions = {
    /**
     * 首页数据
     * @param {Object} context context
     * @param {Object} params params
     */
    async homeGetDetail({
        commit,
        dispatch,
        state
    }, params) {
        try {
            const response = await dispatch('$apisCall', {
                config: $apiConf.API_REQUEST_FORM,
                params: Object.assign({}, {
                    uri: '/api/washer/index'
                }, params)
            });

            if (response.code !== 1) {
                alert(response.msg);
            }
            commit({
                type: HOME_SET_DETAIL,
                payload: response
            });
        } catch (error) {
            alert('创建首页信息失败');
        }
    },

    /**
     * 获取配置信息
     * @param {Object} context context
     * @param {Object} params {userId 可不传}
     */
    async homeGetConfig({
        commit,
        dispatch,
        state
    }, params) {
        try {
            const response = await dispatch('$apisCall', {
                config: $apiConf.API_REQUEST_FORM,
                params: Object.assign({}, {
                    uri: '/api/index/config'
                }, params)
            });

            if (response.code !== 1) {
                alert(response.msg);
            }
            commit({
                type: HOME_SET_CONFIG,
                payload: response
            });
        } catch (error) {
            alert('获取配置数据失败');
        }
    },

    /**
     * 获取微信基础配置数据
     * @param {Object} context context
     */
    async homeGetWxconfig({
        commit,
        dispatch,
        state
    }) {
        try {
            const response = await dispatch('$apisCall', {
                config: $apiConf.MALL_GET_CONFIG
            });

            if (response.code !== 1) {
                alert(response.msg);
            }
            commit({
                type: HOME_SET_WXCONFIG,
                payload: response
            });
        } catch (error) {
            alert('获取微信配置失败');
        }
    },

    /**
     * 获取用户中心数据
     * @param {Object} context context
     * @param {Object} params {userId, token}
     */
    async homeGetUserCenter({
        commit,
        dispatch,
        state
    }, params) {
        try {
            const response = await dispatch('$apisCall', {
                config: $apiConf.API_REQUEST_FORM,
                params: Object.assign({}, {
                    uri: '/api/user/center'
                }, params)
            });

            if (response.code !== 1) {
                alert(response.msg);
            }
            commit({
                type: HOME_SET_USER_CENTER,
                payload: response
            });
        } catch (error) {
            alert('获取用户中心数据失败');
        }
    }
};

const getters = {

    /**
     * 获取首页详情
     * @param {Object} state state
     * @return {Object} input 商品详情
     */
    homeDetail(state) {
        return state.detail;
    },

    /**
     * 获取配置信息
     * @param {Object} state state
     * @return {Object} config 配置信息
     */
    homeConfig(state) {
        return state.config;
    },

    /**
     * 获取微信配置
     * @param {Object} state state
     * @return {Object} wxconfig 微信配置详情
     */
    homeWxconfig(state) {
        return state.wxconfig;
    },

    /**
     * 获取用户中心
     *
     * @param {Object} state state
     * @returns {Object} userCenter 用户中心
     */
    homeUserCenter(state) {
        return state.userCenter;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
