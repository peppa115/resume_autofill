<template>
  <div class="personal-wrap">
    <el-container>
      <el-aside width="200px"></el-aside>
      <el-main>
      <el-descriptions title="User Info">
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>

      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';


</script>

<style scoped lang="scss"> 
.personal-wrap {
  margin: 0 auto;
  width: 75vw;
}

</style>