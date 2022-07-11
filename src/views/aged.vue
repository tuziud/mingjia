<template>
  <div class="min-pages">
     <AgedMode :title="title" :modeContent="content" :imgUrl="lexUrl1"/>
     <PlatformMode :title="peoples" :modeContent="peoplesContent" :info="peoplesInfo" :imgUrl="lexUrl2"/>
      <AgedMode :title="activity" :modeContent="activityContent" :imgUrl="lexUrl3"/>
     <PlatformMode :title="serveDetail" :modeContent="serveDetailContent" :info="serveDetailInfo" :imgUrl="lexUrl4"/>
      <!-- <AgedMode :title="community" :modeContent="communityContent" :info="info" :imgUrl="imgUrl"/> -->
  </div>
</template>
<script>
import { AgedMode, PlatformMode } from "../components/index.js";
// 乐享家
import lex1 from '../assets/leXiang/1.jpg';
import lex2 from '../assets/leXiang/2.jpg';
import lex3 from '../assets/leXiang/3.jpg';
import lex4 from '../assets/leXiang/4.jpg';

export default {
  // name: "",
  components: { AgedMode, PlatformMode },
  data() {
    return {
      title: "以“乐享家”为理念，定制八大专属服务体系",
      content: "家趣（文娱活动）、家和（社交活动）、家观（心理辅导）、家活（管家服务）、家康（专业康复）、家护（专业护理）、家养（养心养性）、家餐（健康膳疗）八大专属服务体系，让每位长者在此拥有“尊严、质量、健康、 快乐”的生活。",
      lexUrl1: lex1,
      lexUrl2: lex2,
      lexUrl3: lex3,
      lexUrl4: lex4,
      activity: "组织各种业余活动",
      activityContent: "组织举办书画、舞蹈、戏曲等课程，生日聚会等活动，使老人的生活不再孤单无趣，在物理、精神等专业外部帮助下，长辈们可以积极参与社交、保持活力，感受生活的幸福感。",
      community: "智慧康养社区老人的隐形伴侣",
      communityContent: "应用云技术和物联网技术的结合，通过云端服务器汇集社区老人的各种信息打造智慧康养社区系统平台。",
      info: "借助紧急呼叫系统、视频监控系统、远程医疗系统、监控医疗系统、电子围栏系统、防跌倒系统、智能家居系统、大数据健康监测系统。实现远程监控功能，监测老人健康状况，充当老人的“隐形伴侣。",
      peoples: "多元化的人际交流平台",
      peoplesContent: "康养社区为老年人打造一个全新的精神文化生活圈：打破老年人的被动孤立，让老年人生活在社会中，互通、互助，融入社会，拥有社会依存感，和孤独绝缘，与快乐作伴。",
      peoplesInfo: "在康养社区，老人不仅可与同社区内的老人交流，更会创造多种社区外的社会化交流活动，增加与社会接触的机会。同时还会建立线上交流平台、老人与家庭沟通平台、社区自制平台等，形成立体的多渠道交流模式。",
      serveDetail: "铭佳康养1635项服务细节",
      serveDetailContent: "铭佳康养服务标准：十大指南、服务规范化、流程标准化、技术专业化，打造长者全流程体验",
      serveDetailInfo: "以长者为中心，365 天 *24 小时全天候 99 项服务 1635 项服务细节"
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
<style lang='' scoped>
</style>
