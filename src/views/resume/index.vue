<template>
  <div
    class="resume-form-container mx-auto max-w-5xl p-6 bg-white shadow-md rounded-md"
  >
    <el-container>
      <el-aside width="200px">
        <div v-for="(item, key) in resumeList" v-bind:key="key">
          <div @click="getTargetResume(item)">{{ item }}</div>
        </div>
      </el-aside>
      <el-main>
        <el-form :model="resumeInfo" label-width="120px" class="space-y-6">
          <!-- 简历名称 -->
          <el-form-item label="简历名称">
            <el-input
              v-model="resumeInfo.resume_name"
              placeholder="请输入简历名称"
              class="w-full"
            />
          </el-form-item>

          <!-- 个人信息 -->
          <el-card class="mb-6" header="个人信息">
            <el-row :gutter="20" class="mb-4">
              <el-col :span="12">
                <el-form-item label="姓名">
                  <el-input
                    v-model="resumeInfo.profile.name"
                    placeholder="请输入姓名"
                    class="w-full"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="英文名">
                  <el-input
                    v-model="resumeInfo.profile.en_name"
                    placeholder="请输入英文名"
                    class="w-full"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="性别">
                  <el-radio-group v-model="resumeInfo.profile.gender">
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="2">女</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="生日">
                  <el-date-picker
                    v-model="resumeInfo.profile.birthday"
                    type="date"
                    placeholder="选择生日"
                    class="w-full"
                  />
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>

          <!-- 求职意向 -->
          <el-card class="mb-6" header="求职意向">
            <el-form-item label="求职岗位">
              <el-input
                v-model="resumeInfo.apply_intent.job_title"
                placeholder="请输入求职岗位"
                class="w-full"
              />
            </el-form-item>
            <el-form-item label="意向城市">
              <el-input
                v-model="resumeInfo.apply_intent.job_city"
                placeholder="请输入意向城市"
                class="w-full"
              />
            </el-form-item>
            <el-form-item label="期望薪资">
              <el-input-number
                v-model="resumeInfo.apply_intent.salary_min"
                :min="0"
                placeholder="最低薪资"
                class="mr-2"
              />
              <span class="mx-2">-</span>
              <el-input-number
                v-model="resumeInfo.apply_intent.salary_max"
                :min="0"
                placeholder="最高薪资"
                class="ml-2"
              />
            </el-form-item>
          </el-card>

          <!-- 教育经历 -->
          <el-card class="mb-6" header="教育经历">
            <el-button @click="addNewItem('education_exp', 'education_list')"
              >新增</el-button
            >
            <div
              v-for="(item, index) in resumeInfo.education_exp.education_list"
              :key="index"
              class="border-b border-gray-200 pb-4 mb-4"
            >
              <el-row :gutter="20" class="mb-4">
                <el-col :span="12">
                  <el-form-item label="学校">
                    <el-input
                      v-model="item.school"
                      placeholder="请输入学校"
                      class="w-full"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="专业">
                    <el-input
                      v-model="item.major"
                      placeholder="请输入专业"
                      class="w-full"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="开始时间">
                    <el-date-picker
                      v-model="item.start_time"
                      type="date"
                      placeholder="选择开始时间"
                      class="w-full"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="结束时间">
                    <el-date-picker
                      v-model="item.end_time"
                      type="date"
                      placeholder="选择结束时间"
                      class="w-full"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-button
                @click="deleteItem('education_exp', 'education_list', index)"
                >删除</el-button
              >
            </div>
          </el-card>

          <!-- 工作经历 -->
          <el-card class="mb-6" header="工作经历">
            <el-button @click="addNewItem('work_exp', 'work_list')"
              >新增</el-button
            >

            <div
              v-for="(item, index) in resumeInfo.work_exp.work_list"
              :key="index"
              class="border-b border-gray-200 pb-4 mb-4"
            >
              <el-form-item label="公司名称">
                <el-input
                  v-model="item.company_name"
                  placeholder="请输入公司名称"
                  class="w-full"
                />
              </el-form-item>
              <el-form-item label="部门">
                <el-input
                  v-model="item.department_name"
                  placeholder="请输入部门名称"
                  class="w-full"
                />
              </el-form-item>
              <el-form-item label="岗位">
                <el-input
                  v-model="item.role"
                  placeholder="请输入岗位名称"
                  class="w-full"
                />
              </el-form-item>
              <el-button @click="deleteItem('work_exp', 'work_list', index)"
                >删除</el-button
              >
            </div>
          </el-card>

          <!-- 校园经历 -->
          <el-card class="mb-6" header="校园经历">
            <el-button @click="addNewItem('campus_exp', 'campus_list')"
              >新增</el-button
            >

            <div
              v-for="(item, index) in resumeInfo.campus_exp.campus_list"
              :key="index"
              class="border-b border-gray-200 pb-4 mb-4"
            >
              <el-form-item label="活动名称">
                <el-input
                  v-model="item.activity_name"
                  placeholder="请输入活动名称"
                  class="w-full"
                />
              </el-form-item>
              <el-form-item label="角色">
                <el-input
                  v-model="item.role"
                  placeholder="请输入角色"
                  class="w-full"
                />
              </el-form-item>
              <el-form-item label="描述">
                <el-input
                  type="textarea"
                  v-model="item.desc"
                  placeholder="请输入描述"
                  class="w-full"
                />
              </el-form-item>
              <el-button @click="deleteItem('campus_exp', 'campus_list', index)"
                >删除</el-button
              >
            </div>
          </el-card>

          <!-- 项目经历 -->
          <el-card class="mb-6" header="项目经历">
            <el-button @click="addNewItem('project_exp', 'project_list')"
              >新增</el-button
            >

            <div
              v-for="(item, index) in resumeInfo.project_exp.project_list"
              :key="index"
              class="border-b border-gray-200 pb-4 mb-4"
            >
              <el-form-item label="项目名称">
                <el-input
                  v-model="item.project_name"
                  placeholder="请输入项目名称"
                  class="w-full"
                />
              </el-form-item>
              <el-form-item label="职责">
                <el-input
                  v-model="item.role"
                  placeholder="请输入职责"
                  class="w-full"
                />
              </el-form-item>
              <el-form-item label="描述">
                <el-input
                  type="textarea"
                  v-model="item.desc"
                  placeholder="请输入描述"
                  class="w-full"
                />
              </el-form-item>
              <el-button
                @click="deleteItem('project_exp', 'project_list', index)"
                >删除</el-button
              >
            </div>
          </el-card>

          <!-- 技能 -->
          <el-card class="mb-6" header="技能">
            <el-button @click="addNewItem('skills', 'skill_list')"
              >新增</el-button
            >

            <div
              v-for="(item, index) in resumeInfo.skills.skill_list"
              :key="index"
              class="border-b border-gray-200 pb-4 mb-4"
            >
              <el-form-item label="技能名称">
                <el-input
                  v-model="item.name"
                  placeholder="请输入技能名称"
                  class="w-full"
                />
              </el-form-item>
              <el-form-item label="熟练程度">
                <el-input
                  v-model="item.proficiency"
                  placeholder="请输入熟练程度"
                  class="w-full"
                />
              </el-form-item>
              <el-button @click="deleteItem('skills', 'skill_list', index)"
                >删除</el-button
              >
            </div>
          </el-card>

          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import {
  getResume,
  getResumeList,
  updateResume,
} from "@/service/api/resumeService";
import { ElMessage } from "element-plus";
import { onBeforeMount, ref } from "vue";

onBeforeMount(() => {
  init();
});
const init = () => {
  getResumeListData();
};
// 定义 resumeInfo 数据
const resumeInfo = ref({
  resume_name: "",
  profile: {
    name: "",
    en_name: "",
    gender: 1,
    birthday: null,
    age: null,
    nationo: "",
    mobile: "",
    email: "",
    wx_account: "",
    qq_account: "",
    marital_status: 1,
    id_number: "",
    politic: "",
    hometown: "",
    current_city: "",
    years_of_working: "",
    highest_education: "",
    work_starttime: null,
  },
  apply_intent: {
    job_title: "",
    job_city: "",
    is_hide: false,
    job_target: "",
    job_status: "",
    salary_min: null,
    salary_max: null,
  },
  education_exp: {
    education_list: [
      {
        id: 0,
        start_time: null,
        end_time: null,
        school: "",
        major: "",
        degree: "",
        credit_point: "",
        credit_rank: "",
        is_hide: false,
      },
    ],
    is_hide: false,
  },
  work_exp: {
    work_list: [
      {
        id: 0,
        start_time: null,
        end_time: null,
        company_name: "",
        department_name: "",
        role: "",
        desc: [
          {
            desc_title: "",
            desc: "",
          },
        ],
        is_hide: false,
      },
    ],
    is_hide: false,
  },
  campus_exp: {
    campus_list: [
      {
        id: 0,
        activity_name: "",
        role: "",
        desc: "",
      },
    ],
    is_hide: false,
  },
  project_exp: {
    project_list: [
      {
        id: 0,
        project_name: "",
        role: "",
        desc: "",
      },
    ],
    is_hide: false,
  },
  skills: {
    skill_list: [
      {
        id: 0,
        name: "",
        proficiency: "",
      },
    ],
    is_hide: false,
  },
});

const educationDefault = {
  id: 0,
  start_time: null,
  end_time: null,
  school: "",
  major: "",
  degree: "",
  credit_point: "",
  credit_rank: "",
  is_hide: false,
};

const workDefault = {
  id: 0,
  start_time: null,
  end_time: null,
  company_name: "",
  department_name: "",
  role: "",
  desc: [
    {
      desc_title: "",
      desc: "",
    },
  ],
  is_hide: false,
};

const campusDefault = {
  id: 0,
  activity_name: "",
  role: "",
  desc: "",
};
const projectDefault = {
  id: 0,
  project_name: "",
  role: "",
  desc: "",
};
const skillDefault = {
  id: 0,
  name: "",
  proficiency: "",
};

const addNewItem = (key1, key2) => {
  const keyMap = {
    education_list: educationDefault,
    work_list: workDefault,
    campus_list: campusDefault,
    project_list: projectDefault,
    skill_list: skillDefault,
  };
  resumeInfo.value?.[key1]?.[key2].push(keyMap[key2]);
};

const deleteItem = (key1, key2, index) => {
  resumeInfo.value?.[key1]?.[key2].splice(index, 1);
};

// 获取简历list

// 创建新的简历

// 点击切换简历，展示不同的历史简历（数据回填）

// 更新简历

// 提交表单方法
const submitForm = async () => {
  if (resumeInfo.value.resume_name.length === 0) {
    return ElMessage.error("请输入简历名称");
  }
  const res = await updateResume({
    func: 1,
    resume_info: resumeInfo.value,
  });
  getResumeListData();
  console.log("%c Line:494 🍫 res", "color:#b03734", res);
};

// 重置表单方法
const resetForm = (formRef) => {
  if (formRef) {
    formRef.resetFields();
  }
};
const resumeList = ref([]);
const getResumeListData = async () => {
  const res = await getResumeList({
    sid: window.localStorage.getItem("token"),
  });
  if (res.info.code !== 1) {
    return ElMessage.error("try again later");
  }
  resumeList.value = res.info.resume_id_list;
};
const getTargetResume = async (id) => {
  const res = await getResume({
    resume_id: id,
  });
  if (res.info.code !== 1) {
    return ElMessage.error("try again later");
  }

  console.log("%c Line:535 🍣", "color:#42b983", res);
};
const updatePages = () => {};
</script>

<script>
export default {
  name: "resume-info",
};
</script>

<style scoped>
.resume-form-container {
  background-color: #f9fafb;
}
</style>
