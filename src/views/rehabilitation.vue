<template>
  <div class="intr_box">
    <h3>康复医院</h3>
    <div class="intr_content">
      <img src="../assets/recovery/1.jpg" alt="" class="img">
      <p>
        铭佳康复医疗中心是经德州市卫健委批准，以医康养为特色的二级康复专科医院，德州市医保定点单位。建筑面积一万平方米，规划床位220张，以康复医学、老年医学、健康管理作为重点发展方向，是一家通过国际JCI认证的康复专科医疗中心。首都医科大学附属宣武医院疼痛康复中心临床合作定点单位、国家老年疾病中心临床合作定点单位，接入医保、异地医保，建立完善的医疗健康服务。医院秉承国际化康复治疗理念，提供全面的多学科团队协作式康复医疗服务。
      </p>
      <p>服务项目：失能、半失能、病后、术后长者、以及偏瘫康复、截瘫康复、脑瘫康复、骨伤康复、慢性病康复、脊柱康复、颈肩康复等常见康复疾病</p>

      <p>        温馨的环境、先进的医疗设备、高水平的康复医生团队、国际化的康复治疗师团队,以及经验丰富的专业康复护士团队,加上中医师、心理医生、临床药师、文娱治疗师、 临床营养师以及服务顾问等专业人士的共同协作——我们致力于为每一位入住铭佳康复医院的长者提供安全、人性化,及个性化的医疗保障服务。</p>
    </div>

  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: [""],
  data() {
    return {};
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
  padding-bottom: 20px;
}

.intr_box h3 {
  font-size: 28px;
  color: #333333;
  margin: 40px 0 30px;
}

.intr_content {
  padding: 0 120px 80px;
}

.intr_content img {
  width: 100%;
}
.intr_box .intr_content p {
  color: #333333;
  font-size: 18px;
  line-height: 36px;
  text-align: left;
  text-indent: 32px;
  margin-top: 40px;
  text-align: justify;
}
</style>
