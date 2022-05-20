//默认将时间转化为yyyy-MM-dd hh:mm:ss类型、或yyyy-MM-dd、HH:mm:ss、HH:mm 类型
export function DateFormat(value, fmt) {
  if (!value) { return }
  value = new Date(value);
  if (!fmt)
    fmt = "yyyy-MM-dd HH:mm:ss";
  var o = {
    "M+": value.getMonth() + 1, // 月份
    "d+": value.getDate(), // 日
    "h+": value.getHours() % 12 == 0 ? 12 : value.getHours() % 12, // 小时
    "H+": value.getHours(), // 小时
    "m+": value.getMinutes(), // 分
    "s+": value.getSeconds(), // 秒
    "q+": Math.floor((value.getMonth() + 3) / 3), // 季度
    "S": value.getMilliseconds()
    // 毫秒
  };
  var week = {
    "0": "/u65e5",
    "1": "/u4e00",
    "2": "/u4e8c",
    "3": "/u4e09",
    "4": "/u56db",
    "5": "/u4e94",
    "6": "/u516d"
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
}

// 将url请求参数转为json格式
export function paramObj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}

// 父子关系的数组转换成树形结构数据
export function translateDataToTree(data) {
  const parent = data.filter(
    (value) => value.parentId === 'undefined' || value.parentId == null
  )
  const children = data.filter(
    (value) => value.parentId !== 'undefined' && value.parentId != null
  )
  const translator = (parent, children) => {
    parent.forEach((parent) => {
      children.forEach((current, index) => {
        if (current.parentId === parent.id) {
          const temp = JSON.parse(JSON.stringify(children))
          temp.splice(index, 1)
          translator([current], temp)
          typeof parent.children !== 'undefined'
            ? parent.children.push(current)
            : (parent.children = [current])
        }
      })
    })
  }
  translator(parent, children)
  return parent
}

// 树形结构数据转换成父子关系的数组
export function translateTreeToData(data) {
  const result = []
  data.forEach((item) => {
    const loop = (data) => {
      result.push({
        id: data.id,
        name: data.name,
        parentId: data.parentId,
      })
      const child = data.children
      if (child) {
        for (let i = 0;i < child.length;i++) {
          loop(child[i])
        }
      }
    }
    loop(item)
  })
  return result
}

// 获取随机id
export function uuid() {
  return Math.random().toString(16).slice(2)
}

// 生成m到n的随机数
export function random(m, n) {
  return Math.floor(Math.random() * (m - n) + n)
}

// 深度复制数据
export function deepClone(target) {
  const targetType = typeof target;
  if (targetType === 'object' || targetType === 'function') {
    let clone = null;
    //日期
    if (Object.prototype.toString.call(target) === '[object Date]') {
      clone = new Date(target)
    }
    //正则
    if (Object.prototype.toString.call(target) === '[object RegExp]') {
      clone = target
    }
    //函数
    if (Object.prototype.toString.call(target) === '[object Function]') {
      clone = target
    }
    //对象、数据
    if (Object.prototype.toString.call(target) === '[object Object]' ||
      Object.prototype.toString.call(target) === '[object Array]') {
      clone = Array.isArray(target) ? [] : {};
      for (const key in target) {
        clone[key] = deepClone(target[key])
      }
    }

    return clone;
  }
  return target;
}

