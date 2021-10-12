<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="asiode_top">
          <img
            src="http://bw.gsruiying.com.cn/admin/view_admin/img/logo.4d95a494.png"
            alt=""
          />
        </div>
        <div class="asiode_botton">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#191a23"
            text-color="#fff"
            :unique-opened="true"
          
          >
            <HomeLeft :navMenus="data" />
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeLeft from "../components/Apply.vue";
export default {
  components: {
    HomeLeft,
  },
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("list"));
    console.log(this.data);
  },
};
</script>

<style>
body.html,
#app {
  width: 100;
  height: 100%;
}
::-webkit-scrollbar{
  display:none;
}
.home {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-menu {
  width: 100%;
  height: 100%;
}
.el-aside {
  background-color: #191a23;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  line-height: 100px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.asiode_top {
  width: 100%;
  height: 8%;
}
img {
  width: 100%;
  height: 100%;
}
.asiode_botton {
  width: 100%;
  height: 92%;
}
</style>
