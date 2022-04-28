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
        <el-carousel-item v-for="imgData in imgData" :key="imgData.id">
          <img :src="imgData.src" alt="" class="carousel-img" />
        </el-carousel-item>
      </el-carousel>
    </el-row>

    <el-row class="carousel-bg carousel-bottom-wrap">
      <div
        v-for="(imgData, index) in imgData"
        :key="index"
        @click="controlSwiper(imgData.id, index)"
        v-show="active == imgData.id"
        class="carousel-bottom"
      >
        <p class="img-tittle">{{ imgData.info }}</p>
        <div class="img-link-wrap">
          <a :href="imgData.link"
            >详情<img src="@/assets/icon/iconPark-double-right.svg" alt=""
          /></a>
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

    <el-row class="centered lr-padding2">
      <el-col class="first-title-wrap">
        <p>最新动态</p>
        <div></div>
      </el-col>

      <el-col class="home-content research-trend-wrap">
        <div v-for="(trendData, index) in trendData" :key="index">
          <div class="research-trend">
            <div class="trend-tit lr-padding">
              <img
                class="trend-tit-angel-right"
                src="@/assets/icon/fas-fa-angle-right.svg"
                alt=""
              />

              <p class="trend-tit-time">
                [{{ trendData.time.y }}-{{ trendData.time.m }}-{{
                  trendData.time.d
                }}]
              </p>
              <a :href="trendData.link">
                <p class="trend-tit-p">{{ trendData.title }}</p>
              </a>
              <a :href="trendData.link" class="trend-tit-more"
                ><img src="@/assets/icon/iconPark-double-right.svg" alt=""
              /></a>
            </div>

            <div class="trend-content lr-padding">
              <p>{{ trendData.introduction }}</p>
              <div>
                <a href="" class="trend-paper-link">
                  <p>Paper</p>
                  <img src="@/assets/icon/fas-fa-paper-plane.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="border-top">
          <div class="trend-tit lr-padding">
            <router-link to="/papers">
              <img
                class="trend-tit-angel-right"
                src="@/assets/icon/fas-fa-angle-right.svg"
                alt=""
              />
              <p class="trend-tit-time">[查看论文列表]</p>
            </router-link>
            <router-link class="trend-tit-more" to="/papers">
              <img src="@/assets/icon/iconPark-double-right.svg" alt="" />
            </router-link>
          </div>
        </div>

        <div class="border-top">
          <div class="trend-tit lr-padding">
            <router-link to="/research">
              <img
                class="trend-tit-angel-right"
                src="@/assets/icon/fas-fa-angle-right.svg"
                alt=""
              />
              <p class="trend-tit-time">[更多科研动态]</p>
            </router-link>
            <router-link class="trend-tit-more" to="/research">
              <img src="@/assets/icon/iconPark-double-right.svg" alt="" />
            </router-link>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="centered lr-padding">
      <el-col class="first-title-wrap">
        <p>研究方向</p>
        <div></div>
      </el-col>
      <el-col class="home-content"> </el-col>
    </el-row>

    <el-row class="backcolor-blue lr-padding">
      <el-row :gutter="20" class="centered">
        <el-col
          :xs="24"
          :sm="12"
          :md="12"
          :lg="12"
          :xl="12"
          v-for="(card, index) in searchDirection"
          :key="index"
          class="card-wrap"
        >
          <div class="card">
            <img :src="card.logo_src" alt="" class="card-logo" />
            <p class="card-tit1">{{ card.title }}</p>
            <p class="card-tit2">
              {{ card.content }}
            </p>
          </div>
        </el-col>
      </el-row>
    </el-row>

    <el-row class="centered lr-padding">
      <el-col class="first-title-wrap">
        <p>了解更多</p>
        <div></div>
      </el-col>
      <el-col class="home-content"> </el-col>
    </el-row>

    <el-row class="backcolor-blue lr-padding">
      <el-row class="more-wrap">

        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
          <el-carousel indicator-position="none" :height="bannerHeight+'px'">
            <el-carousel-item v-for="imgData in imgData" :key="imgData.id">
              <img :src="imgData.src" alt="" />
            </el-carousel-item>
          </el-carousel>
        </el-col>

        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <p>团队风采</p>
          <img src="@/assets/icon/iconPark-double-right.svg" alt="" />
        </el-col>

      </el-row>

      <!-- <el-row class="more-wrap">
        <div>
          <p>成员介绍</p>
          <img src="@/assets/icon/iconPark-double-right.svg" alt="" />
        </div>
        <div>
          <el-carousel
            indicator-position="none"
            ref="carousel"
            :height="bannerHeight + 'px'"
            @change="carousel"
          >
            <el-carousel-item v-for="imgData in imgData" :key="imgData.id">
              <img :src="imgData.src" alt=""/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-row> -->
    </el-row>
  </div>
</template>

<script>
import dataMock from "../../static/mockData.json";

export default {
  name: "homepage",
  data() {
    return {
      msg: "主页",
      imgData: dataMock.carousel_data.zh_cn,
      bannerHeight: "",
      active: 0,
      introductOfLab: dataMock.introduction_of_lab.zh_cn,
      trendData: dataMock.trend_data,
      searchDirection: dataMock.search_direction,
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

    for (let i = 0; i < this.imgData.length; i++) {
      this.imgData[i].src = require("@/assets/" + this.imgData[i].src);
    }

    for (let i = 0; i < this.searchDirection.length; i++) {
      this.searchDirection[
        i
      ].logo_src = require("@/assets/search_direction_logo/" +
        this.searchDirection[i].logo_src);
    }
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  top: 1px;
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
  display: flex;
  flex-direction: row;
  align-items: center;
}

.img-link-wrap > a > img {
  height: 25px;
  width: 25px;
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
.home-content > p {
  font-size: 28px;
  text-indent: 2em;
  margin: 30px;
}

.lr-padding {
  padding: 0 40px 0 40px;
}
.lr-padding2 {
  padding: 0 80px 0 80px;
}

/* 最新动态 */
.trend-tit {
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  padding-top: 8px;
  padding-bottom: 8px;
  /* margin-top: 35px; */
}
.trend-tit .trend-tit-angel-right {
  height: 30px;
  width: 30px;
  position: relative;
  top: 3px;
  /* margin-top:6px; */
}
.research-trend-wrap {
  border: 1px solid rgba(187, 187, 187, 100);
  padding-top: 35px;
}
.trend-tit .trend-tit-time {
  display: inline;
  margin-right: 20px;
  font-size: 30px;
  color: rgb(16, 16, 16);
  font-family: SourceHanSansSC-bold;
}
.trend-tit .trend-tit-p {
  display: inline;
  font-size: 30px;
  font-family: SourceHanSansSC-regular;
  color: rgb(44, 97, 165);
}
.trend-tit .trend-tit-more {
  float: right;
  margin-top: 6px;
}
.trend-content > p {
  text-indent: 2em;
  margin-top: 10px;
  color: rgba(16, 16, 16, 100);
  font-size: 28px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}

.trend-paper-link {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 134px;
  height: 50px;
  border-radius: 20px 20px 20px 20px;
  color: rgba(24, 93, 166, 100);
  border: 1px solid rgba(24, 93, 166, 100);
  margin: 15px 15px 25px 15px;
}

.trend-paper-link > p {
  color: rgba(24, 93, 166, 100);
  font-size: 28px;
  margin-right: 5px;
}

.border-top {
  border-top: 1px solid rgba(187, 187, 187, 100);
}

.backcolor-blue {
  padding-top: 70px;
  padding-bottom: 30px;
  background-color: rgb(204, 225, 249);
}
.card {
  max-width: 527px;
  /* width: 527px; */
  height: 339px;
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  box-shadow: 0px 0px 10px 5px rgba(230, 222, 222, 0.4);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.card-wrap {
  margin-bottom: 40px;
}
.card-logo {
  width: 120px;
  height: 120px;
}
.card-tit1 {
  font-size: 32px;
}
.card-tit2 {
  font-size: 20px;
  text-indent: 2em;
  text-align: left;
}
.more-wrap{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>