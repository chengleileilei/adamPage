<template>
  <div>
    <el-row class="centered lr-padding">
      <el-col class="first-title-wrap">
        <p>科研动态</p>
        <div></div>
      </el-col>
    </el-row>

    <el-row
      class="backcolor-blue article-wrap"
      v-for="(articleData, index) in trendData"
      :key="index"
    >
      <el-row class="centered">
        <el-row class="article-title-wrap">
          <img src="@/assets/icon/md-date_range.svg" alt="" />
          <p class="article-title-time">
            [{{ articleData.time.y }}年{{ articleData.time.m }}月{{
              articleData.time.d
            }}日]
          </p>
          <p class="article-title-text">{{ articleData.title.zh_cn }}</p>
          <a :href="articleData.link" class="article-title-details-wrap">
            <img src="@/assets/icon/md-input.svg" alt="" />
            <p>详情</p></a
          >
        </el-row>

        <el-row class="lr-padding">
          <div v-for="(item, index) in articleData.article" :key="index">
            <div v-if="item.type == 'image'" class="article-content-image">
              <img :src="item.img_src" alt="" />
              <p>{{ item.img_title }}</p>
            </div>
            <p v-if="item.type == 'text'" class="article-content-text">
              {{ item.text }}
            </p>
          </div>
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import dataMock from "@/assets/data/mockData.json";

export default {
  name: "ResearchTrends",

  data() {
    return {
      trendData: dataMock.trend_data,
    };
  },

  mounted() {
    for (let i = 0; i < this.trendData.length; i++) {
      for (let j = 0; j < this.trendData[i].article.length; j++) {
        if (this.trendData[i].article[j].type == "image") {
          this.trendData[i].article[
            j
          ].img_src = require("@/assets/research_trend/" +
            this.trendData[i].article[j].img_src);
        }
      }
    }
  },
};
</script>

<style>
.article-wrap {
  margin-bottom: 80px;
}
.article-title-wrap {
  padding-left:5px ;
  padding-right: 5px;
  text-align: left;
  margin-bottom: 30px;
}
.article-title-wrap > * {
  display: inline;
}
.article-title-wrap img {
  width: 26px;
}
.article-title-time {
  color: rgba(16, 16, 16, 100);
  font-size: 28px;
  font-family: SourceHanSansSC-medium;
}
.article-title-text {
  margin-left: 5px;
  color: rgba(24, 93, 166, 100);
  font-size: 28px;
  font-family: SourceHanSansSC-medium;
}
.article-title-details-wrap {
  margin-right: 20px;
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.article-title-details-wrap p {
  color: rgba(24, 93, 166, 100);
  font-size: 28px;
  font-family: SourceHanSansSC-regular;
}

.article-content-text {
  text-indent: 2em;
  color: rgba(16, 16, 16, 100);
  font-size: 24px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
  margin-bottom: 20px;
}
.article-content-image {
  width: 100%;
  text-align: center;
}
.article-content-image img {
  max-width: 98%;
  max-height: 500px;
  margin-bottom: 20px;
}
.article-content-image p {
  color: rgba(24, 93, 166, 100);
  font-size: 24px;
  font-family: SourceHanSansSC-medium;
  margin-bottom: 20px;
}
</style>