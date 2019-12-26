<template>
  
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        
      }),
      typeNum(){
        let typePle = this.ratings.filter(rating => rating.rateType === 0)
        return typePle.length
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  
</style>
