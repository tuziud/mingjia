<template>
  <div class="intr_box">
    <!-- 面包屑 -->
    <el-breadcrumb class="tabs" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/start_serve/start_serve' }"
      >五星服务</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/start_serve/star_8' }"
      >文化交流</el-breadcrumb-item
      >
    </el-breadcrumb>
    <!-- 第二部分 -->
    <div class="helth-sys">
      <h2>老年大学</h2>
      <div class="info">
        <i>01</i>
        <span
        >老年大学开展各种文化社团活动，由有特长的长者发挥余热担任社长，并自主管理，参与社区文化活动。多达几十种课程的精心安排。</span
        >
      </div>
      <div class="list-item">
        <div v-for="(data, index) in listData" :key="index">
          <ListItem :data="data" :imgSize="260" />
        </div>
      </div>

      <div class="info second">
        <i>02</i>
        <span
        >社区内搭建了二十多个兴趣爱好俱乐部，俱乐部组织社区专家顾问团参与外部公益活动，开展外部联动的高端论坛和演出，真正实现社区内外部资源开放交流。</span
        >
      </div>
      <div class="list-item">
        <div v-for="(data, index) in listDataArr" :key="index">
          <ListItem :data="data" :imgSize="360" />
        </div>
      </div>
      <div class="info second">
        <i>03</i>
        <span
        >积分奖励制度：长者参与老年大学、社区各项活动可获得积分，积分可兑换实物奖励或抵扣医疗健康服务自费部分金额</span
        >
      </div>
      <div class="list-item">
        <div v-for="(data, index) in listDataItem" :key="index">
          <ListItem :data="data" :imgSize="360" />
        </div>
      </div>
    </div>
    <!-- 第三部分 -->
    <div class="passport">
      <h2>管家式个性化的服务模式</h2>
      <p class="infos">社区使用专业评估工具对长者身体状况、兴趣爱好、饮食习惯等评估，并根据结果为其提供个性化服务</p>
      <img src="../../assets/meet.png" alt="">
    </div>

    <div class="passport meet">
      <h2>精神乐园</h2>
      <p class="infos">修身养性、举办养生养心讲座聚会等</p>
      <div class="image-group">
        <img src="../../assets/read1.png" alt="">
        <img src="../../assets/read.png" alt="">
      </div>
    </div>

  </div>
</template>
<script>
import { ListItem } from "../../components/index.js";
import book1 from "../../assets/book.png";
import book2 from "../../assets/book2.png";
import book3 from "../../assets/book3.png";
import book4 from "../../assets/book4.png";
import book5 from "../../assets/book5.png";
import book6 from "../../assets/book6.png";
import book7 from "../../assets/book7.png";
import book8 from "../../assets/book8.png";

import dance1 from '../../assets/dance.png'
import dance2 from '../../assets/dance2.png'
import dance3 from '../../assets/dance3.png'

import q1 from '../../assets/q1.png'
import q2 from '../../assets/q2.png'
import q3 from '../../assets/q3.png'
export default {
  name: "",
  components: { ListItem },
  props: [""],
  data() {
    return {
      listDataArr:[
        {
          imgUrl: dance1
        },
        {
          imgUrl: dance2
        },
        {
          imgUrl: dance3
        },
      ],
      listDataItem:[
        {
          imgUrl: q1
        },
        {
          imgUrl: q2
        },
        {
          imgUrl: q3
        },
      ],
      listData: [
        {
          imgUrl: book1,
          title: "身体状况",
        },
        {
          imgUrl: book2,
          title: "兴趣爱好",
        },
        {
          imgUrl: book3,
          title: "饮食习惯",
        },
        {
          imgUrl: book4,
          title: "饮食习惯",
        },
        {
          imgUrl: book5,
          title: "身体状况",
        },
        {
          imgUrl: book6,
          title: "兴趣爱好",
        },
        {
          imgUrl: book7,
          title: "饮食习惯",
        },
        {
          imgUrl: book8,
          title: "饮食习惯",
        },
      ],
    };
  },
  watch: {},
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style scoped>
.intr_box{
  width: 1440px;
  margin: 0 auto;
}
.tabs {
  width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;
}
.helth-sys {
  width: 1440px;
  margin: 0 auto;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.helth-sys h2 {
  font-size: 28px;
  font-weight: bolder;
  color: #1A3E79;
  padding: 67px 0 15px 0;
}
.helth-sys .info {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 100px;
  margin-bottom: 20px;
}
.second {
  margin: 50px 0 30px 0;
}

.helth-sys .info i {
  width: 48px;
  height: 48px;
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  font-style: normal;
  background: #1A3E79;
  border-radius: 100%;
  margin-right: 10px;
  color: #fff;
}
.list-item {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 150px;
  flex-wrap: wrap;
}
.listItem {
  padding-bottom: 0 !important;
}
.passport {
  box-sizing: border-box;
  padding: 0 76px 60px;
}
.passport h2 {
  font-size: 28px;
  font-weight: bolder;
  color: #1A3E79;
  padding: 67px 0 15px 0;
}
.infos {
  padding-bottom: 34px;
  font-size: 14px;
  text-align: center;;
}
.meet{
  background: #fff;
}

.image-group{
  display: flex;
  box-sizing: border-box;
  padding: 0 30px;
  justify-content: space-around;
}
</style>
