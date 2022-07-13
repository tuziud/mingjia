<template>
  <div class="intr_box">

     <h3>智慧社区</h3>
    <div class="intr_content">
      <p>应用云技术和物联网技术的结合,通过云端服务器汇集社区老人的各种信息打造智慧康养社区系统平台。
      </p>
      <p>
借助紧急呼叫系统、视频监控系统、远程医疗系统、监控医疗系统、电子围栏系统、防跌倒系统、智能家居系统、大数据健康监测系统实现远程监控功能,监测老人健康状况，充当老人的“隐形伴侣”</p>
      <span><img src="../../assets/s7.png" alt=""></span>
    </div>

  </div>
</template>
<script>

export default {
  name: "",
  components: {},
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
  padding: 0 120px 48px;
}
.intr_content h6 {
  font-size: 20px;
  text-align: left;
}

.intr_content span {
  margin-top: 36px;
  display: inline-block;
}
.intr_box .intr_content p {
  color: #333333;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  text-align: justify;
}
.list_item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>