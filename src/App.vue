<template>
  <div id="app">
    <Header />
    <!-- 路由视图图 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
    <div v-if="true" class="fixedStatus">
      <div class="to-top" @click="toTop">
        <i class="el-icon-upload2"></i>
      </div>
      <div class="free" @click="toFreeToast">
        <strong>免费</strong>
        <span>预约</span>
        <span>参观</span>
      </div>
    </div>

    <div class="drop" v-if="dialogFormVisible">
      <div class="toast">
        <div class="drop-header"><i @click="closeDialog" class="el-icon-close"></i></div>
        <div class="toast-box">
          <SubmitDialog @closeDialog="closeDialog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Header, Footer, SubmitDialog } from "./components/index.js";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    SubmitDialog
  },
  data() {
    return {
      isShow: false,
      dialogFormVisible: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
    this.autoScroll()
  },
  methods: {
    // 弹窗阻止页面滚动
    stopScroll() {
      document.body.style.top = '0'
      document.body.style.position = 'fixed'
      document.body.style.height = '100%'
      document.body.style.overflow = 'hidden'
    },
    // 回复页面滚动
    autoScroll() {
      document.body.style.position = 'initial'
      document.body.style.overflowY = 'auto'
    },
    toFreeToast() {
      this.dialogFormVisible = true
      this.stopScroll()
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 100) {
        this.isShow = true // 显示
      } else {
        this.isShow = false // 隐藏
      }
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 100;  //可以自己设置
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10)
    },
    //关闭弹窗
    closeDialog() {
      this.dialogFormVisible = false
      this.autoScroll()
    },
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  width: 100%;
}

body {
  background: #f5f5f5;
  margin: 0;
  padding: 0;
}

ul,
li,
p,
h1,
h3,
h2,
h4,
h5,
h6 {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center
}

.fixedStatus {
  width: 100px;
  height: 300px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 20px;
  right: 0px;
  z-index: 99;
}

.to-top {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #b01f24;
  color: #fff;
  border-radius: 10px;
}

.el-icon-upload2 {
  font-size: 30px;
}

.free {
  width: 80px;
  height: 80px;
  text-align: center;
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background: #b01f24;
  color: #fff;
}

strong {
  font-size: 20px;
}

.drop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
}

.toast {
  position: absolute;
  width: 539px;
  height: 550px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
}
.toast-box{
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
  border-radius: 0 0 20px 20px;
}
.drop-header{
  background: url('./assets/banner/title.png') no-repeat;
  width: 539px;
  height: 129px;
  position: relative;
}
.el-icon-close{
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
  color: #fff;
}
</style>
