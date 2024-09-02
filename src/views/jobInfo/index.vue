<template>
  <div class="job-wrap">
    <el-container class="job-container">
      <el-main>
        <h3>岗位信息</h3>
        <div class="job-item" v-for="(item, index) in [1,2,3,4,5]" :key="index">
          岗位信息{{ item }}
        </div>
      </el-main>
      <el-aside class="aside-wrap">
        <h3>信息栏</h3>
        <div class="info-block">今天是个好日子</div>
      </el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';


</script>

<style lang="scss" scoped>

.job-wrap {

  .job-container {
    margin: 0 auto;
    width: 75vw;
    .job-item {
      width: 100%;
      height: 100px;
      margin-bottom: 20px;
      border: 1px solid green;
      box-sizing: border-box;
    }
    .aside-wrap {
      padding: 20px;
    }
    .info-block {
      width: 80%;
      height: 180px;
      border: 1px solid blueviolet;
    }

  }
}

</style>
