<template>
  <div class="register-form">
    <h2>注册</h2>
    <!-- 登录注册表单 -->
    <div class="form-warp">
      <div class="form-title">邮箱名</div>
      <input v-model="username" placeholder="邮箱" class="input-block"/>
      <div class="form-title">密码</div>
      <input v-model="password" type="password" placeholder="密码" class="input-block"/>
      <div class="form-title">确认密码</div>
      <input v-model="password" type="password" placeholder="密码" class="input-block"/>
      <div class="form-title">验证码</div>
      <div class="line-block">
        <input v-model="password" type="number" placeholder="" class="input-block"/>
        <div class="get-code-btn">获取验证码</div>
      </div>
      

    </div>
    <div class="submit-btn">注册</div>
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
.register-form {
  height: 600px;
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
  .line-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .get-code-btn {
      width: 120px;
      padding: 10px;
      box-sizing: border-box;
      background: #d4d4d4;
      border-radius: 10px;
      text-align: center;
    }
  }


}

</style>