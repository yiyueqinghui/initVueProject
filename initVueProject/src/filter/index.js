//保留两位小数
export function fixed(value) {
  var intVal = null;
  if (typeof value == 'string' && /^[0-9.]+$/.test(value)) {
    intVal = parseInt(value);
  }
  if (typeof value == 'number') {
    intVal = value;
  }
  if (intVal == null) {
    return value;
  } else {
    return (Math.round(value * 100) / 100).toFixed(2);
  }
}

// 时间戳转日期 yyy-MM-dd hh:mm:ss
export function formatTimestamp(value) {
  if (value == null) {
    return ''
  }
  var date = new Date(value)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  var minute = date.getMinutes()
  var second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}


// 时间戳转日期  yyy-MM-dd 
export function formatDate(value) {
  if (value == null) {
    return ''
  }
  var date = new Date(value)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '-' + m + '-' + d
}
