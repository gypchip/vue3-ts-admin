import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 3000 * 60
})

// 请求拦截
service.interceptors.request.use(
  config=> {
    if (config?.headers) {
      config.headers['Content-type'] = 'application/json'
    }
    return config
  },
  error=> {
    return Promise.reject(error)
  }
 
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
     console.log('请求失败')
    } else if (response.request.responseType == 'blob') {
      return response.data;
    } else if (res.code !== 200) {
     console.log('请求失败')
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      res
    }
  },
  error => {
    console.log('请求失败')
    return Promise.reject(error)
  }
)

export default service