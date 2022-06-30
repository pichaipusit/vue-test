<template>
  <div>

    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <el-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
  >
    <el-input v-model="dynamicValidateForm.email"></el-input>
  </el-form-item>

  </div>
</template>

<script>
export default {
  name: "SignIn",
  
      data() {
      return {
        dynamicValidateForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        }
      };
    },

};
</script>

<style scoped></style>
