<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span class="title">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item> 系统管理 </el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'UserInfo',
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return { name }
  }
})
</script>

<style lang="less" scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  .title {
    padding-left: 10px;
  }
}
</style>
