<!-- src/components/LoginModal.vue -->
<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <h2>登录/注册</h2>
      <!-- 登录注册表单 -->
      <form @submit.prevent="handleSubmit">
        <input v-model="username" placeholder="用户名" />
        <input v-model="password" type="password" placeholder="密码" />
        <button type="submit">提交</button>
      </form>
      <button @click="closeModal">关闭</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
}
</style>
