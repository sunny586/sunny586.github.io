layui.use(['jquery', 'table'], function () {
	var table = layui.table,
		$ = layui.$;

	var tableIns = table.render({
		elem: '#table',
		url: '/index.php/Admin/get_user_list',
		parseData: function (res) { //res 即为原始返回的数据
			return {
				"code": 0, //解析接口状态
				"msg": '', //解析提示文本
				"count": res.total, //解析数据长度
				"data": res.list //解析数据列表
			};
		},
		request: {
			pageName: 'to_page',
			limitName: 'page_size'
		},
		page: {
			prev: '上一页',
			next: '下一页',
			layout: ['prev', 'page', 'next', 'count', 'skip']
		},
		cols: [
			[{
					field: 'id',
					title: '编号'
				}, {
					field: 'user_id',
					title: '平台用户ID'
				}, {
					field: 'wx',
					title: '联系方式'
				}, {
					field: 'is_true',
					title: '是否真实',
					templet: function (data) {
						return data.is_true == 1 ? '真' : (data.is_true == 2 ? '假' : '未验证');
					}
				}, {
					field: 'send_gold',
					title: '赠送的金币数量'
				}, {
					field: 'create_time',
					title: '创建时间',
					templet: function (data) {
						return dateFormat('Y-m-d H:i:s', parseInt(data.create_time));
					}
				},{
					title: '操作',
					width: 235,
					toolbar: '#bar'
				}
			]
		]
  });
  

  	// tool的点击事件
  	table.on('tool(test)', function (obj) {
  		var data = obj.data;
  		var layEvent = obj.event;
  		
  		if (layEvent === 'edit') {
        console.log(data,'data...')

        layer.open({
          title: '修改',
          type:1,
        	content: $('#edit') 
        });


  		}

  	});

});
