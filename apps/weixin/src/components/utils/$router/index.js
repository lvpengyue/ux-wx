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
            name: 'demo'
        }
    }, {
        path: '/pin-tuan',
        name: 'pin-tuan',
        component(resolve) {
            require.ensure(['../../views/pin-tuan/index.vue'], () => {
                resolve(require('../../views/pin-tuan/index.vue'));
            }, 'static/views/pin-tuan/index');
        }
    }, {
        path: '/demo',
        name: 'demo',
        component(resolve) {
            require.ensure(['../../views/demo/index.vue'], () => {
                resolve(require('../../views/demo/index.vue'));
            }, 'static/views/demo/index');
        }
    }]
});

router.beforeEach((to, from, next) => {

    // 系统初始化逻辑
    next();
});

router.afterEach(() => {

    // 切换页面后将屏幕滚动至顶端
    window.scrollTo(0, 0);
});

export default router;
