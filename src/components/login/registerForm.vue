<template>
  <div class="register-form relative">
    <h2>注册</h2>
    <!-- 登录注册表单 -->

    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="registerData"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm h-52 mt-10"
      :size="formSize"
      status-icon
    >
      <el-form-item label="邮箱名" prop="email">
        <el-input
          v-model="registerData.email"
          placeholder="邮箱"
          autocomplete="new-password"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="registerData.password"
          type="password"
          autocomplete="new-password"
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input
          v-model="registerData.confirmPassword"
          type="password"
          placeholder="确认密码"
        />
      </el-form-item>
      <el-form-item label="验证码" prop="verificationCode">
        <el-input
          v-model="registerData.verificationCode"
          type="text"
          placeholder=""
        />
      </el-form-item>
    </el-form>

    <div class="line-block">
      <div class="get-code-btn" @click="handleClick(actionType.getCode)">
        获取验证码
      </div>
    </div>
    <div
      class="submit-btn"
      @click="handleClick(actionType.bindMail, ruleFormRef)"
    >
      注册
    </div>
    <div class="forget-info">忘记密码？</div>
    <div class="close-btn absolute right-0 top-2" @click="closeModal">关闭</div>
  </div>
</template>

<script setup>
import { createAccount } from "@/service/api/userService";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const ruleFormRef = ref();
const emit = defineEmits(["closeModal"]);

const closeModal = () => {
  emit("closeModal");
};

const actionType = {
  bindMail: 1,
  getCode: 2,
};

const registerData = ref({
  email: "",
  password: "",
  confirmPassword: "",
  verificationCode: "",
});

const checkEmail = (rule, value, callback) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(value)) {
    callback(new Error("邮箱不合法"));
  }
};

const rules = {
  email: [
    {
      required: true,
      message: "邮箱名必填",
      trigger: "change",
    },
    {
      validator: checkEmail,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码必填",
      trigger: "change",
    },
    {
      min: 8,
      max: 16,
      message: "密码8-16位",
      trigger: "blur",
    },
  ],
  confirmPassword: [
    {
      required: true,
      trigger: "change",
    },
    {
      validator: (rule, value, callback) => {
        if (value !== registerData.value.password) {
          callback(new Error("密码不一致"));
        }
      },
      trigger: "blur",
    },
  ],
  verificationCode: [
    {
      required: true,
      message: "验证码必填",
      trigger: "change",
    },
  ],
};

const handleClick = async (type, formEl) => {
  if (type === actionType.getCode) {
    if (registerData.value.email.length === 0) {
      return ElMessage.error("请输入邮箱");
    }
    goCreate(type);
  } else {
    if (!formEl) return ElMessage.error("no form");
    formEl.validate((valid) => {
      if (!valid) {
        return ElMessage.error("try again later");
      } else {
        goCreate(type);
      }
    });
  }
};

const goCreate = async (type) => {
  const res = await createAccount({
    func: type,
    mail_address: registerData.value.email,
    password: registerData.value.password,
    code: registerData.value.verificationCode,
  });

  if (res.info.code === 1) {
    ElMessage({
      message: "获取验证码成功",
      type: "success",
    });
  }
};
</script>

<style scoped lang="scss">
.register-form {
  height: 400px;
  .form-warp {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .input-block {
    display: block;
    margin-bottom: 10px;
    height: 50px;
    border: none;
    outline: none;
    border-bottom: 1px solid #000000;
    font-size: 18px;
  }
  .submit-btn {
    margin: 20px auto;
    width: 90%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #222222;
    color: #ffffff;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
  }
  .forget-info {
    text-align: right;
    text-decoration-line: underline;
    cursor: pointer;
  }
  .close-btn {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #000000;
    border-radius: 10px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    cursor: pointer;
  }
  .line-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .get-code-btn {
      width: 120px;
      padding: 10px;
      box-sizing: border-box;
      background: #d4d4d4;
      border-radius: 10px;
      text-align: center;
    }
  }
}
</style>
