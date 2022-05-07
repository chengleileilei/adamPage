<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <el-row>
      <div class="top-wrap">
        <el-row class="centered top lr-padding3">
          <div>
            <img class="house-img" src="@/assets/icon/fas-fa-home.svg" alt="" />
            <p>北京交通大学计算机与信息技术学院</p>
          </div>
          <router-link to="/english" class="text-right">
            <img src="@/assets/icon/fas-fa-sync-alt.svg" alt="" />
            <p>English</p>
          </router-link>
        </el-row>
      </div>
    </el-row>

    <!-- <el-row class="top2-wrap">
      <el-row class="centered top2">
        <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15">
          <el-row>
            <el-col class="top2-l" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
              <img src="@/assets/bule.png" alt="" />
              <div class="vertical-line"></div>
              <img src="@/assets/v2_r8ry8d.jpg" alt="" />
            </el-col>
            <el-col class="top2-l" :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
              <p>应用数据挖掘与机器学习实验室</p>
            </el-col>
          </el-row>
        </el-col>

        <el-col class="top2-r" :xs="24" :sm="24" :md="24" :lg="9" :xl="9">
          <router-link active-class="active" to="/zhcn/home">首页</router-link>
          <router-link active-class="active" to="/zhcn/research"
            >科研动态</router-link
          >
          <router-link active-class="active" to="/zhcn/members"
            >成员介绍</router-link
          >
          <router-link active-class="active" to="/zhcn/papers"
            >论文列表</router-link
          >
          <router-link active-class="active" to="/zhcn/team"
            >团队风采</router-link
          >
        </el-col>
      </el-row>
    </el-row> -->

    <el-row class="nav-wrap">
      <el-row class="centered nav">
        <div class="nav-logo-wrap">
          <img src="@/assets/bule.png" alt="" />
          <div class="vertical-line"></div>
          <img src="@/assets/v2_r8ry8d.jpg" alt="" />
        </div>
        <div class="nav-title-wrap">
          <p class="nav-title">应用数据挖掘与机器学习实验室</p>
          <div class="nav-button" v-if="buttonShow" @click="buttonClick">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="nav-link-wrap" v-show="linkShow" @click="linkClick">
          <router-link active-class="active" to="/zhcn/home">首页</router-link>
          <router-link active-class="active" to="/zhcn/research"
            >科研动态</router-link
          >
          <router-link active-class="active" to="/zhcn/members"
            >成员介绍</router-link
          >
          <router-link active-class="active" to="/zhcn/papers"
            >论文列表</router-link
          >
          <router-link active-class="active" to="/zhcn/team"
            >团队风采</router-link
          >
        </div>
      </el-row>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div>
          <router-view />
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="footer-wrap">
        <el-row class="centered footer">
          <el-col :xs="24" :sm="24" :md="16" :lg="14" :xl="14" class="footer-l">
            <p class="with-logo-left">
              <img
                class="footer-logo"
                src="@/assets/icon/arcoDesign-location.svg"
                alt=""
              />
              地址：北京市海淀区西直门外上园村3号 计算机与信息技术学院九教北5楼
            </p>
            <p class="with-logo-left">
              <img
                class="footer-logo"
                src="@/assets/icon/fas-fa-phone.svg"
                alt=""
              />
              电话：XXXXXXX
            </p>
            <p class="with-logo-left">
              <img
                class="footer-logo"
                src="@/assets/icon/arcoDesign-email.svg"
                alt=""
              />
              邮箱：XXXXXX@bjtu.edu.cn
            </p>
            <br />
            <a href="https://www.bjtu.edu.cn/"
              ><p class="small-p">
                友情链接：北京交通大学计算机与信息技术学院
              </p></a
            >
          </el-col>

          <el-col :xs="24" :sm="24" :md="8" :lg="10" :xl="10" class="footer-r">
            <img src="@/assets/公众号二维码.jpeg" alt="" />
            <p>公众号：<br />ADaM应用数据挖掘和机器学习</p>
          </el-col>

          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="footer-b">
            <p class="with-logo-center">
              <img
                class="footer-logo"
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
export default {
  name: "Chinese",
  data() {
    return {
      buttonShow: true,
      linkShow: false,
    };
  },
  methods: {
    buttonClick() {
      this.linkShow = !this.linkShow;
      console.log("buttonClick was called! status is : ", this.linkShow);
    },
    linkClick(){
      if (this.screenWidth2 <= 850){
        this.linkShow = false
      }
    }
  },
  mounted() {
    this.screenWidth2 = window.innerWidth;
    if (this.screenWidth2 <= 850) {
      this.linkShow = false;
    } else {
      this.buttonShow = false;
      this.linkShow = true;
    }
    window.addEventListener("resize", () => {
      // 窗口尺寸改变时触发事件
      this.screenWidth2 = window.innerWidth;

      if (this.screenWidth2 <= 850) {
        this.buttonShow = true;
        this.linkShow = false;
      } else {
        this.buttonShow = false;
        this.linkShow = true;
      }
    });
  },
};
</script>

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
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

.top-wrap {
  background-color: #101010;
}
.top-wrap p {
  color: white;
  margin: 15px 10px 15px 10px;
}
.top {
}
.top > div {
  display: flex;
  flex-direction: row;
  float: left;
}

.text-right {
  display: flex;
  flex-direction: row;
  float: right;
}
.text-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.centered {
  max-width: 1200px;
  margin: 0 auto;
}
.border {
  border: 1px solid black;
}
.nav-wrap {
  box-shadow: rgb(187, 187, 187) 0px 1px 0px;
  margin-bottom: 2px;
}

.active {
  color: rgba(56, 148, 255, 100);
}
.nav > * {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav-logo-wrap {
  height: 80px;

  display: flex;
  float: left;
}
.nav-logo-wrap img {
  height: 50px;
  margin: 5px;
}
.nav-title {
  float: left;
  color: rgba(36, 64, 96, 100);
  font-size: 30px;
  margin-left: 10px;

  font-weight: 600;
  font-family: Times New Roman-bold;
}
.nav-title-wrap {
  height: 80px;
  float: left;
  justify-content: space-between;
}

.nav-link-wrap {
  height: 80px;

  justify-content: space-evenly;
}
.nav-link-wrap a {
  text-decoration: none;
  font-size: 20px;
  font-family: "SourceHanSansSC-bold";
}

.nav-button {
  cursor: pointer;
  height: 30px;
  width: 40px;
  margin-right: 10px;
  /* border: 2px solid rgb(78, 78, 78); */
  background-color: rgb(255, 255, 255);
  border-radius: 10%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  float: right;
}
.nav-button span {
  height: 5px;
  width: 60%;
  background-color: black;
}

.footer-wrap {
  background-color: rgba(45, 45, 45, 100);
}
.footer-wrap p {
  color: rgba(255, 255, 255, 100);
  font-size: 18px;
}
.footer {
  min-height: 257px;
  padding: 10px 20px 0px 20px;
}

.footer-l {
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.footer-l .small-p {
  font-size: 18px;
}

.footer-l .with-logo-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.footer-r {
  margin-top: 40px;

  display: flex;
  align-items: center;
}
.footer-r img {
  width: 150px;
  margin-right: 35px;
}
.footer-r p {
  text-align: left;
}

.footer-b {
  margin-top: 30px;
  padding-bottom: 10px;
}
.footer-b p {
  color: rgba(189, 192, 193, 100);
  font-size: 16px;
  font-family: SourceHanSansSC-regular;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.footer-logo {
  margin-right: 10px;
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 1200px) {
  .nav-logo-wrap {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .nav-title {
    font-size: 20px;
    font-weight: 600;
    font-family: Times New Roman-bold;
  }
  .nav-title-wrap {
    width: 100%;
    height: 50px;
  }

  .nav-link-wrap {
    height: auto;
    flex-direction: column;
    width: 100%;
  }
  .house-img {
    display: none;
  }
  .top-wrap p {
    color: white;
    margin: 15px 2px 15px 2px;
  }
}

@media screen and (max-width: 500px) {
}
</style>
