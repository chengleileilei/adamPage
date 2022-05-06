<template>
  <div>
    <el-row class="centered lr-padding">
      <el-col class="first-title-wrap">
        <p>论文列表</p>
        <div></div>
      </el-col>
    </el-row>

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
        <el-col v-for="(paper, index) in papers.papers" :key="index"  class="paper-wrap lr-padding">
          <p>{{ paper.title }}</p>
          <p>{{ paper.author }}</p>
          <a :href="paper.link">[paper <img src="@/assets/icon/fas-fa-paper-plane.svg" alt="" /> ]</a>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import dataMock from "@/assets/data/mockData.json";

export default {
  name: "ListOfPapers",
  data() {
    return {
      paperList: dataMock.paper_list,
    };
  },
};
</script>

<style>
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


.paper-wrap{
  border-bottom: 1px solid rgb(184, 184, 184);
  padding-top: 10px;
  padding-bottom: 10px;
}
.paper-wrap>p{
  text-align: left;
  font-size: 24px;
  font-family: Roboto;
}
.paper-wrap>a{
  float: right;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
font-family: SourceHanSansSC-regular;
color: rgba(10, 83, 159, 1);
}
</style>