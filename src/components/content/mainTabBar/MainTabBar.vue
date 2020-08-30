<template>
  <tab-bar>
    <tab-bar-item link="/bookrack" activeColor="blue">
      <img slot="item-icon" src="../../../assets/img/tabbar/bookrack.jpg"/>
      <img slot="item-icon-active" src="../../../assets/img/tabbar/bookrack_active.jpg"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/choiceness" activeColor="blue">
      <img slot="item-icon" src="../../../assets/img/tabbar/choiceness.jpg"/>
      <img slot="item-icon-active" src="../../../assets/img/tabbar/choiceness_active.jpg"/>
      <div slot="item-text">精选</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeColor="blue">
      <img slot="item-icon" src="../../../assets/img/tabbar/stack.jpg"/>
      <img slot="item-icon-active" src="../../../assets/img/tabbar/stack_active.jpg"/>
      <div slot="item-text">书库</div>
    </tab-bar-item>
    <tab-bar-item link="/stack" activeColor="blue">
      <img slot="item-icon" src="../../../assets/img/tabbar/profile.jpg"/>
      <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.jpg"/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
