<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- 英雄横幅 -->
    <section class="bg-blue-600 text-white py-16 text-center">
      <h2 class="text-4xl font-bold mb-4">轻松创建专业简历</h2>
      <p class="text-lg mb-6">丰富的模板，快速的编辑，让你的求职更出色！</p>
      <el-button type="primary" size="large" class="bg-white text-blue-600 font-bold">立即开始</el-button>
    </section>

    <!-- 功能模块 -->
    <section class="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3 text-center">
      <div class="p-6 bg-white shadow-md rounded-lg">
        <img src="https://via.placeholder.com/100" alt="模板选择" class="mx-auto mb-4">
        <h3 class="text-xl font-semibold mb-2">多样模板</h3>
        <p class="text-gray-600">支持多种简历模板，满足你的个性化需求。</p>
      </div>
      <div class="p-6 bg-white shadow-md rounded-lg">
        <img src="https://via.placeholder.com/100" alt="在线编辑" class="mx-auto mb-4">
        <h3 class="text-xl font-semibold mb-2">在线编辑</h3>
        <p class="text-gray-600">实时在线编辑，操作简单高效。</p>
      </div>
      <div class="p-6 bg-white shadow-md rounded-lg">
        <img src="https://via.placeholder.com/100" alt="一键下载" class="mx-auto mb-4">
        <h3 class="text-xl font-semibold mb-2">一键下载</h3>
        <p class="text-gray-600">支持 PDF 格式下载，便捷分享和打印。</p>
      </div>
    </section>

    <!-- 用户评价 -->
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h3 class="text-2xl font-bold text-gray-800 text-center mb-8">用户评价</h3>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <el-card shadow="hover" class="text-center p-6">
            <p class="text-gray-600 mb-4">"非常方便，模板很好看，操作也简单！"</p>
            <p class="font-semibold text-gray-800">- 用户 A</p>
          </el-card>
          <el-card shadow="hover" class="text-center p-6">
            <p class="text-gray-600 mb-4">"功能强大，帮我节省了很多时间！"</p>
            <p class="font-semibold text-gray-800">- 用户 B</p>
          </el-card>
          <el-card shadow="hover" class="text-center p-6">
            <p class="text-gray-600 mb-4">"简历效果很专业，值得推荐！"</p>
            <p class="font-semibold text-gray-800">- 用户 C</p>
          </el-card>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm">© 2024 简历在线生成器. 版权所有.</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
