<template>
  <div class="job-wrap">
    <el-container class="job-container">
      <el-main>
        <h2 class="text-2xl">岗位信息</h2>
        <div class="flex flex-wrap gap-4 items-center my-5">
          <el-select
            v-model="selectValue"
            placeholder="校招/社招/实习"
            size="large"
            style="width: 240px"
          >
            <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-cascader
            v-model="cascaderValue"
            :options="industryOptions"
            :props="props"
            placeholder="全部岗位"
            size="large"
          />
          <el-select
            v-model="selectValue"
            placeholder="全部城市"
            size="large"
            style="width: 240px"
          >
            <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="min-h-screen py-4">
          <div class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div
                v-for="(job, index) in jobInfoList"
                :key="index"
                class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h2 class="text-xl font-semibold text-gray-800">
                  {{ job.post_name }}
                </h2>
                <!-- <p class="text-gray-600 mt-2">公司：{{ job.company }}</p> -->
                <p class="text-gray-600 mt-1">城市：{{ job.city }}</p>
                <p class="text-gray-600 mt-1">行业：{{ job.industry }}</p>
                <!-- <p class="text-gray-800 font-bold mt-4">
                  工资：{{ job.salary }}
                </p> -->
                <!-- 岗位职责 -->
                <div class="mt-4 whitespace-pre-line">
                  {{ job.post_info }}
                  <!-- <h3 class="text-gray-800 font-medium">岗位职责：</h3>
                  <ul class="list-disc list-inside text-gray-600 mt-2">
                    <li v-for="(duty, idx) in job.responsibilities" :key="idx">
                      {{ duty }}
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { selectOptions, industryOptions } from "../../lib/test";
import { getResume } from "@/service/api/jobService";
import { ElMessage } from "element-plus";

let selectValue = ref();
let cascaderValue = ref();

const props = {
  expandTrigger: "hover",
};

onBeforeMount(() => {
  init();
});
const jobInfoList = ref([]);
const init = async () => {
  const res = await getResume();
  console.log("%c Line:99 🍤 res", "color:#42b983", res, res.info.posts[0]);
  if (res.info.code !== 1) {
    return ElMessage.error("try again later");
  }
  jobInfoList.value = res.info.posts;
};
</script>
<script>
export default {
  name: "job-info",
};
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
