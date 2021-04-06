import {request} from './request.js'
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type,page){
  return request({
    baseURL:'http://152.136.185.210:7878/api/m5',
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
