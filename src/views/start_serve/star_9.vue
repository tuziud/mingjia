<template>
  <div class="intr_box">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>五星服务</el-breadcrumb-item>
        <el-breadcrumb-item>花园社区</el-breadcrumb-item>
        <el-breadcrumb-item>休闲娱乐</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="intr_content">
      <h3>休闲娱乐服务</h3>
      <p>铭佳康养通过建立社交网络、丰富日常生活、促进自我实现三大指导方案，为长者搭建社交平台，帮助长辈保持身心健康，鼓励和挖掘长辈自己的兴趣爱好，乐享“退而不休” 的快乐第二人生。</p>
      <p>社区配套电影院、棋牌室、健身馆、多功能厅、卡拉OK室、戏剧社、书画、手工等等业余活动，使长者生活远离孤单无趣，在物理、精神等专业外部帮助下，积极参与社交、保持活力，感受生活的幸福感。</p>

      <div class="list_warp">
        <div  class="list_item">
          <ListItem v-for="(data, index) in listArr" :key="index" :data="data" :fontBold="true" :imgSize="360" :imgHight="225"/>
        </div>
      </div>
      <!-- <img src="../assets/intro.png" alt=""> -->
    </div>
  </div>
</template>
<script>
import { ListItem } from "../../components/index.js";
import image1 from "../../assets/element/1.png";
import image2 from "../../assets/element/2.png";
import image3 from "../../assets/element/3.png";
import image4 from "../../assets/element/4.png";
import image5 from "../../assets/element/5.png";
import image6 from "../../assets/element/6.png";

export default {
  name:'',
  components: { ListItem },
  props: [""],
  data() {
    return {
      listArr: [
        {
          title: "电影院",
          imgUrl: image1
        },
        {
          title: "棋牌室",
          imgUrl: image2
        },
        {
          title: "健身房",
          imgUrl: image3
        },
        {
          title: "多功能厅",
          imgUrl: image4
        },
        {
          title: "咖啡厅",
          imgUrl: image5
        },
        {
          title: "阅览室",
          imgUrl: image6
        },
      ]
    };
  },
  watch: {},
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style scoped>
.intr_box {
  width: 1440px;
  margin: 0 auto;
  background: #ffffff;
  display: inline-block;
}

.intr_box h3 {
  font-size: 28px;
  color: #1A3E79;
  margin: 60px 0 30px;
}

.intr_content {
  padding: 0 120px 20px;
}
.intr_box .intr_content p {
  color: #333333;
  font-size: 18px;
  text-align: left;
  margin-top: 20px;
  text-align: justify;
}

.bread {
  display: flex;
  font-size: 14px;
  padding-left: 20px;
  padding-top: 10px;
  height: 22px;
  background-color: #f5f5f5;
}
.list_warp {
  margin-top: 32px;
}
.list_item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>
