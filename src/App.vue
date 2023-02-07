<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import router from "@/router";
import { useDark } from "@vueuse/core";

const isDark = useDark();

const activeName = ref("latex");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
  switch (tab.props.name) {
    case "formatCitation":
      router.push("/formatpdfcitation");
      break;
    case "citation":
      router.push("/citation");
      break;
    case "document":
      router.push("/docs");
      break;
    case "latex":
      router.push("/");
      break;
    case "translate":
      router.push("/translate");
      break;
  }
};
</script>

<template>
  <div class="container">
    <el-container>
      <el-header height="100">
        <el-row id="header">
          <h1>论文工具</h1>
          <div id="other-info">
            <el-switch
              v-model="isDark"
              inline-prompt
              active-text="夜间"
              inactive-text="日间"
              size="large"
              style="--el-switch-on-color: #303133"
            />
            <el-link
              type="info"
              href="https://github.com/chenqianhe/PaperTools"
              target="_blank"
              >GitHub</el-link
            >
          </div>
        </el-row>
        <el-row>
          <el-tabs
            v-model="activeName"
            type="card"
            class="tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="Latex 写作" name="latex" />
            <el-tab-pane label="翻译" name="translate" />
            <el-tab-pane label="文献引用" name="citation" />
            <el-tab-pane label="常用文档" name="document" />
            <el-tab-pane label="格式化 PDF 引用复制" name="formatCitation" />
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

#header {
  align-items: center;
  justify-content: space-between;

  #other-info {
    margin-right: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .el-switch {
      margin-right: 30px;
    }
  }
}

.tabs {
  width: 100%;

  :deep(.el-tabs__header) {
    margin-bottom: 0 !important;
  }
}
</style>
