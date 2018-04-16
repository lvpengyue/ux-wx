// https://github.com/vuejs/vuex/issues/451
import 'core-js/fn/promise';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// import Cookies from 'js-cookie';
import $group from '@components/utils/$store/modules/$group';
import $apis from '@components/utils/$store/modules/$apis';
import $entities from '@components/utils/$store/modules/$entities';
import $app from './modules/$app';
import pintuan from './modules/pin-tuan';
import shopDetail from './modules/shop-detail';
import confirmOrder from './modules/confirm-order';
import pay from './modules/pay';
import orderDetail from './modules/order-detail';



Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [
        createPersistedState({
            key: '$group',
            paths: ['$group']
        })
    ],

    // plugins: [
    //     createPersistedState({
    //         key: '$group',
    //         paths: ['$group'],
    //         storage: {
    //             getItem: key => Cookies.get(key),
    //             setItem: (key, value) => Cookies.set(key, value, {
    //                 expires: 1
    //             }),
    //             removeItem: key => Cookies.remove(key)
    //         }
    //     })
    // ],
    modules: {
        $group,
        $apis,
        $entities,
        $app,
        pintuan,
        shopDetail,
        confirmOrder,
        pay,
        orderDetail
    }
});
