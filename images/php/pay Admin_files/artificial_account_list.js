layui.use(['jquery', 'table'], function () {
	var table = layui.table,
		$ = layui.$;

	var tableIns = table.render({
		elem: '#table',
		url: '/index.php/Admin/get_artificial_account_list',
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
					title: 'ID',
					width: 80,
					fixed: 'left'
				},
				{
					field: 'account',
					title: '备注名'
				},
				{
					field: 'type',
					title: '账号类型'
				},
				{
					field: 'status',
					title: '状态',
					templet: function (data) {
						if (data.status == '1') {
							return '启用';
						} else if (data.status == '2') {
							return '禁用';
						}
					}
				},
				{
					field: 'max_money',
					title: '每日收款上限',
					templet: function (data) {
						var num = Number(data.max_money || 0) / 100
						return '¥' + formatNumber(num, 2);
					}
				},
				{
					field: 'create_time',
					title: '创建时间',
					templet: function (data) {
						return dateFormat('Y-m-d H:i:s', parseInt(data.create_time));
					}
				}
			]
		]
    });
    
	function formatNumber(num, precision, separator) {
		var parts;
		// 判断是否为数字
		if (!isNaN(parseFloat(num)) && isFinite(num)) {
			// 把类似 .5, 5. 之类的数据转化成0.5, 5, 为数据精度处理做准, 至于为什么
			// 不在判断中直接写 if (!isNaN(num = parseFloat(num)) && isFinite(num))
			// 是因为parseFloat有一个奇怪的精度问题, 比如 parseFloat(12312312.1234567119)
			// 的值变成了 12312312.123456713
			num = Number(num);
			// 处理小数点位数
			num = (typeof precision !== 'undefined' ? (Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)).toFixed(precision) : num).toString();
			// 分离数字的小数部分和整数部分
			parts = num.split('.');
			// 整数部分加[separator]分隔, 借用一个著名的正则表达式
			parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));

			return parts.join('.');
		}
		return NaN;
	}

});
