//生产环境 production
//开发环境 development
//测试环境 test

let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://localhost:3000'
} else {
  BASE_URL = 'http://localhost:2000'
}

export { BASE_URL }
