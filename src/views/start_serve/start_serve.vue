<template>
  <div class="star_warp">
    <ul v-if="isShow" class="star_list">
      <li v-for="(route) in linkList" :key="route.name" @click="jumpTo(route.path)">
        {{route.name}}
      </li>
    </ul>
    <router-view v-if="!isShow"></router-view>
  </div>
</template>
<script>
export default {
  components: {},
  props: [""],
  data() {
    return {
      isShow: true,
      currentRoute:'',
      linkList: [
        // { name: "新中式建筑风格", path: "star_1" },
        // { name: "苏式园林景观", path: "star_2" },
        // { name: "层层有庭院 户户有花园", path: "star_3" },
        // { name: "智慧社区", path: "star_4" },
        { name: "适老化设计", path: "star_5" },
        // { name: "舒适的户型设计", path: "star_6" },
        { name: "健康管理服务", path: "star_7" },
        { name: "老年大学", path: "star_8" },
        { name: "休闲娱乐", path: "star_9" },
        { name: "科学膳食", path: "star_10" },
        { name: "时间银行", path: "star_11" }
      ]
    };
  },
  watch: {},
  created() {},
  beforeMount() {},
  mounted() {

  },
  methods: {
    jumpTo(route) {
      this.isShow = false;
      this.$router.push({name:`${route}`}).catch(data => {  });
    }
  },
  computed: {}

};
</script>
<style scoped>
.star_warp {
  width: 1440px;
  margin: 0 auto;
  background-color: #ffffff;
  display: inline-block;
}
.star_list {
  margin: 40px;
  text-align: left;
  font-size: 24px;
}

</style>
