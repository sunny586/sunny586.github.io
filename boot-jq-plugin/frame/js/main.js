;
require.config({
    /* 当前目录main.js被引入index.html所以,以html为准
     * 以后require引入文件时，会自动在index.html所在的目录下查找该文件
     * */
    baseUrl: "./",
    paths: {
        "jquery": "vendor/jquery",
        "underscore": "vendor/underscore",
        "backbone": "vendor/backbone",
        "text": "vendor/require.text"   //require的插件 让require可以加载html模块
    },
    shim: {  //不支持AMD模块加载的类库,需要在这里配置
        "underscore": { exports: "_" },
        "backbone": { deps: ["underscore", "jquery"], exports: "Backbone" }
    }
});
require(["vendor/index"], function () {
    require(["js/applicationApp"]);
});