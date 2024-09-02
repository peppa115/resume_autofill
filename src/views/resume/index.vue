<template>
  <div class="resume-wrap">
    <el-container>
      <el-aside>
        大纲目录
      </el-aside>
      <el-main>
        <div class="line-info" v-for="(item, index) in titleArr" :key="index">
          <div class="title">{{ item }}：</div>
          <el-input v-model="input" style="width: 240px" placeholder="Please input" />
        </div>
      </el-main>
      <el-aside>
        
      </el-aside>
    </el-container>
  </div>
  
</template>

<script setup>
const titleArr = [
  '姓名',
  '性别',
  '民族',
  '电话',
  '邮箱',
  '微信号',
]

</script>

<style lang="scss" scoped>
.resume-wrap {
  width: 75vw;
  min-height: 90vh;
  margin: 0 auto;
  .line-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  // .resume-content {
  //   width: 80vw;
  //   min-height: 100vh;
  //   border: 1px solid red;
  // }
}
</style>