<template>
  <div>
    <keep-alive exclude="search,shop">
      <router-view></router-view>
    </keep-alive>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from '@/components/FooterGuide/FooterGuide'
  export default {
    mounted(){
      this.$store.dispatch('autoLogin')
      this.$store.dispatch('getAddress')
    },
    components:{
      FooterGuide
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>
