<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">个人信息展示</h1>
      <el-card shadow="hover">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 姓名 -->
          <div>
            <p class="text-sm text-gray-500">姓名</p>
            <p class="text-lg font-medium text-gray-800">{{ user.name }}</p>
          </div>

          <!-- 性别 -->
          <div>
            <p class="text-sm text-gray-500">性别</p>
            <p class="text-lg font-medium text-gray-800">{{ user.gender }}</p>
          </div>

          <!-- 生日 -->
          <div>
            <p class="text-sm text-gray-500">生日</p>
            <p class="text-lg font-medium text-gray-800">{{ user.birthday }}</p>
          </div>

          <!-- 邮箱 -->
          <div>
            <p class="text-sm text-gray-500">电子邮箱</p>
            <p class="text-lg font-medium text-gray-800">{{ user.email }}</p>
          </div>

          <!-- 联系电话 -->
          <div>
            <p class="text-sm text-gray-500">联系电话</p>
            <p class="text-lg font-medium text-gray-800">{{ user.phone }}</p>
          </div>

          <!-- 地址 -->
          <div>
            <p class="text-sm text-gray-500">地址</p>
            <p class="text-lg font-medium text-gray-800">{{ user.address }}</p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const user = {
      name: "张三",
      gender: "男",
      birthday: "1995-03-15",
      email: "zhangsan@example.com",
      phone: "13812345678",
      address: "北京市海淀区中关村大街1号",
    };

    return {
      user,
    };
  },
};
</script>
