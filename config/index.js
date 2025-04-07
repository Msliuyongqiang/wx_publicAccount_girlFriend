const params = {
    appid: 'wx95c0acae466ab8a8', //登录测试号就会出现
    secret: '72f0824f30c85c3f3ad91a3c55c8a9ab',// 同上
    // touser: ['ozzts6uJ4318X1sfuUnAGmu47NBc','ozzts6jABtD6XOor1VO4cnEN4UB8'],// 被推送用户，微信扫码生成
    // touser: 'ozzts6jABtD6XOor1VO4cnEN4UB8',// 被推送用户，微信扫码生成小于
    touser: 'ozzts6uJ4318X1sfuUnAGmu47NBc',// 被推送用户，微信扫码生成l刘永强
    // template_id:'wQ-ipLl-jmSdsLiGVOyAINg4bZ32CbG5-Y3OkLFuaqk', // 新建 模板消息，生成
    template_id:'J4vqUUxojD02w_lRvudisEzNXkok0gZzG7opYb-5YFQ', // 新建 模板消息，生成
    users:['ozzts6uJ4318X1sfuUnAGmu47NBc','ozzts6jABtD6XOor1VO4cnEN4UB8'],
    // users:['ozzts6uJ4318X1sfuUnAGmu47NBc'],
    wea_app_id: '27657985',
    wea_app_secret: 'a6IxMQbG',
    wea_city_id: '101180110',
    // 101030100  天津
    // 101180101  郑州
    // 101180110  郑州二七

};

module.exports = {
    params
}