<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("formatCitation");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<template>
  <div class="container">
    <el-container>
      <el-header height="100">
        <el-row>
          <h1>论文工具</h1>
        </el-row>
        <el-row>
          <el-tabs
            v-model="activeName"
            type="card"
            class="tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="格式化引用" name="formatCitation" />
          </el-tabs>
        </el-row>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
    <el-backtop :right="50" :bottom="50" />
  </div>
</template>

<style scoped lang="less">
.app {
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;

  margin-bottom: 80px;
}

.tabs {
  width: 100%;

  :deep(.el-tabs__header) {
    margin-bottom: 0 !important;
  }
}
</style>
