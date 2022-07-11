<template>
  <div class="intr_box">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>适老化设计</el-breadcrumb-item>
      </el-breadcrumb>

    </div>
    <div class="intr_content">
      <h3>适老化设计</h3>
      <ul class="de_list">
        <li>
          <div class="img_box img_box_left">
            <img src="../../assets/d1.png" alt="">
          </div>
          <div class="img_text">
            <h4>适老化照明</h4>
            <p>防眩光灯光系统,针对老人视物能力减弱情况,统-采用暖色调光源,提高室内照度标准,让老人始终感受明用漫射与间接照明,光线柔和,控制眩光。</p>
          </div>
        </li>
        <li class="img_text_left">
          <div class="img_text">
            <h4>无高差</h4>
            <p>地面全社区地面均采用无高度差设计,尽量避免长辈摔倒等危险情况发生,方便轮椅出行</p>
          </div>
           <div class="img_box img_box_left">
            <img src="../../assets/d2.png" alt="">
          </div>
        </li>
        <li>
          <div class="img_box img_box_left">
            <img src="../../assets/d3.png" alt="">
          </div>
          <div class="img_text">
            <h4>无障碍电梯</h4>
            <p>各社区均设置病床电梯,门宽便于轮椅出入。</p>
          </div>
        </li>
        <li class="img_text_left">
          <div class="img_text">
            <h4>无障碍通道</h4>
            <p>社区采用国际无障碍标准,保障两个轮椅正常通过,并根据长辈行走和休息的间隔需求,设置休憩座椅。</p>
          </div>
           <div class="img_box img_box_left">
            <img src="../../assets/d4.png" alt="">
          </div>
        </li>
         <li>
          <div class="img_box img_box_left">
            <img src="../../assets/d5.png" alt="">
          </div>
          <div class="img_text">
            <h4>入门记忆台</h4>
            <p>门口设有置物台,长辈可以根据自己的喜好放-些小摆件,方便记住自己的家门。</p>
          </div>
        </li>
        <li class="img_text_left">
          <div class="img_text">
            <h4>圆角设计</h4>
            <p>家具和墙面转角处均采用圆角设计,预防长辈磕碰。</p>
          </div>
           <div class="img_box img_box_left">
            <img src="../../assets/d6.png" alt="">
          </div>
        </li>
         <li>
          <div class="img_box img_box_left">
            <img src="../../assets/d7.png" alt="">
          </div>
          <div class="img_text">
            <h4>拉绳报警</h4>
            <p>各处配有紧急拉绳报警, 绳长离地面8-12公分,以备长辈遇到突发情况及时得到救助。</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- <img src="../assets/intro.png" alt=""> -->

  </div>
</template>
<script>

export default {
  name:'',
  components: { },
  props: [""],
  data() {
    return {

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

.bread {
  display: flex;
  font-size: 18px;
  padding-left: 20px;
  padding-top: 10px;
  height: 22px;
  background-color: #f5f5f5;
}

.intr_content {
  padding: 0 120px 20px;
}

.de_list li{
  display: flex;
  margin-bottom: 32px;
}
.img_box {
  width: 600px;
  height: 400px;
}
.img_text {
  padding: 90px 60px;
}

.img_text h4 {
  font-size: 40px;
  color: #333;
  font-weight: bold;
}
.img_text h4,
.img_text p {
  text-align: left;
}

.img_text p {
  color: #333;
  font-size: 20px;
}

.img_text_left h4,
.img_text_left p {
  text-align: right;
}

</style>