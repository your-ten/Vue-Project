import Vue from 'vue'
export function saveCount(id,cartFoods){
  const cartCount = cartFoods.reduce((pre,food)=>{
    pre[food.id] = food.count
    return pre
  },{})
  sessionStorage.setItem(id+'_key',JSON.stringify(cartCount)) || {}
}

export function getCartFoods(shop){
  let cartFoods = []
  const cartCount = JSON.parse(sessionStorage.getItem(shop.id+'_key')) || {}
  shop.goods.forEach(good => {
    good.foods.forEach(food=>{
      let count = cartCount[food.id]
      if (count>0) {
        Vue.set(food,'count',count)
        cartFoods.push(food)
      }
    })
  });
  return cartFoods
}