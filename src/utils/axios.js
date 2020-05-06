import axios from 'axios'
axios.defaults.withCredentials = true
// 创建axios实例
const service = axios.create({
  baseURL: 'http://192.168.31.223:8088/gongyu-api/',
  timeout: 5000,// 请求超时时间
  headers: {
    'Content-Type': "application/json,charset=utf-8,multipart/form-data",
    "Accept": "application/json,text/plain, */*"
  }
})

service.defaults.withCredentials = true
// request拦截器
service.interceptors.request.use(
  config => {
    if (config.data || config.headers.token) {
      let ret = ''
      if (config.data) {
        if (config.data.file) {
          const data = new FormData();
          data.append('file', config.data.file);
          config.data = data
        } else {
          for (let it in config.data) {
            if ((typeof config.data) === 'object') {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(JSON.stringify(config.data[it]).replace('"', '').replace('"', '')) + '&'
            }
          }
          ret = ret.substring(0, ret.length - 1);
          config.url = config.url + '?' + ret
        }
      }
      if (config.headers.token) {
        config.url = + config.url + '?token=' + config.headers.token
      }
    }

    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
