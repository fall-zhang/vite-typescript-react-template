import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        data: {
          name: Mock.mock('@cname')
        },
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      const response = res
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.end(`hello, ${reqbody}`)
      response.statusCode = 200
    },
  },
] as MockMethod[]