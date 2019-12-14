import ajax from './ajax'

export const reqAddress = (latitude,longitude) => ajax(`/position/${latitude},${longitude}`)

export const reqCategory = () => ajax('/index_category')

export const reqShops = ({latitude,longitude}) => ajax('/shops',{params:{latitude,longitude}})