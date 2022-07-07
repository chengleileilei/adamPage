<template>
  <div id="app">
    <el-row class="lr-padding en-top-wrap">
      <div class="en-top centered">
        <div class="en-logo-wrap">
          <img class="en-logo" src="@/assets/bjtu-logo.png" alt="" />
        </div>
        <div>
          <p class="content-1">
            Beijing Jiaotong University School of Computer and Information
            Technology
          </p>
          <p>
            <span class="content-2">ADaM Lab </span>
            <span class="content-3"
              >for Applied data mining and machine learning
            </span>
          </p>
        </div>
        <router-link to="/zhcn" class="text-right">
          <img src="@/assets/icon/fas-fa-sync-alt.svg" alt="" />
          <p>中文</p>
        </router-link>
      </div>
    </el-row>

    <el-row class="en-carousel-bg en-carousel-top">
      <el-carousel
        indicator-position="outside"
        ref="carousel"
        :height="bannerHeight + 'px'"
        @change="carousel"
      >
        <el-carousel-item v-for="imgData in imgData" :key="imgData.id">
          <img :src="imgData.src" alt="" class="en-carousel-img" />
        </el-carousel-item>
      </el-carousel>
    </el-row>

    <el-row class="centered">
      <p class="en-first-title">Introduction to Lab</p>
      <div class="en-content-wrap lr-padding">
        <p
          v-for="(text, index) in introductOfLab"
          :key="index"
          class="en-content-text"
        >
          {{ text }}
        </p>
      </div>
    </el-row>

    <el-row class="centered">
      <p class="en-first-title">Supervisors</p>
      <el-row
        v-for="(supervisor, index) in supervisors"
        :key="index"
        :gutter="30"
        class="en-teacher-wrap lr-padding"
      >
        <el-col
          :xs="24"
          :sm="5"
          :md="5"
          :lg="5"
          :xl="5"
          class="en-portrait-wrap"
          ><img :src="supervisor.img_src" alt=""
        /></el-col>

        <el-col :xs="24" :sm="19" :md="19" :lg="19" :xl="19">
          <div class="en-name-wrap">
            <p>{{ supervisor.name.en }}</p>
            <div class="en-personal-page-wrap">
              <a :href="supervisor.link">
                <p>Personal homepage</p>
                <img src="@/assets/icon/iconPark-double-right.svg" alt="" />
              </a>
            </div>
          </div>
          <p class="en-introduction">{{ supervisor.introduction.en }}</p>
        </el-col>
      </el-row>
    </el-row>

    <el-row class="centered">
      <p class="en-first-title">Recent Events</p>
      <el-row
        v-for="(recentEvent, index) in recentEvents"
        :key="index"
        class="event-wrap lr-padding"
      >
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="4"
          :xl="4"
          class="event-time-wrap"
        >
          <div class="blue-circle"></div>
          <p>
            [{{ recentEvent.time.y }}/{{ recentEvent.time.m }}/{{
              recentEvent.time.d
            }}]
          </p>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="20"
          :xl="20"
          class="event-title-wrap"
        >
          <p>{{ recentEvent.title.en }}</p>
          <a :href="recentEvent.link" v-if="recentEvent.link != ''"
            >[paper<img src="@/assets/icon/black-plane.svg" alt="" />]</a
          >
          
        </el-col>
      </el-row>
    </el-row>

    <el-row class="centered">
      <p class="en-first-title">Research Field</p>
      <el-row :gutter="20" class="centered lr-padding2">
        <el-col
          :xs="12"
          :sm="8"
          :md="8"
          :lg="8"
          :xl="8"
          v-for="(card, index) in searchDirection"
          :key="index"
          class="en-card-wrap"
        >
          <div class="en-card">
            <p class="en-card-tit1">{{ card.title.en }}</p>
          </div>
        </el-col>
      </el-row>
    </el-row>

    <el-row class="centered">
      <p class="en-first-title">Paper List</p>
      <el-row
        class="centered lr-padding"
        v-for="(papers, index) in paperList"
        :key="index"
      >
        <div class="paper-time-wrap lr-padding">
          <img src="@/assets/icon/antOutline-calendar.svg" alt="" />
          <div class="circle">
            <img src="@/assets/icon/antFill-file-text.svg" alt="" />
          </div>
          <p>{{ papers.time }}</p>
        </div>

        <el-row>
          <el-col
            v-for="(paper, index) in papers.papers"
            :key="index"
            class="paper-wrap lr-padding"
          >
            <p>{{ paper.title }}</p>
            <p>{{ paper.author }}</p>
            <a :href="paper.link" v-if="paper.link != ''"
              >[paper
              <img src="@/assets/icon/fas-fa-paper-plane.svg" alt="" /> ]</a
            >
            <a
            :href="'../static/' + paper.introduction_link"
            v-if="paper.introduction_link != ''"
            >[introduction
            <img src="@/assets/icon/fas-fa-paper-plane.svg" alt="" /> ]</a
          >
          </el-col>
        </el-row>
      </el-row>
    </el-row>

    <el-row>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        class="en-footer-wrap"
      >
        <el-row class="centered en-footer">
          <el-col
            :xs="24"
            :sm="24"
            :md="16"
            :lg="14"
            :xl="14"
            class="en-footer-l"
          >
            <p class="with-logo-left">
              <img
                class="en-footer-logo"
                src="@/assets/icon/fas-fa-phone.svg"
                alt=""
              />
              Phone：XXXXXXX
            </p>
            <p class="with-logo-left">
              <img
                class="en-footer-logo"
                src="@/assets/icon/arcoDesign-email.svg"
                alt=""
              />
              Email：XXXXXX@bjtu.edu.cn
            </p>
            <br />
          </el-col>

          <el-col
            :xs="24"
            :sm="24"
            :md="8"
            :lg="10"
            :xl="10"
            class="en-footer-r"
          >
            <a href="https://www.bjtu.edu.cn/"
              ><p class="small-p">
                Other Link：Beijing Jiaotong University School of Computer and
                Information Technolo
              </p></a
            >
          </el-col>

          <el-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="24"
            :xl="24"
            class="en-footer-b"
          >
            <p class="with-logo-center">
              <img
                class="en-en-footer-logo"
                src="@/assets/icon/fas-fa-copyright.svg"
                alt=""
              />
              ADaM Lab for School of Computer and Information Technology,
              Beijing Jiaotong University
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dataMock from "@/assets/data/mockData.json";

export default {
  name: "homepage",
  data() {
    return {
      imgData: dataMock.carousel_data.en,
      bannerHeight: "",
      bannerHeight2: "",
      active: 0,
      introductOfLab: dataMock.introduction_of_lab.en,
      supervisors: dataMock.supervisors,
      recentEvents: dataMock.trend_data,
      searchDirection: dataMock.search_direction,
      paperList: dataMock.paper_list,
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

    for (let i = 0; i < this.supervisors.length; i++) {
      this.supervisors[i].img_src = require("@/assets/members/" +
        this.supervisors[i].img_src);
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
    background: rgba(151, 151, 151, 0.938);
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


<style>
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
}
a {
  color: rgba(16, 16, 16, 100);
  text-decoration: none;
}

.en-top-wrap {
  background-color: rgba(10, 83, 159, 1);
}

.en-top-wrap p {
  color: white;
  margin: 15px 10px 15px 10px;
}

.en-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.en-logo {
  height: 120px;
}
.text-right {
  display: flex;
  flex-direction: row;
}

.content-1 {
  padding: 0px 0 10px 0;
  border-bottom: 1px solid white;
}
.content-2 {
  font-size: 30px;
}

.centered {
  max-width: 1200px;
  margin: 0 auto;
}
.border {
  border: 1px solid black;
}

.active {
  color: rgba(56, 148, 255, 100);
}

/* 轮播图 */
.en-carousel-img {
  height: 100%;
  /* width: inherit; */
}

.en-carousel-bg {
  background-color: rgba(10, 83, 159, 1);
}
/* 轮播图结束 */

.en-first-title {
  color: rgba(10, 83, 159, 100);
  font-size: 40px;
  text-align: left;
  font-family: HarmonyOS_Sans_Condensed-black;
  padding-left: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
}
.en-content-text {
  color: rgba(16, 16, 16, 1);
  text-align: left;
  font-size: 20px;
  text-indent: 2em;
  font-family: HarmonyOS_Sans_Condensed-medium;
}
.en-content-wrap {
  margin: 20px 10px 20px 10px;
}

/* teacher */

.en-teacher-wrap {
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
.en-portrait-wrap img {
  max-width: 300px;
  width: 100%;
}

.en-name-wrap {
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.en-name-wrap > p {
  color: rgba(16, 16, 16, 1);
  font-size: 28px;
  font-family: SourceHanSansSC-medium;
  margin-right: 5%;
}
.en-personal-page-wrap {
  padding: 3px 5px 3px 5px;
  display: flex;
  border-radius: 5px;
  font-family: Roboto;
  /* border: 1px solid rgba(56, 148, 255, 100); */
}
.en-personal-page-wrap a {
  color: rgba(56, 148, 255, 100);
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.en-introduction {
  opacity: 0.81;
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: left;
  text-indent: 2em;
  font-family: SourceHanSansSC-medium;
}

/* recent Event */
.event-wrap {
  font-size: 20px;
}
.blue-circle {
  margin-top: 6px;
  margin-right: 15px;

  border-radius: 50%;
  height: 15px;
  width: 15px;
  background-color: rgba(10, 83, 159, 1);
}
.event-time-wrap {
  /* min-width: 150px; */
  display: flex;
  flex-direction: row;
  /* text-align: left; */
}
.event-title-wrap > p {
  color: rgba(10, 83, 159, 1);
  font-family: SourceHanSansSC-regular;
}
.event-title-wrap > a {
  float: right;
  color: rgba(16, 16, 16, 1);
  font-family: SourceHanSansSC-regular;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.event-title-wrap > a > img {
  max-height: 20px;
}

/* research direction */

.en-card {
  max-width: 400px;
  height: 200px;
  margin: 0 auto;

  border: 1px solid rgba(10, 83, 159, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.en-card-wrap {
  margin-bottom: 20px;
}
.en-card-logo {
  width: 120px;
  height: 120px;
}
.en-card-tit1 {
  font-size: 24px;
  margin: 10px;
  text-align: center;

  color: rgba(10, 83, 159, 1);

  font-family: Roboto;
}
/* paper list */

.paper-time-wrap {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(250, 250, 250, 100);
  text-align: left;
  font-family: Roboto;
  box-shadow: rgb(187 187 187) 0px 1px 0px;
}
.paper-time-wrap > * {
  margin-right: 1.5%;
}
.paper-time-wrap > img {
  max-width: 30px;
  transform: rotate(-90deg);
}
.paper-time-wrap > p {
  color: rgba(16, 16, 16, 1);
  font-size: 26px;
  font-family: SourceHanSansSC-regular;
}
.circle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid rgba(36, 64, 96, 1);
}
.circle img {
  height: 70%;
}

.paper-wrap {
  border-bottom: 1px solid rgb(184, 184, 184);
  padding-top: 10px;
  padding-bottom: 10px;
}
.paper-wrap > p {
  text-align: left;
  font-size: 22px;
  font-family: Roboto;
}
.paper-wrap > a {
  margin-left: 10px;
  float: right;
  font-size: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: SourceHanSansSC-regular;
  color: rgba(10, 83, 159, 1);
}
/* 页脚 */
.en-footer-wrap {
  background-color: rgba(10, 83, 159, 1);
}
.en-footer-wrap p {
  color: rgba(255, 255, 255, 100);
  font-size: 18px;
}
.en-footer {
  /* min-height: 257px; */
  padding: 10px 20px 0px 20px;
}

.en-footer-l {
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.en-footer-l .small-p {
  font-size: 18px;
}

.en-footer-l .with-logo-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.en-footer-r {
  margin-top: 40px;

  display: flex;
  align-items: center;
}
.en-footer-r img {
  width: 150px;
  margin-right: 35px;
}
.en-footer-r p {
  text-align: left;
}

.en-footer-b {
  margin-top: 30px;
  padding-bottom: 10px;
}
.en-footer-b p {
  color: rgba(189, 192, 193, 100);
  font-size: 16px;
  font-family: SourceHanSansSC-regular;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.en-footer-logo {
  margin-right: 10px;
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 767px) {
  .en-logo-wrap {
    display: none;
  }
}
</style>
