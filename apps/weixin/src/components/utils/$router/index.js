/* eslint global-require: 0 */
import Vue from 'vue';
import VueRouter from 'vue-router';



// 加载 vue-router
Vue.use(VueRouter);

/**
 * 路由规则，各页面 vm 均采用异步组件方式实现
 * see:
 * http://webpack.github.io/docs/code-splitting.html#defining-a-split-point
 * https://github.com/vuejs/vue-router/issues/215
 *
 * and here we use CommonJS syntax, see:
 * http://www.it165.net/pro/html/201603/62608.html
 * http://webpack.github.io/docs/code-splitting.html#named-chunks
 */
const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: {
            name: 'home'
        }
    }, {
        path: '/home/:rsa',
        name: 'home',
        component(resolve) {
            require.ensure(['../../views/home/index.vue'], () => {
                resolve(require('../../views/home/index.vue'));
            }, 'static/views/home/index');
        }
    }, {
        path: '/charge',
        name: 'charge',
        component(resolve) {
            require.ensure(['../../views/charge/index.vue'], () => {
                resolve(require('../../views/charge/index.vue'));
            }, 'static/views/charge/index');
        }
    }, {
        path: '/hand-input',
        name: 'hand-input',
        component(resolve) {
            require.ensure(['../../views/hand-input/index.vue'], () => {
                resolve(require('../../views/hand-input/index.vue'));
            }, 'static/views/hand-input/index');
        }
    }, {
        path: '/order-list',
        name: 'order-list',
        component(resolve) {
            require.ensure(['../../views/order-list/index.vue'], () => {
                resolve(require('../../views/order-list/index.vue'));
            }, 'static/views/order-list/index');
        }
    }, {
        path: '/machine-list',
        name: 'machine-list',
        component(resolve) {
            require.ensure(['../../views/machine-list/index.vue'], () => {
                resolve(require('../../views/machine-list/index.vue'));
            }, 'static/views/machine-list/index');
        }
    }, {
        path: '/mode-pay',
        name: 'mode-pay',
        component(resolve) {
            require.ensure(['../../views/mode-pay/index.vue'], () => {
                resolve(require('../../views/mode-pay/index.vue'));
            }, 'static/views/mode-pay/index');
        }
    }, {
        path: '/wash',
        name: 'wash',
        component(resolve) {
            require.ensure(['../../views/wash/index.vue'], () => {
                resolve(require('../../views/wash/index.vue'));
            }, 'static/views/wash/index');
        }
    }, {
        path: '/address-list',
        name: 'address-list',
        component(resolve) {
            require.ensure(['../../views/address-list/index.vue'], () => {
                resolve(require('../../views/address-list/index.vue'));
            }, 'static/views/address-list/index');
        }
    }, {
        path: '/perfect-information',
        name: 'perfect-information',
        component(resolve) {
            require.ensure(['../../views/perfect-information/index.vue'], () => {
                resolve(require('../../views/perfect-information/index.vue'));
            }, 'static/views/perfect-information/index');
        }
    }, {
        path: '/my-coupons',
        name: 'my-coupons',
        component(resolve) {
            require.ensure(['../../views/my-coupons/index.vue'], () => {
                resolve(require('../../views/my-coupons/index.vue'));
            }, 'static/views/my-coupons/index');
        }
    }, {
        path: '/pin-tuan/:rsa',
        name: 'pin-tuan',
        component(resolve) {
            require.ensure(['../../views/pin-tuan/index.vue'], () => {
                resolve(require('../../views/pin-tuan/index.vue'));
            }, 'static/views/pin-tuan/index');
        }
    }, {
        path: '/pay',
        name: 'pay',
        component(resolve) {
            require.ensure(['../../views/pay/index.vue'], () => {
                resolve(require('../../views/pay/index.vue'));
            }, 'static/views/pay/index');
        }
    }, {
        path: '/confirm-order/:groupOrderId',
        name: 'confirm-order',
        component(resolve) {
            require.ensure(['../../views/confirm-order/index.vue'], () => {
                resolve(require('../../views/confirm-order/index.vue'));
            }, 'static/views/confirm-order/index');
        }
    }, {
        path: '/order-detail/:orderId',
        name: 'order-detail',
        component(resolve) {
            require.ensure(['../../views/order-detail/index.vue'], () => {
                resolve(require('../../views/order-detail/index.vue'));
            }, 'static/views/order-detail/index');
        }
    }, {
        path: '/shop-detail/:id',
        name: 'shop-detail',
        component(resolve) {
            require.ensure(['../../views/shop-detail/index.vue'], () => {
                resolve(require('../../views/shop-detail/index.vue'));
            }, 'static/views/shop-detail/index');
        }
    }, {
        path: '/test-my',
        name: 'test-my',
        component(resolve) {
            require.ensure(['../../views/test-my/index.vue'], () => {
                resolve(require('../../views/test-my/index.vue'));
            }, 'static/views/test-my/index');
        }
    }, {
        path: '/operation-manual',
        name: 'operation-manual',
        component(resolve) {
            require.ensure(['../../views/operation-manual/index.vue'], () => {
                resolve(require('../../views/operation-manual/index.vue'));
            }, 'static/views/operation-manual/index');
        }
    }, {
        path: '/wash-manual',
        name: 'wash-manual',
        component(resolve) {
            require.ensure(['../../views/wash-manual/index.vue'], () => {
                resolve(require('../../views/wash-manual/index.vue'));
            }, 'static/views/wash-manual/index');
        }
    }, {
        path: '/newman-manual',
        name: 'newman-manual',
        component(resolve) {
            require.ensure(['../../views/newman-manual/index.vue'], () => {
                resolve(require('../../views/newman-manual/index.vue'));
            }, 'static/views/newman-manual/index');
        }
    }, {
        path: '/exception-manual',
        name: 'exception-manual',
        component(resolve) {
            require.ensure(['../../views/exception-manual/index.vue'], () => {
                resolve(require('../../views/exception-manual/index.vue'));
            }, 'static/views/exception-manual/index');
        }
    }, {
        path: '/mall-home',
        name: 'mall-home',
        component(resolve) {
            require.ensure(['../../views/mall-home/index.vue'], () => {
                resolve(require('../../views/mall-home/index.vue'));
            }, 'static/views/mall-home/index');
        }
    }, {
        path: '/mall-my-orders',
        name: 'mall-my-orders',
        component(resolve) {
            require.ensure(['../../views/mall-my-orders/index.vue'], () => {
                resolve(require('../../views/mall-my-orders/index.vue'));
            }, 'static/views/mall-my-orders/index');
        }
    }, {
        path: '/recharge-des',
        name: 'recharge-des',
        component(resolve) {
            require.ensure(['../../views/recharge-des/index.vue'], () => {
                resolve(require('../../views/recharge-des/index.vue'));
            }, 'static/views/recharge-des/index');
        }
    }, {
        path: '/about-us',
        name: 'about-us',
        component(resolve) {
            require.ensure(['../../views/about-us/index.vue'], () => {
                resolve(require('../../views/about-us/index.vue'));
            }, 'static/views/about-us/index');
        }
    }, {
        path: '/protocol',
        name: 'protocol',
        component(resolve) {
            require.ensure(['../../views/protocol/index.vue'], () => {
                resolve(require('../../views/protocol/index.vue'));
            }, 'static/views/protocol/index');
        }
    }, {
        path: '/apply-refund/:userId/:token/:orderId',
        name: 'apply-refund',
        component(resolve) {
            require.ensure(['../../views/apply-refund/index.vue'], () => {
                resolve(require('../../views/apply-refund/index.vue'));
            }, 'static/views/apply-refund/index');
        }
    }, {
        path: '/fail-reporting',
        name: 'fail-reporting',
        component(resolve) {
            require.ensure(['../../views/fail-reporting/index.vue'], () => {
                resolve(require('../../views/fail-reporting/index.vue'));
            }, 'static/views/fail-reporting/index');
        }
    }, {
        path: '/feedback/:userId/:token',
        name: 'feedback',
        component(resolve) {
            require.ensure(['../../views/feedback/index.vue'], () => {
                resolve(require('../../views/feedback/index.vue'));
            }, 'static/views/feedback/index');
        }
    }, {
        path: '/questionnaire/:userId/:token',
        name: 'questionnaire',
        component(resolve) {
            require.ensure(['../../views/questionnaire/index.vue'], () => {
                resolve(require('../../views/questionnaire/index.vue'));
            }, 'static/views/questionnaire/index');
        }
    }, {
        path: '/trouble-shooting/:userId/:token',
        name: 'trouble-shooting',
        component(resolve) {
            require.ensure(['../../views/trouble-shooting/index.vue'], () => {
                resolve(require('../../views/trouble-shooting/index.vue'));
            }, 'static/views/trouble-shooting/index');
        }
    }]
});

router.beforeEach((to, from, next) => {
    // document.getElementById('cnzz_stat_icon_1274172339').style.display = 'none';

    // 系统初始化逻辑
    next();
});

router.afterEach(() => {
    // 切换页面后将屏幕滚动至顶端
    window.scrollTo(0, 0);
});

export default router;
