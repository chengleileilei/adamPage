<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

.backcolor-blue {
  padding-top: 70px;
  padding-bottom: 30px;
  background-color: rgb(204, 225, 249);
}


.first-title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 35px;
  margin-top: 40px;
}
.first-title-wrap p {
  color: rgb(62, 121, 183);
  font-size: 50px;
  font-family: SourceHanSansSC-regular;
}
.first-title-wrap div {
  margin-top: 25px;
  width: 171px;
  height: 6px;
  opacity: 0.43;
  background-color: rgba(134, 179, 227, 100);
  color: rgba(24, 93, 166, 100);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.lr-padding {
  padding-left: 40px;
  padding-right: 40px;
}
.lr-padding2 {
  padding-left: 80px;
  padding-right: 80px;
}
.lr-padding3 {
  padding-left: 30px;
  padding-right: 30px;
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
  .lr-padding {
    padding-left: 10px;
    padding-right: 10px;
  }
  .lr-padding2 {
    padding-left: 15px;
    padding-right: 15px;
  }
  .lr-padding3 {
    padding-left: 2px;
    padding-right: 2px;
  }
  .top-wrap p {
    margin: 15px 3px 15px 3px;
  }
  .backcolor-blue {
    padding-top: 40px;
    padding-bottom: 10px;
  }
}
</style>
