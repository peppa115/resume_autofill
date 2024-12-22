<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      class="menu-item"
      v-for="(item, index) in navigatorBarArr"
      :key="index"
      :index="index + ''"
      >{{ item.title }}</el-menu-item
    >
    <div class="login-btn" @click="openLoginModal" v-if="!state.isLoggedIn">
      登录/注册
    </div>
    <div v-else>
      <el-dropdown>
        <span class="el-dropdown-link h-[50px] leading-[50px] outline-none">
          已登录
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const state = reactive({
  token: localStorage.getItem("token") || null, // 初始化从 localStorage 获取 token
  isLoggedIn: !!localStorage.getItem("token"), // 根据 token 判断是否已登录
});
const router = useRouter();

const navigatorBarArr = [
  {
    title: "首页",
    path: "/",
  },
  {
    title: "个人简历",
    path: "/resume",
  },
  {
    title: "岗位信息",
    path: "/job_info",
  },
  {
    title: "个人中心",
    path: "/personal",
  },
];
const activeIndex = ref("0");
const handleSelect = (key, keyPath) => {
  console.log("%c Line:68 🍞 keyPath", "color:#b03734", keyPath);
  router.push(navigatorBarArr[key]);
};

const emit = defineEmits(["openLogin"]);
const openLoginModal = () => {
  emit("openLogin");
};

const logout = () => {
  window.localStorage.removeItem("token");
};
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
    background: rgb(234, 230, 218);
    border-radius: 20px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
