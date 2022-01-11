export default {
    // Json事件转化为MM-dd的时间类型
	DateFormatShort:function(value) {
		var fmt = "MM-dd";
		return this.DateFormat(value, fmt);
	},
    // Json事件转化为yyyy-MM-dd的时间类型
	DateFormatShortYear:function(value) {
		var fmt = "yyyy-MM-dd";
		return this.DateFormat(value, fmt);
	},
	
	// Json事件转化为hh:mm:ss的时间类型
	DateFormatTime:function(value) {
		var fmt = "HH:mm:ss";
		return this.DateFormat(value, fmt);
	},
	
	// Json事件转化为hh:mm的时间类型
	DateFormatShortTime:function(value){
		var fmt = "HH:mm";
		return this.DateFormat(value, fmt);
	},
	
	// Json事件转化为yyyy-MM-dd hh:mm:ss的时间类型
	DateFormat:function(value, fmt) {
		if(!value){return}
		value = new Date(value);
		if (!fmt)
			fmt = "yyyy-MM-dd HH:mm:ss";
		var o = {
			"M+" : value.getMonth() + 1, // 月份
			"d+" : value.getDate(), // 日
			"h+" : value.getHours() % 12 == 0 ? 12 : value.getHours() % 12, // 小时
			"H+" : value.getHours(), // 小时
			"m+" : value.getMinutes(), // 分
			"s+" : value.getSeconds(), // 秒
			"q+" : Math.floor((value.getMonth() + 3) / 3), // 季度
			"S" : value.getMilliseconds()
			// 毫秒
		};
		var week = {
			"0" : "/u65e5",
			"1" : "/u4e00",
			"2" : "/u4e8c",
			"3" : "/u4e09",
			"4" : "/u56db",
			"5" : "/u4e94",
			"6" : "/u516d"
		};
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (value.getFullYear() + "").substr(4
							- RegExp.$1.length));
		}
		if (/(E+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1)
							? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468")
							: "")
							+ week[value.getDay() + ""]);
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1)
								? (o[k])
								: (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	},
}