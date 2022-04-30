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
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <p>{{ papers.time }}</p>
      </div>

      <el-row>
        <el-col v-for="(paper, index) in papers.papers" :key="index">
          <p>{{ paper.title }}</p>
          <p>{{ paper.author }}</p>
          <a :href="paper.link">[paper <img src="" alt="" /> ]</a>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import dataMock from "../../static/mockData.json";

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
</style>