<template>
  <div class="login-form">
    <h2>登录</h2>
    <!-- 登录注册表单 -->
    <div class="form-warp">
      <div class="form-title">邮箱名</div>
      <input v-model="username" placeholder="邮箱" class="input-block" />
      <div class="form-title">密码</div>
      <input
        v-model="password"
        type="password"
        placeholder="密码"
        class="input-block"
      />
    </div>
    <div class="submit-btn" @click="goLogin">登录</div>
    <div class="forget-info">忘记密码？</div>
    <div class="close-btn" @click="closeModal">关闭</div>
  </div>
</template>

<script setup>
import { login } from "@/service/api/userService";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const emit = defineEmits(["closeModal"]);

const closeModal = () => {
  emit("closeModal");
};
let username = ref("");
let password = ref("");

const goLogin = async () => {
  if (username.value.length === 0 || password.value.length === 0) {
    alert("need username and password");
    return;
  }
  const res = await login({
    mail_address: username.value,
    password: password.value,
  });
  if (res.info.code === 1) {
    window.localStorage.setItem("token", res.info.sid);
    ElMessage({
      message: "登录成功",
      type: "success",
    });
    closeModal();
  } else {
    ElMessage.error("登录失败，请稍后重试");
  }
  console.log("%c Line:34 🥚 res", "color:#3f7cff", res);
};
</script>

<style scoped lang="scss">
.login-form {
  .form-warp {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .input-block {
    display: block;
    margin-bottom: 10px;
    height: 50px;
    border: none;
    outline: none;
    border-bottom: 1px solid #000000;
    font-size: 18px;
  }
  .submit-btn {
    margin: 20px auto;
    width: 90%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #222222;
    color: #ffffff;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
  }
  .forget-info {
    text-align: right;
    text-decoration-line: underline;
    cursor: pointer;
  }
  .close-btn {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #000000;
    border-radius: 10px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    cursor: pointer;
  }
}
</style>
