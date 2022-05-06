<template>
  <div>
    <el-row class="centered lr-padding">
      <el-col class="first-title-wrap">
        <p>团队风采</p>
        <div></div>
      </el-col>
    </el-row>

    <el-row
      class="backcolor-blue lr-padding activity-wrap"
      v-for="(activity, index) in teamActivities"
      :key="index"
    >
      <el-row class="centered">
        <el-row class="team-title-wrap">
          <img src="@/assets/icon/md-date_range.svg" alt="" />
          <p class="team-title-time">
            [{{ activity.time.y }}年{{ activity.time.m }}月]
          </p>
          <p class="team-title-text">{{ activity.title }}</p>
          <a :href="activity.link" class="team-title-details-wrap">
            <p>详情</p>
            <img src="@/assets/icon/iconPark-double-right.svg" alt="" />
          </a>
        </el-row>

        <el-row v-for="(item, index) in activity.content" :key="index">


          <el-row v-if="index % 2 == 0" class="item-wrap" :gutter="20">
            <el-col
              :xs="24"
              :sm="24"
              :md="8"
              :lg="8"
              :xl="8"
              class="team-text-wrap"
            >
              <p v-for="(p, index) in item.text" :key="index">
                {{ p }}
              </p>
            </el-col>
            <el-col
              :xs="24"
              :sm="24"
              :md="16"
              :lg="16"
              :xl="16"
              class="team-image-wrap"
            >
              <img :src="item.img_src" alt="" />
            </el-col>
          </el-row>



          <el-row v-if="index % 2 == 1" class="item-wrap" :gutter="20">
            <el-col
              :xs="24"
              :sm="24"
              :md="16"
              :lg="16"
              :xl="16"
              class="team-image-wrap"
            >
              <img :src="item.img_src" alt="" />
            </el-col>
            <el-col
              :xs="24"
              :sm="24"
              :md="8"
              :lg="8"
              :xl="8"
              class="team-text-wrap"
            >
              <p v-for="(p, index) in item.text" :key="index">
                {{ p }}
              </p></el-col
            >
          </el-row>
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import dataMock from "@/assets/data/mockData.json";

export default {
  name: "TeamStyle",
  data() {
    return {
      teamActivities: dataMock.team_activities,
    };
  },
  mounted() {
    for (let i = 0; i < this.teamActivities.length; i++) {
      for (let j = 0; j < this.teamActivities[i].content.length; j++) {
        this.teamActivities[i].content[
          j
        ].img_src = require("@/assets/team_activities/" +
          this.teamActivities[i].content[j].img_src);
      }
    }
  },
};
</script>

<style>
.activity-wrap{
  margin-bottom: 100px;
}
.team-title-wrap {
  text-align: left;
  margin-bottom: 30px;
}
.team-title-wrap > * {
  display: inline;
}
.team-title-wrap img {
  width: 28px;
  height: 28px;
}
.team-title-time {
  color: rgba(16, 16, 16, 100);
  font-size: 36px;
  font-family: SourceHanSansSC-medium;
}
.team-title-text {
  margin-left: 5px;
  color: rgba(24, 93, 166, 100);
  font-size: 36px;
  font-family: SourceHanSansSC-medium;
}
.team-title-details-wrap {
  margin-right: 20px;
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(24, 93, 166);
  border-radius: 5px;
  padding: 3px 10px 3px 10px;
  margin-top:5px;

}
.team-title-details-wrap p {
  color: rgba(24, 93, 166, 100);
  font-size: 25px;
  font-family: SourceHanSansSC-regular;
}

.team-text-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.team-text-wrap p {
  text-align: left;
  color: rgba(174, 174, 174, 100);
  font-size: 28px;
  text-indent: 2em;
  font-family: SourceHanSansSC-regular;
}

.team-image-wrap img {
  max-width: 100%;
  width: 100%;
}
.item-wrap {
      display: flex;
    flex-wrap: wrap;
  padding-bottom: 30px;
      align-items: center;
  /* display: flex;
  align-items: center;
  flex-direction: row; */
}
.item-wrap>*{
      display: flex;
    flex-direction: column;
}

@media screen and (max-width: 767px) {
.team-title-time {
  font-size: 24px;
}
.team-title-text {
  font-size: 24px;
}
.team-title-details-wrap p {
  font-size: 20px;
}
.team-text-wrap p {

  font-size: 20px;

}
}
</style>