<template>
  <div class="nursing">
    <!-- 第一部分 -->
    <div class="top-wraps">
      <h2>全生命周期的一站式健康服务</h2>
      <p class="info">铭佳康养社区拥有铭佳标准康复体系和长期照护体系两大特色体系,提供包括独立生活、协助生活、专业护理、记忆照护四种生活服务区域, 一站式退休生活解决方案。</p>
      <div class="features">
        <div class="left-features">
          <h3>两大特色体系</h3>
          <p>标准康复体系</p>
          <p>长期照护体系</p>
        </div>
        <div class="right-features">
          <h3>四大特色体系</h3>
          <div class="group">
            <span>独立生活</span>
            <span>协助生活</span>
            <span>专业护理</span>
            <span>记忆照护</span>
          </div>
        </div>
      </div>
    </div>
    <!-- CCRE持续照护模式 -->
    <div class="passport">
      <h2>CCRC持续照护模式</h2>
      <p class="info">引进美国CCRC持续照护模式满足独立自理、半自理和失能失智等不同身体状态长辈的照护需求,提升生命质量。</p>
      <div class="list-item">
        <div v-for="(data,index) in listData" :key="index">
          <ListItem :data="data" :fontBold="true" :imgSize="400" :imgHight="225"/>
        </div>
      </div>
    </div>
    <!-- 健康系统 -->
    <div class="helth-sys">
      <h2>完善的健康评估系统</h2>
      <p class="info">康养社区拥有一 套完善的健康评估系统,对长者的健康状况(生理及心理)及各种潜在的风险经行定期、适时的评估,根据评估结果制定护理计划,确保入住长者的健康得到24小时保障。针对高血压、糖尿病、高血脂、失眠、疼痛、便秘等进行健康调理,结合科学健身,达到改善健康或缓解症状之目的。</p>
      <div class="item-li">
        <div v-for="(list,index) in lists" :key="index" class="item" >
          <h3>{{list.name}}</h3>
          <span>{{list.contentText}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ListItem } from "../components/index.js";

// ccre
import ccre1 from '../assets/CCRC/1.jpg';
import ccre2 from '../assets/CCRC/2.jpg';
import ccre3 from '../assets/CCRC/3.jpg';

export default {
  name: "",
  components: { ListItem },
  props: [""],
  data() {
    return {
      listData: [
        {
          imgUrl: ccre3,
          title: "独立自理",
          info: "提供紧急救护、慢病管理、文化娱乐、运动健康、营养膳食等专业服务"
        },
        {
          imgUrl: ccre1,
          title: "半自理",
          info: "提供洗澡、穿衣、用药提醒等日常活动上的协助"
        },
        {
          imgUrl: ccre2,
          title: "失能失智",
          info: "为长期需要护理和慢病康复的长者提供专业、完善的护理服务"
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
  color: #1a3e79;
  padding: 67px 0 15px 0;
}
.helth-sys{
  width: 1440px;
  margin: 0 auto;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 60px
}
.helth-sys p{
  width: 980px;
  margin: 0 auto;
  text-align: left;
}
.info {
  padding-bottom: 34px;
  font-size: 14px;
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
  background: #1a3e79;
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
  background-color: rgba(255,255,255,0.5);
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
  color: #1a3e79;
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
