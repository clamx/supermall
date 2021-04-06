import {request} from "./request";
export function getHomeDetails(iid){
  return request({
    baseURL:'http://152.136.185.210:7878/api/m5',
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    baseURL:'http://152.136.185.210:7878/api/m5',
    url:'/recommend'
  })
}
export class goodsInfo{
  constructor(itemInfo,columns,services,skuInfo){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.clothesParams = skuInfo.props
    this.realPrice = itemInfo.lowNowPrice
    this.rangePrice = skuInfo.priceRange
  }
}
export class shopInfo{
  constructor(shopInfo){
    this.score = shopInfo.score
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
  }
}
export class commentInfo{
  constructor(CommentInfo) {
    this.avatar = CommentInfo.rate.list[0].user.avatar
  }
}
