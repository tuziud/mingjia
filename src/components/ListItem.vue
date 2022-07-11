<template>
  <div class="listItem" :style="{width: imgSize+'px' }">
    <img v-if="data.imgUrl" :src="data.imgUrl" alt="" :style="{height: imgHight+'px'}">
    <h3  v-if="data.title && fontBold" > {{data.title}} </h3>
    <p class="title" v-if="!fontBold"> {{data.title}}</p>
    <p v-if="data.info" > {{data.info}} </p>
  </div>
</template>
<script>
  export default {
    name:'',
    components: {},
    props:['data','imgSize', 'imgHight', 'fontBold'],
    data () {
      return {};
    },
    watch: {},
    created() {},
    beforeMount() {},
    mounted() {},
    methods: {},
    computed: {}
  }
</script>
<style scoped>
.listItem{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding-bottom: 25px;
}

.title {
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;
}

.listItem img{
  width: 100%;
}
.listItem h3{
  font-size: 18px;
  font-weight: bolder;
  margin: 20px 0 10px 0;
}
.listItem p{
  font-size: 14px;
  color: #333;
}
</style>
