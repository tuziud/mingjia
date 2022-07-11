<template>
  <div class="intr_box">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>时间银行</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="intr_content">
      <h3>时间银行—<span>服务今天  乐享明天</span></h3>
      <p>铭佳康养社区时间银行养老模式是志愿者参加养老服务，在自己年满60周岁及以上直系亲属需要服务时，可以用之前存储的时间进行兑换服务或实物奖励，实现互助养老，爱心循环的模式。</p>
    </div>
    <div class="intr_content kemu">
        <div class="tags_warp">
          <span class="tags  tag_bule">
            <i>01</i>
            时间银行志愿者
          </span>
        </div>
       
        <div class="list_warp">
           <p class="text_blod">基本条件为：年满18周岁、有公益服务精神、有从事养老服务的时间、身体健康、无个人信用不良记录和严重违法记录。
铭佳康养鼓励入住社区的活力老人以志愿者的身份参与时间银行服务。</p>
         
        </div>
        <div class="tags_warp">
          <span class="tags tag_origin">
            <i>02</i>
            时间银行服务对象
          </span>
        </div>
        <div class="list_warp">
          <p class="text_blod">入住铭佳康养社区的失能、半失能老人、失智老人、存有时间的60周岁以上老年人。</p>
          <p class="text_blod">后续铭佳康养也会将该服务向全市推广，包括空巢独居老人等符合条件的长者都可以享受时间银行的志愿者服务。</p>
            <div  class="list_item">

           </div>
        </div>

        <div class="tags_warp">
          <span class="tags tag_bule">
            <i>03</i>
            服务内容
          </span>
        </div>

        <div class="list_warp">
          <p class="text_blod">为便于养老志愿服务内容的认定、存储和兑换,降低服务过程中的风险,以非专业性、非家政类且风险可控的服务内容为主。主要包括以下方面:</p>
          <ul>
            <li v-for="(data,index) in listItem" :key="index">
              <h5>{{data.title}}</h5>
              <div v-html="data.content" class="list_txt"></div>
            </li>
          </ul>
        </div>
    </div>
    <!-- <img src="../assets/intro.png" alt=""> -->

  </div>
</template>
<script>

// import image1 from "../assets/image1.png";
// import { ListItem } from "../components/index.js"; 

export default {
  name:'',
  components: {  },
  props: [""],
  data() {
    return {
      listItem: [{
        title:'(1)情感慰藉',
        content: '<P>包括陪伴聊天及其他情感慰藉相关项目</p>'
      },
      {
        title:'(2)协助服务',
        content: '<P>包括协助缴费及其他协助服务相关项目。</p><P>协助缴费:协助、陪同老年人缴纳水电气热费、有线电视费及网络缴费,手机充值和报刊订阅等服务。</p>'

      },
      {
        title:'(3)出行陪伴',
        content: `<p>包括陪同购物、陪同就医及其他出行陪伴相关项目。</p>
                  <p>陪同购物:陪同老年人赴超市、菜市场等场所购物。</p>
                  <p>陪同就医:陪同老年人赴医院、体检中心等机构,协助老年人挂号,陪同体检、就诊、取药缴费等。</p>`
      },
      {
        title:'(4)文体活动',
        content: '<P>括陪同或指导老年人开展体育健身类、文化类、手工类等活动。</p>'
      },
      {
        title:'(5)健康科普',
        content: `<p>包括健康知识宣传、心理咨询及其他健康科普相关项目。</p>
                  <p>健康知识宣传:为老年人提供健康科普宣传、健康知识普及等服务。</p>
                  <p>心理咨询:为老年人提供心理咨询服务,缓解老年人抑郁情绪、老年期焦虑、睡眠障碍等心理问题。</p>`
      },
      {
        title:'(6)法律援助',
        content: '包括陪伴聊天及其他情感慰藉相关项目'
      },
      {
        title:'(7)培训讲座',
        content: `<p>包括智能设备培训、厨艺培训及其他培训讲座相关项目。</p>
                  <p>智能设备培训:开展网络信息技术、公共信息查询、网络社交媒体应用等基础课程培训,为老年人讲授电脑和手机上网、微信沟通、手机银行等使用方法。</p>
                  <p>厨艺培训:开展烹饪、烘焙等课程培训。</p>`
      },
      {
        title:'(8)指导防范金融和网络风险',
        content: `<p>包括指导老年人防范金融诈骗、防范网络诈骗及其他防范金融风险相关项目。</p>
<p>防范金融诈骗:开展理财知识及金融、汇款防诈骗等宣传。</p>
<p>防范网络诈骗:开展电信、中奖、网络购物防诈骗等宣传。</p>`
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
.intr_box {
  width: 1440px;
  margin: 0 auto;
  background: #ffffff;
  display: inline-block;
}

.intr_box h3 {
  font-size: 28px;
  color: #333333;
  margin: 70px 0 30px;
}

.intr_box h3 span {
  color: #1A3E79;
}

.intr_content {
  padding: 0 120px 20px;
}

.intr_box .intr_content p,
.list_txt{
  color: #333333;
  font-size: 18px;
  text-align: left;
  text-align: justify;
}

.list_txt{
  line-height: 32px;
}

.tags_warp {
  text-align: left;
}

.tags {
  border-radius: 5px;
  padding-right: 30px;
  height: 48px;
  line-height: 48px;
  font-weight: bold;
  display: inline-block;
}

.tags i {
  margin-right: 30px;
  color: #fff;
  width: 48px;
  display: inline-block;
  font-style: normal;
  font-size: 24px;
  border-radius: 5px 0 0 5px;
  text-align: center;
}

.tag_origin {
  color: #E99E24;
  background-color: #FFD7AB;
}

.tag_origin i {
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

.bread {
  display: flex;
  font-size: 14px;
  padding-left: 20px;
  padding-top: 10px;
  height: 22px;
  background-color: #f5f5f5;
}

.list_warp {
  padding: 24px 50px;
}

.list_warp .text_blod {
  font-size: 16px;
  font-weight: bold;
  color: #333;

}
.list_warp li {
  margin-top: 30px;
}
.list_warp li h5 {
  font-size: 20px;
  color: #2488E9;
  text-align: left;
}

</style>