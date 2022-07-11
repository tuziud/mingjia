<template>
  <div class="footer">
    <div class="footer_box">
      <div class="phone">
            <p>
              <img src="../assets/footerlogo.png" alt="">
            </p>
<!--            <span class="phone_text">-->
<!--              <i class="phone_icon"></i>-->
<!--              0534-2751777-->
<!--            </span>-->
        <img src="../assets/concatNumber.png" alt="">
      </div>
      <div class="footer_nav">
        <div style="width:300px;margin:0 auto; padding:20px 0;">
          <a target="_blank" href="#" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">邮箱：liweiyi@mingjiakangyang.com</p >
          </a>
          <a target="_blank" href="#" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;width: 600px">
            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">地址：山东省德州市德城区黄河涯镇鑫秋社区北临德公馆1排1号</p >
          </a>
          <a target="_blank" href="#" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;width: 600px">
            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">Copyright © 2013-2022 www.mingjiakangyang.com All Rights Reserved</p >
          </a>
          <a target="_blank" href="#" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
            <img src="../assets/footerPicture.png" style="float:left;"/>
            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">鲁公网安备 37140202001128号</p >
          </a>
        </div>
      </div>
      <div class="footer_vx">
        <p class="watch_vx">关注公众号</p>
        <p class="vx_code">
          <img src="../assets/code.jpeg" alt="">
        </p>
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
.footer {
  width: 1440px;
  height: 280px;
  background: #1A3E79;
  margin-top: 20px;
  color: #ffffff;
  margin: 0 auto;

}
.footer .footer_box {
  width: 1202px;
  margin: 0 auto;
  padding: 0 132px 0 106px;
  display: flex;
  justify-content: space-between;
}

.footer .footer_nav {
  width: 720px;
  margin-top: 60px;
 display: flex;
 justify-content: space-between;
}

.footer .footer_nav ol {
  font-size: 16px;
  font-weight: bold;
  padding: 0;
}

.footer .footer_nav li {
  font-size: 14px;
  text-align: left;
}

.footer .phone{
  width: 249px;
  /* height: 130px; */
  margin-top: 36px;
}
.footer .phone p {
  margin-bottom: 20px;
}
.footer .phone p img {
  width: 100%;
}

.footer .phone_text {
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
}

.footer .phone_icon {
  display: inline-block;
  width: 26px;
  height: 26px;
  margin-right: 10px;
  background: url("../assets/phoneicon.png") no-repeat;
}

.footer_vx {
  margin-top: 60px;
  font-size: 16px;
  font-weight: bold;
}

.footer_vx .vx_code {
  width: 80px;
  height: 80px;
  background: #ffffff;
  margin-top: 10px;
}

.footer_vx .vx_code img {
  width: 100%;
}

</style>
