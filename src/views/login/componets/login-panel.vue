<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div>
      <el-tabs type="border-card" stretch v-model="currentTab">
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon style="vertical-align: middle" :size="15"
                ><User
              /></el-icon>
              <span style="vertical-align: middle">账号登录</span>
            </span>
          </template>
          <login-account ref="accountRef"></login-account>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon style="vertical-align: middle" :size="15"
                ><iphone
              /></el-icon>
              <span style="vertical-align: middle">手机登录</span>
            </span>
          </template>
          <login-phone ref="phoneRef"></login-phone>
        </el-tab-pane>
      </el-tabs>

      <div class="account-control">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>

      <el-button type="primary" class="login-btn" @click="handleLoginClick"
        >立即登录</el-button
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    // 定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')

    // 定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('手机登录')
      }
    }
    return {
      isKeepPassword,
      currentTab,
      accountRef,
      phoneRef,
      handleLoginClick
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  width: 350px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
