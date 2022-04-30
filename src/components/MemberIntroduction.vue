<template>
  <div>
    <el-row class="centered lr-padding">
      <el-col class="first-title-wrap">
        <p>成员介绍</p>
        <div></div>
      </el-col>
    </el-row>

    <el-row class="centered lr-padding">
      <div><p>教师</p></div>

      <el-row v-for="(supervisor, index) in supervisors" :key="index">
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
          ><img :src="supervisor.img_src" alt=""
        /></el-col>

        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
          <div>
            <p>{{ supervisor.name.zh_cn }}</p>
            <div>
              <a :href="supervisor.link">
                <p>个人主页</p>
                <img src="@/assets/icon/iconPark-double-right.svg" alt="" />
              </a>
            </div>
          </div>
          <p>{{ supervisor.introduction.zh_cn }}</p>
        </el-col>
      </el-row>
    </el-row>

    <el-row class="centered lr-padding">
      <div><p>博士生</p></div>
      <table>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年级</th>
          <th>研究方向</th>
        </tr>
        <tr v-for="(doctoralStudent, index) in doctoralStudents" :key="index">
          <td>{{ doctoralStudent.name }}</td>
          <td>{{ doctoralStudent.sex }}</td>
          <td>{{ doctoralStudent.grade }}</td>
          <td>{{ doctoralStudent.rsearch_direction }}</td>
        </tr>
      </table>
    </el-row>

    <el-row class="centered lr-padding">
      <div><p>硕士生</p></div>
      <table>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年级</th>
          <th>研究方向</th>
        </tr>
        <tr v-for="(graduateStudent, index) in graduateStudents" :key="index">
          <td>{{ graduateStudent.name }}</td>
          <td>{{ graduateStudent.sex }}</td>
          <td>{{ graduateStudent.grade }}</td>
          <td>{{ graduateStudent.rsearch_direction }}</td>
        </tr>
      </table>
    </el-row>

    <el-row class="centered lr-padding">
      <div><p>本科生</p></div>
      <table>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年级</th>
        </tr>
        <tr
          v-for="(undergraduateStudent, index) in undergraduateStudents"
          :key="index"
        >
          <td>{{ undergraduateStudent.name }}</td>
          <td>{{ undergraduateStudent.sex }}</td>
          <td>{{ undergraduateStudent.grade }}</td>
        </tr>
      </table>
    </el-row>

    <el-row class="centered lr-padding">
      <div><p>毕业生</p></div>
      <table>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年级</th>
          <th>研究方向</th>
        </tr>
        <tr v-for="(graduatedStudent, index) in graduatedStudents" :key="index">
          <td>{{ graduatedStudent.name }}</td>
          <td>{{ graduatedStudent.sex }}</td>
          <td>{{ graduatedStudent.grade }}</td>
          <td>{{ graduatedStudent.rsearch_direction }}</td>
        </tr>
      </table>
    </el-row>
  </div>
</template>

<script>
import dataMock from "../../static/mockData.json";

export default {
  name: "MemberIntroduction",
  data() {
    return {
      supervisors: dataMock.supervisors,
      doctoralStudents: dataMock.doctoral_student,
      graduateStudents: dataMock.graduate_student,
      undergraduateStudents: dataMock.undergraduate_student,
      graduatedStudents: dataMock.graduated_student,
    };
  },

  mounted() {
    for (let i = 0; i < this.supervisors.length; i++) {
      this.supervisors[i].img_src = require("@/assets/members/" +
        this.supervisors[i].img_src);
    }
  },
};
</script>

<style>
</style>