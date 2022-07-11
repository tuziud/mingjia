<template>
  <div class="intr_box">
    <h3>护理医院</h3>
    <div class="intr_content">
      <img src="../assets/recovery/2.jpg" class="img-hl" alt="">

      <p>铭佳护理院是经德州市卫健委批准，以医康养为特色的二级护理专科医院， 德州市医保定点单位。总建筑面积一万平方米，规划床位280张，设置有内科、康复医学科、中医科、中西医结结合科、临终关怀科、医学检验科、医学影像科等诊疗科目。并设立了包括脑卒中护理病区、伤口压疮护理病区、认知症护理病区、骨折康复护理病区、疾病术后康复护理病区等，为患有慢性病及需要康复的长者提供专业的医疗康复护理保障服务。<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、为入住铭佳康养毎位长者提供健康评估、并制定健康档案<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、可按“自理、介助 1、介助 2、介助 3、介护 1、介护 2、介护 3、专护 1、专护 2、专护 3、特护”等 11 个等级向入住长者提供专业护理服务<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、服务项目：半失能长者护理、全失能长者护理、输液护理、压疮护理、换药护理、导管护理、鼻饲护理、安宁中心等常见护理项目<br/></p>

    </div>
    <div class="intr_content kemu">
        <div class="tags_warp">
          <span class="tags tag_bule">
            <i>01</i>
            诊疗科目
          </span>
        </div>
        <div class="list_warp">
            <div  class="list_item">
                <ListItem v-for="(data, index) in listArr" :key="index" :data="data" :fontBold="false" :imgSize="270" :imgHight="180"/>
           </div>
        </div>
        <div class="tags_warp">
          <span class="tags tag_bule">
            <i>02</i>
            医疗康复护理保障服务
          </span>
        </div>
        <div class="list_warp">
            <div  class="list_item">
                <ListItem v-for="(data, index) in listArr2" :key="index" :data="data" :fontBold="true" :imgSize="220" :imgHight="160"/>
           </div>
        </div>
    </div>
    <!-- <img src="../assets/intro.png" alt=""> -->

  </div>
</template>
<script>

import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";
import room3 from "../assets/room3.png";
import room4 from "../assets/room4.png";
import room5 from "../assets/room5.png";
import room6 from "../assets/room6.png";
import room7 from "../assets/room7.png";
import room8 from "../assets/room8.png";

import r1 from '../assets/r1.png'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.png'
import r4 from '../assets/r4.png'
import r5 from '../assets/r5.png'
import { ListItem } from "../components/index.js";

export default {
  name:'',
  components: { ListItem },
  props: [""],
  data() {
    return {
       listArr: [
        {
          title: "内科",
          imgUrl: room1
        },
        {
          title: "康复学科",
          imgUrl: room2
        },
        {
          title: "中医科",
          imgUrl: room3
        },
        {
          title: "中西医结合科",
          imgUrl: room4
        },
        {
          title: "安宁中心",
          imgUrl: room5
        },
        {
          title: "医学检验科",
          imgUrl: room6
        },
        {
          title: "医学影像科",
          imgUrl: room7
        },
        {
          title: "其他科目",
          imgUrl: room8
        }
      ],
      listArr2: [
        {
          title: "【脑卒中护理病区】",
          imgUrl: r1
        },
        {
          title: "【伤口压疮护理病区】",
          imgUrl: r2
        },
        {
          title: "【认知症护理病】",
          imgUrl: r3
        },
        {
          title: "【骨折康复护理病区】",
          imgUrl: r4
        },
        {
          title: "【疾病术后康复护理病区】",
          imgUrl: r5
        }
      ],
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
  color: #333333;
  margin: 40px 0 30px;
}

.intr_content {
  padding: 0 120px 20px;
}

.intr_content .img-hl {
  width: 100%;
}

.intr_box .intr_content p {
  color: #333333;
  font-size: 18px;
  text-align: left;
  text-indent: 32px;
  margin-top: 40px;
  text-align: justify;
  line-height: 39px;
}
.tags_warp {
  margin-bottom: 40px;
}
.tags {
  border-radius: 5px;
  padding-right: 30px;
  height: 48px;
  line-height: 48px;
  font-weight: bold;
  display: inline-block;

}

.tags i  {
  margin-right: 30px;
  color: #fff;
  width: 48px;
  display: inline-block;
  font-style: normal;
  font-size: 24px;
  border-radius: 5px 0 0 5px;
}

.tag_origin{
  color: #E99E24;
  background-color: #FFD7AB;
}

.tag_origin i{
  background-color: #E99E24;
}

.tag_bule{
  color: #1A3E79;
  background-color: rgba(26, 62, 121, 0.2);
}

.tag_bule i{
  background-color: #1A3E79;
}
.list_item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
/* .images {
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
} */
</style>
