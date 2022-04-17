<template>
  <div>
    <el-row class="border">
      <h1>This is {{ msg }}!</h1>
      <!-- <img src=".\assets\bule.png" alt=""> -->
      <el-carousel indicator-position="outside" ref="carousel" :height="bannerHeight + 'px'" @change="carousel">
        <el-carousel-item v-for="imgData in imgDatas" :key="imgData.id">
          <img :src="imgData.src" alt="" class="carousel-img" />
        </el-carousel-item>
      </el-carousel>

      
        <section
          v-for="(imgData, index) in imgDatas"
          :key="index"
          @click="controlSwiper(imgData.id, index)"
        >
        <div v-show='active == imgData.id'>
          <p>{{ imgData.info }}</p>
          <a :href="imgData.link">详情</a>

        </div>
          <!-- <p v-show='active == imgData.id' >{{ imgData.info }}</p> -->
        </section>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {
      msg: "主页",
      imgDatas: [
        {
          id: 0,
          src: require("../assets/毕业季3.jpg"),
          info: "ADaM团队合照",
          link: "https://mp.weixin.qq.com/s/VIafUMBOyz0R6U_qj_PXDA",
        },
        {
          id: 1,
          src: require("../assets/CVPR1.jpeg"),
          info: "课题组论文被CVPR2022接收",
          link: "https://mp.weixin.qq.com/s/jW13kykykexHwBvig3az0A",
        },
        {
          id: 2,
          src: require("../assets/比赛.jpeg"),
          info: 'ADaM小组硕士同学在第四届"中国法研杯"中获奖',
          link: "https://mp.weixin.qq.com/s/8kLVyWtHvlJXXbpsZ7EPTg",
        },
        {
          id: 3,
          src: require("../assets/软件学报.jpeg"),
          info: "课题组综述论文被软件学报接收",
          link: "https://mp.weixin.qq.com/s/aAUg-xZauZQwnu6eX4tcdA",
        },
      ],
      bannerHeight: "",
      active: 0,
    };
  },
  mounted() {
    // 首次加载时,初始化高度
    this.screenWidth = window.innerWidth;
    this.bannerHeight = (600 / 1550) * this.screenWidth;
    // 窗口大小发生改变
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.bannerHeight = (600 / 1550) * this.screenWidth;
    };
  },
  methods: {
    controlSwiper(id, index) {
      this.active = id;
      this.$refs.carousel.setActiveItem(index); // 注：这一句是方法成功的关键，别玩了在轮播图上加上ref=“carousel”
    },
    carousel(e) {
      this.active = e;
    },
  },
};
</script>

<style>
.carousel-img {
  width: 100%;
  height: inherit;
}
.tit{
  color: blue;
  display: block;
}
</style>