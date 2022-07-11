<template>
  <div class="intr_box">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>五星服务</el-breadcrumb-item>
        <el-breadcrumb-item>花园社区</el-breadcrumb-item>
        <el-breadcrumb-item>新中式建筑风格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
     <h3>新中式建筑风格</h3>
    
    <img src="../../assets/star1.png" alt="">
    <div class="intr_content">
      <p>中式建筑在沿袭中国传统建筑精粹的同时，更注重对现代生活价值的精雕细刻。以中国传统古典文化为背景，营造极富中国浪漫情调的生活空间。
居住讲究“静”和“净”，打造人与环境的和谐共生，居住环境的稳定、安全和归属感。
铭佳康养社区传承当地传统建筑文化，运用现代建筑语言，打造具有地域特征的康养家园， 结合居住、功能、景观、风水的要求进行一体化规划设计。
      </p>
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
.intr_box .intr_content p {
  color: #333333;
  font-size: 14px;
  text-align: left;
  text-indent: 32px;
  margin-top: 40px;
  text-align: justify;
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

.tags i {
  margin-right: 30px;
  color: #fff;
  width: 48px;
  display: inline-block;
  font-style: normal;
  font-size: 24px;
  border-radius: 5px 0 0 5px;
}

.tag_origin {
  color: #e99e24;
  background-color: #ffd7ab;
}

.tag_origin i {
  background-color: #e99e24;
}

.tag_bule {
  color: #2488e9;
  background-color: #ebf3fc;
}

.tag_bule i {
  background-color: #2488e9;
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