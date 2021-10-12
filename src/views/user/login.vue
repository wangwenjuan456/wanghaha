<template>
  <div class="login">
    <div class="box">
      <div class="left">
        <img
          src="http://bw.gsruiying.com.cn/admin/view_admin/img/sw.e11bce53.jpg"
          alt=""
        />
      </div>
      <div class="right">
        <div class="right_top">
          <img
            src="http://bw.gsruiying.com.cn/admin/view_admin/img/logo.4d95a494.png"
            alt=""
          />
        </div>
        <div class="right_bottom">
          <!-- 表单 -->
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item prop="name">
              <el-input
                placeholder="请输入用户名"
                prefix-icon="el-icon-user"
                v-model="ruleForm.name"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="name">
              <el-input
                placeholder="请输入用户名"
                prefix-icon="el-icon-unlock"
                v-model="ruleForm.password"
                type="password"
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即创建</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginFn } from "../../api";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用戶名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密碼", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm.name);
          loginFn({
            account: this.ruleForm.name,
            pwd: this.ruleForm.password,
            imgcode: "",
          }).then((res) => {
            console.log(res);
            if (res.status == 200) {
              this.$router.push("/");
              let token = res.data.token;
              localStorage.setItem("token", token);
              // console.log();
              localStorage.setItem('list',JSON.stringify(res.data.menus))


              this.$message({
                message: "登录成功",
                type: "success",
              });
            }
          });
        } else {
          this.$message({
                message: "登录失败",
                type: "success",
              });
          return false;
        }
      });
    },
  },
};
</script>

<style>
body.html,
#app {
  width: 100;
  height: 100%;
}
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #000;
}
.box {
  position: fixed;
  width: 800px;
  height: 50%;
  left: 20%;
  top: 25%;
  background: #fff;
  display: flex;
}
.left {
  width: 50%;
  height: 100%;
  display: flex;
}
img {
  width: 100%;
  height: 100%;
}
.right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.right_top {
  width: 100%;
  height: 25%;
}
.right_bottom {
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
}
.form {
  width: 100%;
  height: 100%;
}
.el-button {
  width: 100%;
}
</style>
