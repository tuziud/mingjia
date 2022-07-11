<template>
  <div class="intr_box">
     <!-- 面包屑 -->
    <el-breadcrumb class="tabs" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/start_serve/start_serve' }"
        >五星服务</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/start_serve/star_10' }"
        >科学膳食</el-breadcrumb-item
      >
    </el-breadcrumb>
     <div class="helth-sys">
       <h2>科学膳食服务</h2>
        <p class="info">铭佳康养科学膳食服务秉承“健康科学，尊享膳食，适老服务”的发展思路，以“美味、健康、服务”为核心理念，创建模型，拓展功能，量化营养，打造服务；实践中规范烹饪，提升餐饮服务，通过管理与支持为科学膳食服务保驾护航。</p>
        <div class="item-li">
           <div v-for="(list,index) in listArr" :key="index" class="item">
              <img :src="list.imgUrl" alt="">
               <span>{{list.title}}</span>
           </div>
        </div>

        <div class="list-box">
           <div v-for="(list,index) in lists" :key="index" class="box">
               <div class="img-box"><img :src="list.imgPath" alt=""></div>
               <div class="content">
                  <h2>{{list.title}}</h2>
                  <span>{{list.sub_title}}</span>
               </div>
           </div>
        </div>
     </div>
  </div>
</template>
<script>

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'

export default {
  name:'',
  props: [""],
  data() {
    return {
       listArr: [
        {
          title: "营养科学均衡",
          imgUrl: img1
        },
        {
          title: "功能客户定制",
          imgUrl: img2
        },
        {
          title: "适老化设计",
          imgUrl: img3
        },
        {
          title: "烹饪标准化",
          imgUrl: img4
        },
        {
          title: "服务用餐前中后",
          imgUrl: img5
        },
        {
          title: "管理与支持",
          imgUrl: img6
        }
      ],
      lists:[
        {
          imgPath:p1,
          title:'第一级：FSMS食品安全管理基础',
          sub_title:'FSMS是以HACCP为核心制定的一套对食物链上各个环节进行食品安全管理的体系标准'
        },
         {
          imgPath:p2,
          title:'第二级：中国适老化膳食模型',
          sub_title:'依据《中国老年人膳食指南》为基础，从食物多样，从而保证老年人的全面充足的营养素摄入。根据老年人牙口退化、消化吸收功能变弱等生理特点，以软烂、口味清淡、少油少盐等为原则对菜品进行适老化的改良'
        },
         {
          imgPath:p3,
          title:'第三级：应季化养生时令菜品',
          sub_title:'依据中国24节气自然界的气候环境变化，以《养生大道：时令养生》为理论基础，使用适当的食材进行组合食用，以起到防病强身目的的一种膳食指导体系'
        },
         {
          imgPath:p4,
          title:'第四级：人性化慢病膳食干预',
          sub_title:'根据老年人常见慢性疾病，糖尿病、高血压、高血脂、冠心病、高尿酸血症、骨质疏松症、阿尔茨海默病（AD）研发与之对应的膳食干预方案模型'
        }
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
 .intr_box{
  width: 1440px;
  margin: 0 auto;
}
.tabs {
  width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;
}
.helth-sys{
  width: 1440px;
  margin: 0 auto;
  background: #fff;
  box-sizing: border-box;
  padding:0 130px 60px;
}
.helth-sys .info{
  margin: 0 auto;
  text-align: left;
  font-size: 18px;
  color: #333;
  line-height: 1.5;
}
.helth-sys > h2 {
  font-size: 28px;
  font-weight: bolder;
  color: #1A3E79;
  padding: 67px 0 15px 0;
}

.item-li{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.item{
  width: 200px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px #eee;
}
.item img{
  margin-bottom: 15px;
}
.box{
  display: flex;
  width: 1200px;
  height: 168px;
  align-items: center;
  margin-bottom: 15px;
  box-shadow:  0 0 20px #eee;
  box-sizing: border-box;
  padding: 0 20px;
}
.list-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.content >h2{
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 900;
}
.content span{
  text-align: left;
  font-size: 16px;
  color: #333;
}
.img-box{
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}
.box:nth-child(1) img{
  width: 120px;
  height: 90;
}
</style>