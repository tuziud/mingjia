<template>
  <div class="Index">
    <!-- 轮播 -->
    <div class="block">
      <el-carousel trigger="click" height="596px">
        <el-carousel-item v-for="(item, index) in bannerData" :key="index">
          <img class="banner-img" :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 个性化设计模块 -->
    <div class="design">
      <div class="desc">
         <span class="add-color">舒适的</span>
         <span class="default-style">空间尺度+</span>
         <span class="add-color">人性化的</span>
         <span class="default-style">规划设计+</span>
         <span class="add-color">高端的</span>
         <span class="default-style">专业服务</span>
      </div>
      <div class="btn-group">
        <button :class = "{active:!(index-btnIndex)}" @click="selectTab(index)" v-for="(btnName,index) in designSelet" :key="index">{{btnName}}</button>
      </div>
      <div class="content-wrap">
           <ul v-for="(item, index) in imgs" class="item" :key="index"  v-show = 'btnIndex == index'>
             <li v-for="(img, keys) in item"  :key="keys">
               <img :src="img.imgItem" alt="" />
             </li>
           </ul>
      </div>
    </div>
    <!-- 全面服务 -->
    <div class="all-serve">
       <div>
          <span class="add-color">全面服务</span>
          <span class="default-style">涵盖老年生活四大业态</span>
       </div>
       <div class="serve-img" v-for="(item, index) in selfCare"  :key="index" v-show = 'handleIndex == index'>
         <img :src="item" alt="">
       </div>
       <div class="item-box">
         <div v-for="(tag,index) in tags" :key="tag" @click="handleSelect(index)" class="tab-item">
            <i :class = "classIcon(index)"></i>
            <span :class = "{selectStyle:!(index-handleIndex)}">{{tag}}</span>
         </div>
       </div>
    </div>
    <!-- 七大服务体系 -->
    <div class="serve-sys">
       <div>
          <span class="add-color">八大</span>
          <span class="default-style">服务体系</span>
       </div>
       <p class="sys-desc">铭佳康养社区为老年人打造一个全新的精神文化生活圈：打破老年人的被动孤立，让老年人生活在社会中，互通、互助，融入社会，拥有社会依存感，和孤独绝缘，与快乐作伴。
       </p>
        <p class="sys-desc">创造温馨的家、开放的大学、优雅的活力中心、高品质医疗保健中心、长辈精神和心灵的家园，创造长辈的“五位一体”养老生活方式。</p>
       <!-- <p class="sys-desc">康养社区为老年人打造一个全新的精神文化生活圈：打破老年人的被动孤立，让老年人生活在社会中，互通、互助，融入社会，拥有社会依存感，和孤独绝缘，与快乐作伴</p> -->
       <div class="sys-imgs">
         <img v-for="(item, index) in serveSys" :key="index"  :src="item" alt="">
       </div>
    </div>
    <!-- 医社保 -->
    <div class="insurance">
      <div class="desc">
         <span class="add-color">医保</span>
         <span class="default-style">接入</span>
         <span class="add-color">+全面</span>
         <span class="default-style">健康服务</span>
         <span class="add-color">+专业</span>
         <span class="default-style">服务团队</span>
         <span class="add-color">+管家式</span>
         <span class="default-style">服务</span>
      </div>
      <div class="img-text-wrap">
        <div class="left-box">
          <div class="top">
             <div class="text-wrap">
                <h3>五星级康复院将接入医社保</h3>
                <p>智慧康养社区老人在康复医院看病可用医保</p>
              </div>
              <img  src="../assets/in_btm1.png" alt="">
          </div>
          <div class="top">
             <div class="text-wrap">
                <h3>专业高素质的服务管理团队</h3>
                <p>康养社区设有专业人才培训部门，结合学院的人才输送，将为康养社区提供完善的人才保障</p>
              </div>
              <img src="../assets/in_btm2.png" alt="">
              </div>
        </div>
         <div style="margin-top:20px" class="right-box">
          <div class="top">
             <div class="text-wrap">
                <h3>专业高素质的服务管理团队</h3>
                <p>康养社区设有专业人才培训部门，结合学院的人才输送，将为康养社区提供完善的人才保障</p>
              </div>
              <img  src="../assets/in_btm3.png" alt="">
          </div>
          <div class="top">
             <div class="text-wrap">
                <h3>管家式个性化的服务模式</h3>
                <p>社区使用专业评估工具对长者身体状况、兴趣爱好、饮食习惯等评估，并根据结果为其提供个性化服务</p>
              </div>
              <img src="../assets/in_btm4.png" alt="">
              </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

// 户型
import hou1 from '../assets/landscape/HouseType/alone.png'
import hou2 from '../assets/landscape/HouseType/huli.png'
import hou3 from '../assets/landscape/HouseType/recover.png'
import hou4 from '../assets/landscape/HouseType/dubou.png'

// 社区
import con1 from '../assets/landscape/community/1.png'
import con2 from '../assets/landscape/community/2.png'
import con3 from '../assets/landscape/community/3.png'
import con4 from '../assets/landscape/community/4.png'

// 景观
import sec1 from '../assets/landscape/scenery/1.png'
import sec2 from '../assets/landscape/scenery/2.png'
import sec3 from '../assets/landscape/scenery/3.png'
import sec4 from '../assets/landscape/scenery/4.png'

// 适老化
import old1 from '../assets/landscape/old/1.png'
import old2 from '../assets/landscape/old/2.png'
import old3 from '../assets/landscape/old/3.png'
import old4 from '../assets/landscape/old/4.png'

// banner
import banner from '../assets/banner/banner.jpg'
import banner1 from '../assets/banner/banner1.jpg'
import banner2 from '../assets/banner/banner2.jpg'
import banner3 from '../assets/banner/banner3.jpg'

// 自理生活
import self1 from '../assets/selfCare/1.jpg'
import self2 from '../assets/selfCare/2.jpg'
import self3 from '../assets/selfCare/3.jpg'
import self4 from '../assets/selfCare/4.jpg'


// 八大服务体系
import serve1 from '../assets/serviceSystem/1.jpg'
import serve2 from '../assets/serviceSystem/2.jpg'
import serve3 from '../assets/serviceSystem/3.jpg'
import serve4 from '../assets/serviceSystem/4.jpg'
import serve5 from '../assets/serviceSystem/5.jpg'
import serve6 from '../assets/serviceSystem/6.jpg'
import serve7 from '../assets/serviceSystem/7.jpg'
import serve8 from '../assets/serviceSystem/8.jpg'


export default {
  name: "",
  components: {},
  props: [""],
  data() {
    return {
      bannerData: [
        {img: banner},
        {img: banner1},
        {img: banner2},
        {img: banner3}
      ],
      imgs: [
        [
          {imgItem: con1},
          {imgItem: con2},
          {imgItem: con3},
          {imgItem: con4},
        ],
        [
          {imgItem: sec1 },
          {imgItem: sec2 },
          {imgItem: sec3 },
          {imgItem: sec4 },
        ],
        [
          {imgItem: old1 },
          {imgItem: old2 },
          {imgItem: old3 },
          {imgItem: old4 },
        ],
        [
          {imgItem: hou1 },
          {imgItem: hou2 },
          {imgItem: hou3 },
          {imgItem: hou4 },
        ]
      ],
      selfCare: [
        self1, self2, self3, self4
      ],
      serveSys:[serve1,serve2,serve3,serve4,serve5,serve6,serve7,serve8],
      btnIndex: 0,
      handleIndex: 0,
      designSelet: ["社区配套", "景观", "舒适化", "户型"],
      tags: ["自理生活", "协助生活", "专业护理", "记忆障碍"]
    };
  },
  watch: {},
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {
    selectTab(index) {
      this.btnIndex = index;
    },
    handleSelect(index) {
      this.handleIndex = index;
    },
    classIcon(index) {
      return `icoin_${index}`;
    }
  },
  computed: {}
};
</script>
<style scoped>

.content .Index{
  width: 1440px;
  margin: 0 auto;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 596px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner-img {
  width: 100%;
  height: 596px;
}

/* 个性化设计 */
.design {
  margin-top: 40px;
}

.add-color {
  color: #1a3e79;
  font-size: 40px;
  font-weight: bolder;
}
.default-style {
  color: #333;
  font-size: 36px;
  font-weight: bolder;
}
.btn-group {
  display: flex;
  width: 33%;
  margin: 40px auto 0;
  justify-content: space-between;
}

.btn-group button {
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
}
.btn-group button:hover {
  cursor: pointer;
}
.active {
  background: #1a3e79;
  color: #fff;
}
.content-wrap {
  width: 100%;
  box-sizing: border-box;
  margin-top: 36px;
}
.item {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  padding: 0 60px;
}
.item li {
  width: 280px;
  height: 400px;
  margin-right: 26px;
}
.item li img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

/* 全面服务 */
.all-serve {
  margin-top: 90px;
}

.serve-img img {
  width: 100%;
  height: 460px;
  margin-top: 45px;
  vertical-align: bottom;
}
.item-box {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 330px;
  margin-top: 21px;
}
.tab-item:hover {
  cursor: pointer;
}
.selectStyle {
  color: #1a3e79;
}
.tab-item {
  display: flex;
  align-items:flex-end;
}
.tab-item i {
  display: inline-block;
  margin-right: 12px;
}

.icoin_0{
  width: 24px;
  height: 32px;
  background: url("../assets/icon1.png") no-repeat;
}

.icoin_1{
  width: 31px;
  height: 36px;
  background: url("../assets/icon2.png") no-repeat;
}

.icoin_2{
  width: 31px;
  height: 25px;
  background: url("../assets/icon3.png") no-repeat;
}

.icoin_3{
  width: 24px;
  height: 28px;
  display: block;
  background: url("../assets/icon4.png") no-repeat;
}

/* 七大服务体系 */
.serve-sys {
  margin-top: 90px;
}
.sys-desc {
  box-sizing: border-box;
  padding: 0 120px;
  color: #333;
  line-height: 40px;
}
.sys-imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 106px;
  margin-top: 30px;
}
.sys-imgs img {
  width: 292px;
  height: 292px;
  /* margin-right: 20px; */
  margin-bottom: 20px;
  border-radius: 2px;
  vertical-align: bottom;
}

/* 医社保 */
.insurance {
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.img-text-wrap {
  margin-top: 45px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin-bottom: 80px;
}
.top{
  display: flex;
  width: 580px;
  height: 240px;
  margin-right: 20px;
}
.text-wrap{
  background: #fff;
  box-sizing: border-box;
  padding:50px 20px 20px;
}
.text-wrap h3,
.text-wrap p {
  margin: 0;
  text-align: left;
}
.left-box,
.right-box {
  display: flex;
  box-sizing: border-box;
  padding: 0 95px;
}
.left-box img,
.right-box img {
  width: 240px;
  height: 240px;
}
</style>
