<template>
  <div class="login-form">
    <h2>登录</h2>
    <!-- 登录注册表单 -->
    <div class="form-warp">
      <div class="form-title">邮箱名</div>
      <input v-model="username" placeholder="邮箱" class="input-block"/>
      <div class="form-title">密码</div>
      <input v-model="password" type="password" placeholder="密码" class="input-block"/>
    </div>
    <div class="submit-btn">登录</div>
    <div class="forget-info">忘记密码？</div>
    <div class="close-btn" @click="closeModal">关闭</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}


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