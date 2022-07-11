<template>
  <div class="intr_box">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/start_serve/start_serve' }">五星服务</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/start_serve/star_3' }">花园社区</el-breadcrumb-item>
        <el-breadcrumb-item>层层有庭院 户户有花园</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
     <h3>层层有庭院 户户有花园</h3>
    
    <div class="intr_content">
      <p>考虑到长者的活动特点，铭佳康养在项目打造上别具匠心，创造出空中花园产品，做到户户有花园，家家有庭院，这在康养社区上还是首例。

      </p>
      <p>漫步云端，万千繁华尽收眼底；专属庭院，私藏空中花园美景；足不出户，尽享好友欢聚时光。
 </p>
      <p>
在开阔的空中庭院，或读书喝茶，或闲情对弈，或举杯畅饮，只闻花香，不谈喜悲，静静享受喧嚣之外的良辰美景，留给心境一片自得其乐的清净之地。</p>
     
      <span>
    <img src="../../assets/s6.png" alt="">

      </span>
    </div>


  </div>
</template>
<script>

export default {
  name: "",
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
  padding: 0 120px 80px;
}

.intr_content span {
  margin-top: 36px;
  display: inline-block;
}
.intr_box .intr_content p {
  color: #333333;
  font-size: 14px;
  text-align: left;
  margin-top: 20px;
  text-align: justify;
}

</style>