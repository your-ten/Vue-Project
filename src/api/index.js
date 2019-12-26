import ajax from './ajax'

export const reqAddress = (latitude,longitude) => ajax(`/position/${latitude},${longitude}`)

export const reqCategory = () => ajax('/index_category',{
  headers: {
    needCheck: true
  }
})

export const reqShops = ({latitude,longitude}) => ajax('/shops',{
  params:{latitude,longitude},
  headers: {
    needCheck: true
  }
})

export const reqSendCode = (phone) => ajax('/sendcode',{params:{phone}})

export const reqSmsLogin = ({phone, code}) => ajax.post('/login_sms', {phone, code})

export const reqPwdLogin = ({name, pwd, captcha}) => ajax.post('/login_pwd', {name, pwd, captcha})

export const reqAutoLogin = () => ajax.get('/auto_login')

export const reqGoods = () => ajax('/goods')

export const reqRatings = () => ajax('/ratings')

export const reqInfo = () => ajax('/info')

export const reqShop = (id) => ajax('/shop/'+id)
