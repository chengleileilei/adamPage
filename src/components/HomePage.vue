<template>
  <div>
    <el-row class="carousel-bg carousel-top">
      <!-- <h1>This is {{ msg }}!</h1> -->
      <el-carousel
        indicator-position="outside"
        ref="carousel"
        :height="bannerHeight + 'px'"
        @change="carousel"
      >
        <el-carousel-item v-for="imgData in imgDatas" :key="imgData.id">
          <img :src="imgData.src" alt="" class="carousel-img" />
        </el-carousel-item>
      </el-carousel>
    </el-row>

    <el-row class="carousel-bg carousel-bottom-wrap">
      <div
        v-for="(imgData, index) in imgDatas"
        :key="index"
        @click="controlSwiper(imgData.id, index)"
        v-show="active == imgData.id"
        class="carousel-bottom"
      >
        <p class="img-tittle">{{ imgData.info }}</p>
        <div class="img-link-wrap">
          <a :href="imgData.link">详情>></a>
        </div>
      </div>
    </el-row>

    <el-row class="centered lr-padding">
      <el-col class="first-title-wrap">
        <p>实验室简介</p>
        <div></div>
      </el-col>
      <el-col class="home-content">
        <p>{{ introductOfLab }}</p>
      </el-col>
    </el-row>

    <el-row class="centered lr-padding">

      <el-col class="first-title-wrap">
        <p>最新动态</p>
        <div></div>
      </el-col>

      <el-col class="home-content research-trend-wrap">
        <div class="research-trend">
          <div class="trend-tit-wrap lr-padding">
            <p class="trend-time">[2022-2-2]</p>
            <a href=""><p class="trend-tit">Adam一篇论文被cvpr录用</p></a>
          </div>
          <div class="trend-content lr-padding">
            <p>本问题提出了，，，，，</p>
            <div>
              <a href="">Paper</a>
            </div>
          </div>
        </div>
      </el-col>

    </el-row>
    
  </div>
</template>

<script>
import dataMock from "../../static/mockData.json";
console.log(dataMock);
export default {
  name: "homepage",
  data() {
    return {
      msg: "主页",
      // imgDatas:dataMock.imgDatas,
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
      introductOfLab: dataMock.introductionOfLab.cn,
    };
  },
  mounted() {
    // 首次加载时,初始化高度 设置宽高比为3：1
    this.screenWidth = window.innerWidth;
    this.bannerHeight = (1 / 3) * this.screenWidth;
    // 窗口大小发生改变
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.bannerHeight = (1 / 3) * this.screenWidth;
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

<style lang="less" scoped>
/* 轮播图指示标样式 */
/deep/.el-carousel__indicators--horizontal {
  .el-carousel__indicator--horizontal button {
    width: 12px;
    height: 12px;
    background: rgba(83, 83, 83, 0.753);
    border-radius: 50%;
    opacity: 0.5;
    border: 1px solid rgba(12, 36, 24, 100);
    // border: 1px solid rgba(27, 27, 27, 0.527)
  }

  .el-carousel__indicator--horizontal.is-active button {
    width: 24px;
    height: 12px;
    background: rgb(255, 255, 255);
    opacity: 0.5;
    border-radius: 10px;
  }
}
/* end */
</style>

<style >
.carousel-img {
  width: 100%;
  height: inherit;
}

.carousel-bg {
  background-color: rgb(204, 225, 249);
}

.carousel-bottom-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-bottom {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.carousel-bottom > p {
  color: rgba(104, 155, 210, 99);
  font-size: 25px;
  font-family: SourceHanSansSC-bold;
}

.carousel-bottom .img-link-wrap {
  position: relative;
  top: 2px;
  margin-left: 15px;
  padding: 4px 10px 4px 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.678);
  border: 1px solid rgba(24, 93, 166, 100);
}

.carousel-bottom .img-link-wrap:hover {
  background-color: rgba(255, 255, 255, 0.342);
  transition: width 1s;
}

.img-link-wrap a {
  color: rgba(24, 93, 166, 100);
  font-size: 17px;
}

@media screen and (max-width: 800px) {
  .carousel-bottom > p {
    font-size: 20px;
  }
  .img-link-wrap a {
    font-size: 15px;
  }
}

/* 轮播图样式结束 */

.first-title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
  margin-top: 40px;
}
.first-title-wrap p {
  color: rgb(62, 121, 183);
  font-size: 55px;
  font-family: SourceHanSansSC-regular;
}
.first-title-wrap div {
  margin-top: 30px;
  width: 171px;
  height: 6px;
  opacity: 0.43;
  background-color: rgba(134, 179, 227, 100);
  color: rgba(24, 93, 166, 100);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.home-content {
  /* padding: 20px; */
  background-color: rgba(204, 225, 249, 0.432);
  text-align: left;
}
.home-content>p {
  font-size: 28px;
  text-indent: 2em;
  margin: 30px;
}

.lr-padding {
  padding: 0 30px 0 30px;
}



/* 最新动态 */
.trend-tit-wrap{
  background-color: rgb(255, 255, 255);
}
.research-trend-wrap{
  border: 1px solid rgba(187, 187, 187, 100);
  padding-top: 30px;
}
.trend-tit-wrap .trend-time{
  font-size: 30px;
  color: rgb(16, 16, 16);
  font-family: SourceHanSansSC-bold;

}
.trend-tit-wrap .trend-tit{
  font-size: 30px;
  font-family: SourceHanSansSC-regular;
  color: rgb(44, 97, 165);

}
</style>