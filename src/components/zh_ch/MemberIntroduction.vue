<template>
  <div>
    <el-row class="centered lr-padding">
      <el-col class="first-title-wrap">
        <p>成员介绍</p>
        <div></div>
      </el-col>
    </el-row>

    <el-row class="centered lr-padding">
      <div class="role-wrap"><p>教师</p></div>

      <el-row
        v-for="(supervisor, index) in supervisors"
        :key="index"
        :gutter="30"
        class="teacher-wrap"
      >
        <el-col :xs="24" :sm="5" :md="5" :lg="5" :xl="5" class="portrait-wrap"
          ><img :src="supervisor.img_src" alt=""
        /></el-col>

        <el-col :xs="24" :sm="19" :md="19" :lg="19" :xl="19">
          <div class="name-wrap">
            <p>{{ supervisor.name.zh_cn }}</p>
            <div class="personal-page-wrap">
              <a :href="supervisor.link">
                <p>个人主页</p>
                <img src="@/assets/icon/iconPark-double-right.svg" alt="" />
              </a>
            </div>
          </div>
          <p class="introduction">{{ supervisor.introduction.zh_cn }}</p>
        </el-col>
      </el-row>
    </el-row>

    <el-row class="centered lr-padding">
      <div class="role-wrap"><p>博士生</p></div>
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
      <div class="role-wrap"><p>硕士生</p></div>
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
      <div class="role-wrap"><p>本科生</p></div>
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
      <div class="role-wrap"><p>毕业生</p></div>
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
import dataMock from "@/assets/data/mockData.json";

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
.role-wrap {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
}
.role-wrap p {
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  background-color: rgba(56, 148, 255, 100);
  color: rgba(255, 255, 255, 100);
  font-family: Roboto;
  border: 1px solid rgba(56, 148, 255, 100);
  font-size: 30px;
}

.teacher-wrap {
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
.portrait-wrap img {
  max-width: 300px;
  width: 100%;
}

.name-wrap {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.name-wrap > p {
  color: rgba(24, 93, 166, 100);
  font-size: 28px;
  font-family: SourceHanSansSC-medium;
  margin-right: 5%;
}
.personal-page-wrap {
  padding: 3px 5px 3px 5px;
  display: flex;
  border-radius: 5px;
  font-family: Roboto;
  border: 1px solid rgba(56, 148, 255, 100);
}
.personal-page-wrap a {
  color: rgba(56, 148, 255, 100);
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.introduction {
  opacity: 0.81;
  color: rgba(16, 16, 16, 0.76);
  font-size: 20px;
  text-align: left;
  text-indent: 2em;
  font-family: SourceHanSansSC-medium;
}
table {
  margin: 0 auto;
  width: 98%;
  border-collapse: collapse;
  border: 1px solid rgba(202, 202, 202, 0.486);
  margin-bottom: 30px;
  text-align: center;
}
table td {
  border: 1px solid rgba(202, 202, 202, 0.486);
  font-size: 22px;
  font-family: Roboto;
  padding: 10px;
}
table th {
  font-size: 24px;
  font-family: Microsoft Yahei;
  background-color: rgba(202, 202, 202, 0.486);
  border: 1px solid rgba(202, 202, 202, 0.486);
  padding: 10px;
}
</style>