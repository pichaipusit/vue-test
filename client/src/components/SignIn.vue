<template>
  <div>
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="120px"
      class="demo-dynamic"
    >
      <el-form-item
        prop="email"
        label="Email"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="pass">
        <el-input type="text" v-model="password" autocomplete="off"></el-input>
      </el-form-item>

      <div class="sign-btn">
        <div class="signin-btn">
          <el-button type="primary" @click="submitSignin" round
            >Sign in</el-button
          >
        </div>
        <router-link to="/signup">Sign up</router-link>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SignIn",

  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            key: 1,
            value: "",
          },
        ],
        email: "",
      },
      password: "",
    };
  },

  methods: {
    submitSignin() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.sign-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.signin-btn {
  margin-right: 20px;
}
</style>
