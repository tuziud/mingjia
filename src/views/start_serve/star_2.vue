<template>
  <div class="intr_box">

     <h3>苏式园林景观</h3>
    
    
    <div class="intr_content">
      <h6>【水墨袭园,雅致承身】</h6>
      <p>苏式园林与江南夜景的碰撞,在这里,你能真正体会什么叫“一步一景”,亭、台、楼、阁、廊、坊、桥、榭、厅、堂、房、轩等园林构造于一体,没有其他园林那般应接不暇,张弛有度, 如一张画卷,将这一草一木娓娓道来。</p>
      <span><img src="../../assets/s1.png" alt=""></span>
    </div>

    <div class="intr_content">
      <h6>【折花成诗,携枝成韵】</h6>
      <p>一草一木，一山一水,园林式所具的强大包容性,将花草之韵凝聚成-个须弥小世界,回归自然,守望天人合一的和谐之居。</p>
      <span><img src="../../assets/s2.png" alt=""></span>
    </div>

    <div class="intr_content">
      <h6>【赏樱赏竹,赏风赏月】</h6>
      <p>风花雪月,绿竹挺拔,庭院开放式的景致营造,让新中式住宅的外景得到了质的升华。听雨,赏樱,品茶,论道,这大概正是园林式社区的惬意所在了吧。</p>
      <span><img src="../../assets/s3.png" alt=""></span>
    </div>

    <div class="intr_content">
      <h6>【闲情逸致，怡然自得】</h6>
      <p>在长者不同的步行半径内,分级设置服务配套,更高效的解决长辈室外小憩、社交、健身等功能需求。</p>
      <span><img src="../../assets/s4.png" alt=""></span>
    </div>

    <div class="intr_content">
      <h6>【灯火万家，灿若星河】</h6>
      <p>根据不同的空间、不同的场合、不同的对象来选择不同的照明方式和灯具,在保证恰当的照度和亮度的同时,赋予所在环境特有的主旨、风格、深度、情感、色彩以及氛围。
<br/>铭佳康养社区,打破按常规夜景景观设置,巧妙处理各种灯光,丰富社区夜景景观次空间,在美妙的灯光夜景下,使社区的夜景妙趣横生,为居民朋友增添无限意趣!</p>
      <span><img src="../../assets/s5.png" alt=""></span>
    </div>
  </div>
</template>
<script>
import image1 from "../../assets/image1.png";
import { ListItem } from "../../components/index.js";

export default {
  name: "",
  components: { ListItem },
  props: [""],
  data() {
    return {
      listArr: [
        {
          title: "记忆走廊",
          imgUrl: image1
        },
        {
          title: "防走丢设计",
          imgUrl: image1
        },
        {
          title: "适老设施",
          imgUrl: image1
        },
        {
          title: "入户记忆箱",
          imgUrl: image1
        },
        {
          title: "记忆走廊",
          imgUrl: image1
        },
        {
          title: "防走丢设计",
          imgUrl: image1
        },
        {
          title: "适老设施",
          imgUrl: image1
        },
        {
          title: "入户记忆箱",
          imgUrl: image1
        }
      ],
      listArr2: [
        {
          title: "记忆走廊",
          imgUrl: image1
        },
        {
          title: "防走丢设计",
          imgUrl: image1
        },
        {
          title: "适老设施",
          imgUrl: image1
        },
        {
          title: "入户记忆箱",
          imgUrl: image1
        },
        {
          title: "记忆走廊",
          imgUrl: image1
        }
      ]
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
.intr_box .intr_content p {
  color: #333333;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 26px;
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


.tag_bule{
  color: #1A3E79;
  background-color: rgba(26, 62, 121, 0.2);
}

.tag_bule i{
  background-color: #1A3E79;
}
.list_item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>