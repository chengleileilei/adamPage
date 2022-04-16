<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <el-row class="cover">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="top">
          <el-row class="centered">
            <el-col
              class="text-left"
              :xs="18"
              :sm="18"
              :md="18"
              :lg="18"
              :xl="18"
            >
              <p>北京交通大学计算机与信息技术学院</p>
            </el-col>
            <el-col class="text-right" :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
              <p>English</p>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="border">
        <el-row class="centered border top2">
          <!-- <el-col class="top2-l" :xs="24" :sm="24" :md="8" :lg="7" :xl="7">
            <img src=".\assets\bule.png" alt="" />
            <div class="vertical-line"></div>
            <img src=".\assets\v2_r8ry8d.jpg" alt="" />
          </el-col>

          <el-col class="top2-l" :xs="24" :sm="24" :md="16" :lg="8" :xl="8">
            <p>应用数据挖掘与机器学习实验室</p>
          </el-col> -->
          <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15">
            <el-row>
              <el-col
                class="top2-l"
                :xs="24"
                :sm="24"
                :md="10"
                :lg="10"
                :xl="10"
              >
                <img src=".\assets\bule.png" alt="" />
                <div class="vertical-line"></div>
                <img src=".\assets\v2_r8ry8d.jpg" alt="" />
              </el-col>
              <el-col
                class="top2-l"
                :xs="24"
                :sm="24"
                :md="14"
                :lg="14"
                :xl="14"
              >
                <p>应用数据挖掘与机器学习实验室</p>
              </el-col>
            </el-row>
          </el-col>

          <el-col class="top2-r" :xs="24" :sm="24" :md="24" :lg="9" :xl="9">
            <router-link active-class="active" to="/home">首页</router-link>
            <router-link active-class="active" to="/research"
              >科研动态</router-link
            >
            <router-link active-class="active" to="/members"
              >成员介绍</router-link
            >
            <router-link active-class="active" to="/papers"
              >论文列表</router-link
            >
            <router-link active-class="active" to="/team">团队风采</router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="border">
          <router-view />
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="footer-wrap">
        <el-row class="centered footer">
          <el-col :xs="24" :sm="24" :md="16" :lg="14" :xl="14" class="footer-l">
            <p>
              地址：北京市海淀区西直门外上园村3号 计算机与信息技术学院九教北5楼
            </p>
            <p>电话：XXXXXXX</p>
            <p>邮箱：XXXXXX@bjtu.edu.cn</p>
            <br />
            <a href="https://www.bjtu.edu.cn/"
              ><p class="small-p">
                友情链接：北京交通大学计算机与信息技术学院
              </p></a
            >
          </el-col>

          <el-col :xs="24" :sm="24" :md="8" :lg="10" :xl="10" class="footer-r">
            <img src=".\assets\公众号二维码.jpeg" alt="" />
            <p>公众号：<br />ADaM应用数据挖掘和机器学习</p>
          </el-col>

          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="footer-b">
            <p>
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
  name: "App",
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.top {
  background-color: #101010;
}
.top p {
  color: white;
  line-height: 61px;
}

.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}

.centered {
  max-width: 1440px;
  margin: 0 auto;
}
.border {
  border: 1px solid black;
}

.top2 {
  /* max-height: 150px; */
  min-height: 150px;
}

.top2-l {
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.top2-l img {
  height: 50px;
  margin: 10px;
}
.top2-l p {
  color: rgba(36, 64, 96, 100);
  font-size: 30px;
  font-weight: 600;
  font-family: Times New Roman-bold;
}
.top2-l .vertical-line {
  height: 70px;
  border: 1px solid rgba(187, 187, 187, 100);
}

.top2-r {
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.top2-r a {
  text-decoration: none;
  font-size: 21px;
  /* font-family: 'SourceHanSansSC-bold'; */
}
.top2-r a:hover{
    color: rgba(56, 148, 255, 100);

}

.active {
  color: rgba(56, 148, 255, 100);
}

@media screen and (max-width: 1200px) {
  .top2-r {
    height: 60px;
  }
}
@media screen and (max-width: 992px) {
  .top2-l {
    height: 80px;
  }
}

.footer-wrap {
  background-color: rgba(45, 45, 45, 100);
}
.footer-wrap p {
  color: rgba(255, 255, 255, 100);
  font-size: 20px;
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
}
</style>
