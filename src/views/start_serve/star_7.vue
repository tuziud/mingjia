<template>
  <div class="nursing">
    <el-breadcrumb class="tabs" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/start_serve/start_serve' }">五星服务</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/start_serve/star_7' }">健康管理服务</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 健康系统 -->
    <div class="helth-sys">
      <h2>全面多维度健康服务模式</h2>
      <p class="info">康养社区拥有一 套完善的健康评估系统,对长者的健康状况(生理及心理)及各种潜在的风险经行定期、适时的评估,根据评估结果制定护理计划,确保入住长者的健康得到24小时保障。针对高血压、糖尿病、高血脂、失眠、疼痛、便秘等进行健康调理,结合科学健身,达到改善健康或缓解症状之目的。</p>
      <div class="item-li">
        <div v-for="(list,index) in lists" :key="index" class="item">
          <h3>{{list.name}}</h3>
          <span>{{list.contentText}}</span>
        </div>
      </div>
    </div>
    <!-- CCRE持续照护模式 -->
    <div class="passport">
      <h2>管家式个性化的服务模式</h2>
      <p class="info">社区使用专业评估工具对长者身体状况、兴趣爱好、饮食习惯等评估，并根据结果为其提供个性化服务</p>
      <div class="list-item">
        <div v-for="(data,index) in listData" :key="index">
          <ListItem :data="data" :imgSize="400"/>
        </div>
      </div>
    </div>
    <div class="helth-sys team">
      <h2>专业高素质的服务管理团队</h2>
      <p class="info">铭佳康养社区设有专业人才培训部门，结合学院的人才输送，将为康养社区提供完善的人才保障</p>
      <img src="../../assets/team.png" alt="">
    </div>
    <div class="passport">
      <h2>享受医保待遇</h2>
      <p class="info">铭佳康复医院、铭佳护理医院接入医保定点单位，长者在康复医院、护理医院享受医保便捷服务</p>
      <img src="../../assets/card.png" alt="">
    </div>
  </div>
</template>
<script>
import { ListItem } from "../../components/index.js";
import eatImgData from '../../assets/fiveStart/eat.jpeg'
import drawImgData from '../../assets/fiveStart/draw.jpeg'
import bodyImgData from '../../assets/fiveStart/body.jpeg'
export default {
  components: { ListItem },
  props: [""],
  data() {
    return {
      listData: [
        {
          imgUrl: bodyImgData,
          title: "身体状况",
        },
        {
          imgUrl: drawImgData,
          title: "兴趣爱好",
        },
        {
          imgUrl: eatImgData,
          title: "饮食习惯",
        }
      ],
      lists:[
        {name:"01健康评估",contentText:"定期对健康状况和潜在风险进行评估"},
        {name:"02制定计划",contentText:"根据评估结果制定护理计划"},
        {name:"03针对调理",contentText:"针对老年人常见问题进行健康调理"},
        {name:"04科学健身",contentText:"结合科学健身"},
        {name:"05改善缓解",contentText:"达到改善健康或缓解症状之目的"}
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
.tabs{
  width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;
}
.nursing {
  width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
}
.top-wraps {
  width: 100%;
  text-align: center;
  background: #fff;
}
.top-wraps h2,
.helth-sys h2,
.passport h2 {
  font-size: 28px;
  font-weight: bolder;
  color: #1A3E79 ;
  padding: 67px 0 15px 0;
}
.team h2{
  text-align: center;
}
.helth-sys{
  width: 1440px;
  margin: 0 auto;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 60px
}
.helth-sys .info{
  width: 980px;
  margin: 0 auto;
  text-align: left;
}
.info {
  padding-bottom: 34px;
  font-size: 18px;
  text-align: center;;
}
.team .info{
  text-align: center;
}
.features {
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
}
.left-features {
  width: 264px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e99e24;
  border-radius: 5px;
  text-align: center;
}
.left-features h3,
.right-features h3 {
  margin: 15px 0 14px 0;
  color: #fff;
  font-weight: bolder;
  font-size: 18px;
}
.left-features > p {
  width: 180px;
  height: 44px;
  line-height: 44px;
  background: #ebc686;
  color: #fff;
  margin: 0 auto 12px;
  border-radius: 8px;
  font-size: 14px;
}
.right-features {
  width: 320px;
  height: 180px;
  background: #b0ca48;
  margin-left: 40px;
  border-radius: 5px;
}
.group {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 30px;
}
.group span {
  width: 120px;
  height: 44px;
  line-height: 44px;
  background: #d3de9b;
  font-size: 14px;
  color: #fff;
  margin-bottom: 12px;
  border-radius: 5px;
}
.passport {
  box-sizing: border-box;
  padding: 0 76px 60px;
}
.list-item {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 24px;
}
.listItem{
  padding-bottom: 0!important;
}
.item-li{
  box-sizing: border-box;
  padding: 0 120px;
  display: flex;
  justify-content: space-around;
}
.item{
  width: 200px;
  height: 200px;
  background: #fbf3e5;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 25px;
}
.helth-sys .item:nth-child(2),
.helth-sys .item:nth-child(4){
  background: #e6f1fb;
}
.helth-sys .item:nth-child(2) h3,
.helth-sys .item:nth-child(4) h3{
  color: #1A3E79 ;
}
.item h3{
  color: #E99E24;
  font-weight: bolder;
  font-size: 28px;
  margin: 50px 0 20px 0;
}
.item span{
  font-size: 16px;
  color: #333;
}

</style>
