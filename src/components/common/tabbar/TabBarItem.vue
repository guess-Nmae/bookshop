<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
     <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return{

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.link)!== -1
      },
      isActiveColor(){
        return this.isActive ?{color:this.activeColor}:{};
      }
    },
    props:{
      link:{
        type:String
      },
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.link);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;/* 均等分 */
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active{
    color: red;
  }

</style>
