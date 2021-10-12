<template>
  <div>
    <label v-for="(v, i) in navMenus" :key="i">
      <!--只有一级菜单-->
      <el-menu-item v-if="!v.children" :index="v.path" :route="v.path">
        <!--标题-->
        <span slot="title">{{ v.title }}</span>
      </el-menu-item>
      <!--有多级菜单-->
      <el-submenu v-if="v.children" :index="v.path" :route="v.path">
        <template slot="title">
          <span> {{ v.title }}</span>
        </template>
        <!--递归组件，把遍历的值传回子组件，完成递归调用-->
        <nav-menu :navMenus="v.children"></nav-menu>
      </el-submenu>
    </label>
  </div>
</template>

<script>
export default {
  name: "nav-menu",
  props: ["navMenus"],
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log(this.navMenus);
  },
};
</script>

<style></style>
