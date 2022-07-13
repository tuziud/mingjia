<template>
  <div class="intr_box">

     <h3>舒适的户型设计</h3>
    <div class="intr_content">
      <h6>聚焦长者特征的贴心设计，根据长者能力变化做出的环境支持，多种户型供长者选择，让长者生活在“我要”的家。</h6>
      <span><img src="../../assets/shape.png" alt=""></span>
      <div>
      <h6>新风</h6>
      <p>
        新风系统三级净化空气，高于五星级酒店的新风量，滤除对人体有害的PM2.5，除尘效率达90%，让长辈时刻呼吸健康清新空气。
      </p>
      </div>
      <div>
      <h6>隔音</h6>
      <p>借助紧急呼叫系统、视频监控系统、远程医疗系统、监控医疗系统、电子围栏系统、防跌倒系统、智能家居系统、大数据健康监测系统实现远程监控功能,监测老人健康状况，充当老人的“隐形伴侣”</p>
      </div>
      <div>
      <h6>水源</h6>
      <p>24小时热水+低温水龙头，可防止长辈被烫+净化水+软化水。</p>
      </div>
      <div>
      <h6>照明</h6>
      <p>无眩光设计</p>
      </div>
      <div>
      <h6>供暖</h6>
      <p>提供6个月供暖，让长者居住在有温度的家园。</p>
      </div>
     
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
  margin-top: 26px;
  display: inline-block;
}

.intr_content div {
  margin-top: 24px;
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