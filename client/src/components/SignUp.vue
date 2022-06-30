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
        <el-input type="text" v-model="password" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="First Name" prop="first">
        <el-input type="text" v-model="firstName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Last Name" prop="last">
        <el-input type="text" v-model="lastName" autocomplete="off"></el-input>
      </el-form-item>

      <div class="sign-btn">
        <div class="signin-btn">
          <el-button type="primary" @click="submitSignin" round
            >Sign up</el-button
          >
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SignUp",

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
      firstName: "",
      lastName: "",
    };
  },

  computed: {},

  methods: {
    submitSignin() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped></style>
