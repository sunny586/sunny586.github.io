/**
 * Created by ex_xiongyet on 2015/7/23.
 */
define(function (require, exports, module) {
    var tempA = require("text!../views/a.html");
    var tempB = require("text!../views/b.html");
    var header = $("#header");
    var footer = $("#footer");
    var TestRoute = Backbone.Router.extend({
        routes : {
            '' : 'main',
            'search' : '',
            'search/:key' : 'search_key',
            'search/:key/p:page' : 'search_key_page',
            '*search' : 'search_defaul'
        },
        initialize : function () {
            //alert('aaaa');
            this.route("search", function () {
                footer.html(tempB);
            });
        },
        main : function () {
            footer.html(tempA);
        },
        search_key : function (key) {
            footer.html("查询关键字" + key + "记录");
        },
        search_key_page : function (key, page) {
            footer.html("查询列表" + key + "记录,页码为" + page);
        },
        search_defaul : function () {
            footer.html("其他页");
        }
    });
    //alert('bbbb');
    var router = new TestRoute();

    router.route('search/:key/p:page', 'search_key_page', function (key, page) {
        footer.html("实例化后，查询关键字为" + key + "记录，页码为" + page);
    });
    
    router.on("route:search_key", function (key) {
        console.info("You click 关键字查询：" + key);
    });
    Backbone.history.start();
});