<!-- src/components/LoginModal.vue -->
<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content" :class="containerClass">
      <div class="left-wrap">
        <div class="title">Welcome!</div>
        <div class="image"></div>
        <div class="bottom-tip">
          <div class="tips">{{ tipsInfo }}</div>
          <div class="register-btn" @click="changeForm">{{ btnInfo }}</div>
        </div>
      </div>    
      <div class="right-wrap">
        <LoginForm v-if="!isGoRegister" @closeModal="closeModal"/>
        <registerForm v-else @closeModal="closeModal"/>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import LoginForm from './loginForm.vue'
import registerForm from './registerForm.vue'

defineProps({
  isVisible: Boolean,
})
const username = ref('')
const password = ref('')


const handleSubmit = () => {
  // 登录注册逻辑
  console.log('用户名:', username.value)
  console.log('密码:', password.value)
  closeModal()
}

const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}

const isGoRegister = ref(false)
const changeForm = () => {
  isGoRegister.value = !isGoRegister.value
}

const tipsInfo = computed(() => {
  return isGoRegister.value ? '已有账号？' : '没有账号？'
})
const btnInfo = computed(() => {
  return isGoRegister.value ? '点击登录' : '点击注册'
})

const containerClass = computed(() => {
  return isGoRegister.value ? 'register-wrap' : 'login-wrap'
})

</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  width: 800px;
  min-height: 500px;
  text-align: center;
  display: flex;
  border-radius: 16px;

}
.register-wrap {
  // height: 800px;
}

.login-wrap {

}

.left-wrap {
  width: 50%; 
  background: rgb(235, 230, 216);  
  border-radius: inherit;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  .title {
    height: 15%;
    text-align: left;
    font-weight: 800;
    font-size: 24px;
  }
  .image {
    width: 300px;
    height: 300px;
    margin: 0px auto;
    background: url('../../public/37011728819417_.pic.jpg') no-repeat;
    background-size: 100% 100%;
    margin-bottom: 45px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .bottom-tip {
    display: flex;
    position: absolute;
    bottom: 30px;
    .register-btn {
      font-weight: 800;
      text-decoration-line: underline;
      cursor: pointer;
    }
    .register-btn:hover {
      color: #3b3bf0;
    }
  }
}

.right-wrap {
  padding: 30px;
  width: 50%;
  box-sizing: border-box;
  position: relative;
}

</style>
