<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <el-row class="cover">

      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="top">
          <el-row class="centered">
            <el-col class="text-left" :xs="18" :sm="18" :md="18" :lg="18" :xl="18" >
              <p>北京交通大学计算机与信息技术学院</p>
            </el-col>
            <el-col class="text-right" :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
              <p>English</p>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <router-link to="/">首页</router-link>
        <router-link to="/research">科研动态</router-link>
        <router-link to="/members">成员介绍</router-link>
        <router-link to="/papers">论文列表</router-link>
        <router-link to="/team">团队风采</router-link>
      </el-col>
      
    </el-row>

    <el-row class="centered">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="border">
          <router-view />
        </div>
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

.text-right{
  text-align: right;
}
.text-left{
  text-align: left;
}

.centered {
  max-width: 1170px;
  margin: 0 auto;
}
.border {
  border: 1px solid black;
}
</style>
