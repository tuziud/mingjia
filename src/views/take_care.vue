<template>
  <div class="care-page">
    <!-- 专业记忆照护 -->
     <div class="care-mode">
         <h2>专业记忆照护</h2>
         <p class="info">铭佳康养按照国际失智分期护理的概念,为认知功能下降、有精神症状和行为障碍、日常生活能力逐渐下降的失智长者,制定失智分级照护计划,并组建跨学科照护团队,对失智长者提供医疗、护理、文娱、康复、营养等全方位的跨学科照护服务,最大化的提升失智长者和家人的生活品质。</p>
         <div class="manger">
            <div v-for="(steps,index) in stepData" :key="index" class="step">
              <div class="step-wrap"> 
                <span class="name">{{steps.timeStep}}</span>
                <span>{{steps.info}}</span>
              </div>
              <div class="sharp"></div>
            </div>
         </div>
        
     </div>
     <!-- 家的记忆 -->
     <div class="care-mode family">
         <h2>家的记忆</h2>
         <p class="info">铭佳康养借鉴国际领先的、人性化的记忆老人照护方式,结合中国实际,打造铭佳康养标准记忆长者照护体系一” 家的记忆”, 按照长辈记忆分期设定绿、黄、红、紫4个颜色,分别对应不同的护理重点。</p>
         <div class="memory">
            <div class="left">
              <div class="list-01 ">
                <div class="desc">需要给老人额外的支持和特别关注，以及提供学习的机会</div>
                <div class="list-group first border_radius_left">
                  <span>黄色</span>
                  <span>分期</span>
                </div>
              </div>
              <div class="list-01">
                <div class="list-group third border_radius_right">
                  <span>绿色</span>
                  <span>分期</span>
                </div>
                <div class="desc">失智症早期，老人身体机能基本正常，只需在最少的支持下就可以正常发挥作用</div>
              </div>
               <div class="list-01">
                <div class="desc">失智老人已经进入特殊阶段，需要为其提供最大限度的帮助，也需以更加积极和尊重的方式对其进行生活照护</div>
                <div class="list-group second border_radius_left">
                  <span>紫色</span>
                  <span>分期</span>
                </div>
              </div>
              <div class="list-01">
                <div class="list-group fourth border_radius_right">
                  <span>红色</span>
                  <span>分期</span>
                </div>
                <div class="desc">需要提供更多支持或帮助，老人学习的机能已经丧失</div>
              </div>
            </div>
           
         </div>
     </div>
     <!-- 专业设计 -->
     <div class="care-mode professional">
        <h2>专业设计</h2>
         <p class="info">记忆之家找回记忆的家:记忆走廊、防走失设计、适老设施、入户记忆箱等人性化贴心设计</p>
         <ul class="images">
           <li v-for="(item,index) in listArr" :key="index">
             <img :src="item.url" alt="">
             <h4>{{item.title}}</h4>
           </li>
         </ul>
     </div>
    <!-- "好朋友"记忆照护模式 -->
     <div class="care-mode friend">
        <h2>"好朋友"记忆照护模式</h2>
         <p class="info">铭佳康养创新“好朋友”记忆照护模式,隐性处理规则,塑造自由、平等、友好的氛围,改善长辈的认知能力,延缓记忆衰退进程,保持身体健康,让长辈在被妥帖照护的同时,能享受生活乐趣,感受到生命尊严,并解决子女的担忧与困扰。</p>
         <ul class="friend-image">
           <li v-for="(item,index) in friendsList" :key="index">
             <img :src="item.imageUrl" alt="">
             <h4>{{item.name}}</h4>
             <div class="description">{{item.description}}</div>
           </li>
         </ul>
     </div>
  </div>
</template>
<script>
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import friend from '../assets/friend.png'

// 记忆照片
import photo1 from '../assets/memoryPhotos/1.jpg'
import photo2 from '../assets/memoryPhotos/2.jpg'
import photo3 from '../assets/memoryPhotos/3.jpg'
import photo4 from '../assets/memoryPhotos/4.jpg'
import photo5 from '../assets/memoryPhotos/5.jpg'


export default {
  name: "",
  components: {},
  props: [""],
  data() {
    return {
      stepData: [
        {
          timeStep: "早期",
          info: "会出现健忘、学习能力退化等现象"
        },
        {
          timeStep: "中期",
          info: "发展为抑郁、妄想、幻觉、躁狂、焦虑等症状"
        },
        {
          timeStep: "晚期",
          info:
            "会导致人格改变、失去常识判断、出现暴力行为、大小便失禁等严重情况"
        }
      ],
      listArr: [
        {
          title: "记忆走廊",
          url: image1
        },
        {
          title: "防走丢设计",
          url: image2
        },
        {
          title: "适老设施",
          url: image3
        },
        {
          title: "入户记忆箱",
          url: image4
        }
      ],
      friendsList: [
        {
          imageUrl: photo1,
          name: "好大脑",
          description: "专业健脑游戏,用刺激、挑战等方式,保持大脑活跃、改善认知能力"
        },
        {
          imageUrl: photo2,
           name: "好环境",
          description: "常规近60项适老设施,并特别设计符合记忆障碍居民需求的专属环境"
          
        },
        {
          imageUrl: photo3,
          name: "好快乐",
          description: "每日不同主题康娱活动,特别营造居民专属记忆场景"
          
        },
        {
          imageUrl: photo4,
          name: "好身体",
          description: "每周设常规锻炼计划,特别安排记忆障碍专属健身活动"
        },
        {
          imageUrl: photo5,
          name: "好营养",
          description: "三餐营养师精心安排膳食,并额外补充特需营养加餐"
        }
      ],
  stepData:[{
        timeStep:"早期",
        info:"会出现健忘、学习能力退化等现象"
      },{
        timeStep:"中期",
        info:"发展为抑郁、妄想、幻觉、躁狂、焦虑等症状"
      },{
        timeStep:"晚期",
        info:"会导致人格改变、失去常识判断、出现暴力行为、大小便失禁等严重情况"
      }]
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
.care-page {
  width: 1440px;
  margin: 0 auto;
}
.care-mode {
  background: #fff;
}
.care-mode h2 {
  font-size: 28px;
  font-weight: bolder;
  color: #1a3e79;
  padding: 40px 0 15px 0;
}
.care-mode .info {
  width: 980px;
  margin: 0 auto;
  text-align: left;
  font-size: 18px;
  line-height: 1.8;
  padding-bottom: 30px;
}
.manger {
  box-sizing: border-box;
  padding: 50px 250px 60px;
  display: flex;
  justify-content: space-between;
  padding-left: -13px;
  margin-left: -15px;
}

.manger .step:nth-child(1) {
  display: flex;
  background: #e8eecc;
  position: relative;
}
.manger .step:nth-child(2) {
  display: flex;
  background: #c3dcf5;
  position: relative;
}
.manger .step:nth-child(3) {
  display: flex;
  background: rgba(171, 0, 0, 0.2);
  position: relative;
}
.manger .step:nth-child(1) .name {
  background: #b0ca48;
}
.manger .step:nth-child(2) .name {
  background: #2488e9;
}
.manger .step:nth-child(3) .name {
  background: #AB0000;
}
.step-wrap {
  width: 260px;
  height: 98px;
  display: flex;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  font-size: 14px;
}
.step-wrap span:nth-child(1) {
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 100%;
  color: #fff;
}
.step-wrap span:nth-child(2) {
  width: 160px;
  /* height: 40px; */
  color: #333;
  margin-left: 12px;
  text-align: left;
}
.sharp {
  width: 0px;
  height: 0px;
  border-width: 90px 0px 79px 50px;
  border-style: solid;
  position: absolute;
  right: -50px;
  top: -39px;
}
.manger .step:nth-child(1) .sharp {
  border-color: transparent transparent transparent #e8eecc;
}
.manger .step:nth-child(2) .sharp {
  border-color: transparent transparent transparent #c3dcf5;
}
.manger .step:nth-child(3) .sharp {
  border-color: transparent transparent transparent rgba(171, 0, 0, 0.2);
}

.family,
.friend {
  background: #eee;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.memory {
  box-sizing: border-box;
  padding: 0 198px;
  display: flex;
}
.left {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.list-01 {
  width: 520px;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 5px;
  background: #fff;
  text-align: left;
  border-radius: 5px;
}
.desc {
  width: 420px;
  box-sizing: border-box;
  padding: 0 35px;
}
.list-group {
  width: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e99e24;
  color: #fff;
 
}

.border_radius_left{
   border-radius: 0 5px 5px 0;
}

.border_radius_right {
   border-radius: 5px 0 0 5px;
}

.first {
  background: #e99e24;
}
.second {
  background: #8f5cc1;
}
.third {
  background: #b0ca48;
}
.fourth {
  background: #c93d3d;
}
.list-group span {
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
}
.professional {
  box-sizing: border-box;
  padding-bottom: 60px;
}
.professional .info {
  text-align: center;
}
.images {
  width: 1440px;
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 100px;
  justify-content: space-between;
}
.images img {
  width: 288px;
  height: 162px;
  vertical-align: middle;
}
.images h4 {
  font-size: 20px;
  font-weight: bolder;
  margin-top: 20px;
}
.friend-image{
  width: 1440px;
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 130px;
  justify-content: space-between;
}
.friend-image img{
  width: 220px;
  height: 180px;
  vertical-align: middle;
}
.friend-image h4 {
  font-size: 20px;
  font-weight: bolder;
  margin:20px 0 0 0;
  text-align: center;
}
.friend-image li{
  width: 220px;
  background: #fff;
  box-sizing: border-box;
  text-align: left;
  padding-bottom: 20px;
}
.friend-image .description{
  font-size: 12px;
  box-sizing: border-box;
  padding: 0 15px;
}
</style>