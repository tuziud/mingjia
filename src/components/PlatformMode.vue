<template>
  <div class="mode">
     <div class="mode-wrap">
        <div class="right-wrap">
          <img :src="imgUrl" alt="">
        </div>
        <div class="left-wrap">
           <p class="title">{{title}}</p>
           <p class="intor">{{modeContent}}</p>
           <p class="intor">{{info}}</p>
           <h1 class="marks">”</h1>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: ["title","modeContent","imgUrl","info"],
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

.mode-wrap {
  display: flex;
  width: 1440px;
  height: 551px;
  margin: 0 auto;
  background: #eee;
}
.left-wrap {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 61px 59px 76px 0;
  background: #eee;
}
.marks{
  font-size: 50px;
  color: #1a3e79;
  display: flex;
  margin-left: 87px;
  line-height: 0;
  padding-top: 20px;
  justify-content: flex-end;
  font-size: 120px;
}
.intor{
  width: 561px;
  height: 90px;
  line-height: 30px;
  font-size: 16px;
  text-align: left;
  margin-bottom: 20px;
}
.title{
  width: 515px;
  font-size: 40px;
  font-weight: bolder;
  margin: 0 46px 37px 0;
  text-align: left;
}
.right-wrap{
  margin: 61px 59px 76px 100px;
}
.right-wrap img{
  width: 620px;
  height: 413px;
}
</style>