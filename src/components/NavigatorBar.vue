<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item class="menu-item" v-for="(item, index) in navigatorBarArr" :key="index" :index="index+''">{{item.title }}</el-menu-item>
    <div class="login-btn" @click="openLoginModal">登录/注册</div>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()


const navigatorBarArr = [
  {
    title: '首页',
    path: '/',
  },{
    title: '个人简历',
    path: '/resume',
  },{
    title: '岗位信息',
    path: '/job_info',
  },{
    title: '个人中心',
    path: '/personal',
  },
]
const activeIndex = ref('0')
const activeIndex2 = ref('1')
const handleSelect = (key, keyPath) => {
  router.push(navigatorBarArr[key])
}

const emit = defineEmits(['openLogin'])
const openLoginModal = () => {
  emit('openLogin')
}

</script>


<style lang="scss" scoped>
.el-menu {
  justify-content: center;
  align-items: center;
  .menu-item {
    width: 200px;
    font-size: 18px;
  }
  .login-btn {
    width: 200px;
    height: 50px;
    background: #6ec7e8;
    border-radius: 20px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }
}
.navi-bar-container {
  // width: 100vw;
  // height: 100px;
  // background: #9499e3;
  // display: flex;
  // .bar-item {
  //   width: 200px;
  //   padding: 0 20px;

  // }
}
</style>

