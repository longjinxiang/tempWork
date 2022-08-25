<template>
  <div class="'login-container'">
    <el-form :model="form" class="login-form">
      <el-form-item>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-icon :size="20" class="svg-container">
        <edit/>
      </el-icon>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
const form = ref({
  name: '',
  password: ''
})
</script>

<style lang="scss" scoped></style>