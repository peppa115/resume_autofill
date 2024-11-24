<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">在线简历填写</h1>
      <el-form
        :model="form"
        :rules="rules"
        ref="resumeForm"
        label-position="top"
        class="space-y-6"
      >
        <!-- 个人信息 -->
        <div>
          <h2 class="text-lg font-medium text-gray-700 mb-2">个人信息</h2>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="电子邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请输入电子邮箱" />
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入联系电话" />
          </el-form-item>
        </div>

        <!-- 教育背景 -->
        <div>
          <h2 class="text-lg font-medium text-gray-700 mb-2">教育背景</h2>
          <el-form-item label="学校名称" prop="education.school">
            <el-input v-model="form.education.school" placeholder="请输入学校名称" />
          </el-form-item>
          <el-form-item label="专业" prop="education.major">
            <el-input v-model="form.education.major" placeholder="请输入专业" />
          </el-form-item>
          <el-form-item label="时间" prop="education.duration">
            <el-date-picker
              v-model="form.education.duration"
              type="daterange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              style="width: 100%;"
            />
          </el-form-item>
        </div>

        <!-- 工作经历 -->
        <div>
          <h2 class="text-lg font-medium text-gray-700 mb-2">工作经历</h2>
          <el-form-item label="公司名称" prop="work.company">
            <el-input v-model="form.work.company" placeholder="请输入公司名称" />
          </el-form-item>
          <el-form-item label="职位" prop="work.position">
            <el-input v-model="form.work.position" placeholder="请输入职位" />
          </el-form-item>
          <el-form-item label="时间" prop="work.duration">
            <el-date-picker
              v-model="form.work.duration"
              type="daterange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              style="width: 100%;"
            />
          </el-form-item>
          <el-form-item label="职责描述" prop="work.description">
            <el-input
              v-model="form.work.description"
              type="textarea"
              placeholder="请输入职责描述"
              rows="3"
            />
          </el-form-item>
        </div>

        <!-- 技能 -->
        <div>
          <h2 class="text-lg font-medium text-gray-700 mb-2">技能</h2>
          <el-form-item label="技能列表" prop="skills">
            <el-tag
              v-for="(skill, index) in form.skills"
              :key="index"
              closable
              @close="removeSkill(index)"
              class="mr-2"
            >
              {{ skill }}
            </el-tag>
            <el-input
              v-model="newSkill"
              placeholder="添加新技能"
              @keyup.enter="addSkill"
              class="mt-2"
            />
          </el-form-item>
        </div>

        <!-- 提交按钮 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="handleSubmit"
            class="w-full"
          >
            提交简历
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";

export default {
  setup() {
    const form = ref({
      name: "",
      email: "",
      phone: "",
      education: {
        school: "",
        major: "",
        duration: [],
      },
      work: {
        company: "",
        position: "",
        duration: [],
        description: "",
      },
      skills: [],
    });

    const newSkill = ref("");
    const rules = {
      name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
      email: [
        { required: true, message: "请输入电子邮箱", trigger: "blur" },
        { type: "email", message: "请输入正确的邮箱格式", trigger: "blur" },
      ],
      phone: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
    };

    const addSkill = () => {
      if (newSkill.value.trim()) {
        form.value.skills.push(newSkill.value.trim());
        newSkill.value = "";
      }
    };

    const removeSkill = (index) => {
      form.value.skills.splice(index, 1);
    };

    const handleSubmit = () => {
      console.log("简历提交成功：", form.value);
    };

    return {
      form,
      newSkill,
      rules,
      addSkill,
      removeSkill,
      handleSubmit,
    };
  },
};
</script>
