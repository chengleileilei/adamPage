<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <el-row class="cover">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="top-wrap">
          <el-row class="centered top">
            <el-col
              class="text-left"
              :xs="18"
              :sm="18"
              :md="18"
              :lg="18"
              :xl="18"
            >
              <img src="@/assets/icon/fas-fa-home.svg" alt="" />
              <p>bjtu</p>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
              <router-link to="/zhcn" class="text-right">
                <img src="@/assets/icon/fas-fa-sync-alt.svg" alt="" />
                <p>中文</p>
              </router-link>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <el-col class="top2-wrap" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-row class="centered top2">
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
                <img src="@/assets/bule.png" alt="" />
                <div class="vertical-line"></div>
                <img src="@/assets/v2_r8ry8d.jpg" alt="" />
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
            <router-link active-class="active" to="/zhcn/team">团队风采</router-link>
          </el-col>
        </el-row>
      </el-col>
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
              <img class="footer-logo" src="@/assets/icon/arcoDesign-location.svg" alt="" />
              地址：北京市海淀区西直门外上园村3号 计算机与信息技术学院九教北5楼
            </p>
            <p  class="with-logo-left">
              <img class="footer-logo" src="@/assets/icon/fas-fa-phone.svg" alt="" />
              电话：XXXXXXX
            </p>
            <p class="with-logo-left">
              <img class="footer-logo" src="@/assets/icon/arcoDesign-email.svg" alt="" />
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
              <img class="footer-logo" src="@/assets/icon/fas-fa-copyright.svg" alt="" />
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
  name: "English",
};
</script>

<style>

</style>
