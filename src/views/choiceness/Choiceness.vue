<template>
  <div id="choiceness">
    <nav-bar class="cho-nav"><div slot="center">小说详情</div></nav-bar>
    <cho-swiper :banner="banner"></cho-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import ChoSwiper from "./childComps/ChoSwiper";
  import RecommendView from "./childComps/RecommendView";

  import {getChoMultidata} from "../../network/choiceness";



  export default {
    name: "Choiceness",
    components:{
      NavBar,
      ChoSwiper,
      RecommendView
    },
    data(){
      return{
        banner:[],
        recommend:[]
      }
    },created() {
      getChoMultidata().then((req)=>{
        this.banner=req.data.banner.list;
        this.recommend=req.data.recommend.list;
      },err=>{
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .cho-nav{
    background-color: var(--color-tint);
    color: var(--color-background);
  }
</style>
