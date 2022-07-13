<template>
  <div class="Header">
    <div class="logo">
      <img :src="require('@/assets/logo.png')" alt="">
    </div>
<!--    <div class="tab">-->
<!--      <li v-for="(route,index) in routerLink" :class = "{active:!(index-menuIndex)}" :key="index" @click="selectTab(index)">-->
<!--        <router-link  :to="route.path">{{route.name}}</router-link>-->
<!--      </li>-->
<!--		</div>-->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/index">首页</el-menu-item>
      <el-menu-item index="/introduce">企业介绍</el-menu-item>
      <el-menu-item index="/aged">活力养老</el-menu-item>
      <el-menu-item index="/nursing">失能护理</el-menu-item>
      <el-menu-item index="/take_care">失智照护</el-menu-item>
      <el-menu-item index="/rehabilitation">康复医院</el-menu-item>
      <el-menu-item index="/hl_hospital">护理医院</el-menu-item>
      <el-submenu index="/start_serve">
        <template  slot="title">五星服务</template>
        <el-menu-item index="/start_serve/star_7">健康管理</el-menu-item>
        <el-menu-item index="/start_serve/star_8">文化交流</el-menu-item>
        <el-menu-item index="/start_serve/star_9">老年大学</el-menu-item>
        <el-menu-item index="/start_serve/star_10">科学膳食</el-menu-item>
        <el-menu-item index="/start_serve/star_11">时间银行</el-menu-item>
      </el-submenu>
<!--      <el-menu-item index="/appointment">预约热线</el-menu-item>-->
    </el-menu>
    <div>
      <img :src="require('@/assets/concatNumber.png')" alt="">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeIndex: '1',
      menuIndex: 0,
      routerLink: [
        { name: "首页", path: "/index" },
        { name: "企业介绍", path: "/introduce" },
        { name: "活力养老", path: "/aged" },
        { name: "失能护理", path: "/nursing" },
        { name: "失智照护", path: "/take_care" },
        { name: "康复医院", path: "/rehabilitation" },
        { name: "护理医院", path: "/hl_hospital" },
        { name: "五星服务", path: "/start_serve" },
        { name: "预约热线", path: "/appointment" }
      ]
    };
  },

  methods: {
    pushToFive(){
      this.$router.push(({
        path:"/start_serve"
      }))
    },
    handleSelect(key, keyPath) {
        this.$router.push({
          path:key
        })
    },
    selectTab(index) {
      this.menuIndex = index;
      localStorage.setItem("currentTab",index)
      // console.log(index)
      // console.log(localStorage.getItem("currentTab"))
    }
  },
  mounted(){
    this.menuIndex = Number(localStorage.getItem("currentTab"))
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Header {
  width: 1440px;
  margin: 0 auto;
  height: 68px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}
.logo {
  margin-left: 44px;
  width: 160px;
  height: 53px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.tab {
  display: flex;
  height: 68px;
  align-items: center;
  margin-right: 96px;
}
.tab a:hover {
  color: #1a3e79;
}
.tab li {
  height: 66px;
  line-height: 66px;
  display: flex;
}
.tab a:hover {
  height: 65px;
   color: #1a3e79;
  border-bottom: 2px solid #1a3e79;
}
.tab a {
  margin: 0 26px;
  height: 68px;
  line-height: 69px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  border-bottom: 1px solid #fff;
}
.active a{
  font-size: 16px;
  height: 65px;
  color: #1a3e79;
  border-bottom: 2px solid #1a3e79
}

.el-menu.el-menu--horizontal {
    border-bottom: solid 1px #fff;
}
</style>
