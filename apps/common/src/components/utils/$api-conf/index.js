export default {
    /**
     * 添加收货地址
     * @type {Object}
     */
    API_ADDRESS_SAVE: {
        name: 'API_ADDRESS_SAVE',

        proxy: {
            url: '/api/address/save',
            method: 'GET',
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            }
        }
    }
};
