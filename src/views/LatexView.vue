<template>
  <el-space wrap>
    <el-card class="box-card" v-for="content in contents" :key="content.name">
      <template #header>
        <div class="card-header">
          <span>
            <el-link type="primary" :href="content.website" target="_blank">
              <h2>{{ content.name }}</h2>
            </el-link>
          </span>
        </div>
      </template>
      <div class="card-content">
        <p>{{ content.intro }}</p>
      </div>
    </el-card>
  </el-space>
</template>

<script setup lang="ts">
const contents = [
  {
    name: "Overleaf",
    website: "https://www.overleaf.com/",
    intro: "易于使用的在线协作LaTeX编辑器，支持多人同时编辑，支持版本控制",
  },
  {
    name: "Tables Generator",
    website: "https://www.tablesgenerator.com/",
    intro: "在线生成表格",
  },
  {
    name: "在线转换图像文件",
    website: "https://www.aconvert.com/cn/image/",
    intro: "免费支持多种格式的图像文件在线转换，可用于转换到 .eps 格式",
  },
  {
    name: "镝数图表",
    website: "https://dycharts.com/",
    intro:
      "在线制作多种图表，样式丰富，配色合适，支持多种格式导出（有免费额度限制）",
  },
  {
    name: "Grammarly",
    website: "https://www.grammarly.com/",
    intro: "在线英语语法检查工具",
  },
  {
    name: "Ludwig",
    website: "https://ludwig.guru/",
    intro:
      "Ludwig是第一个句子搜索引擎，它通过提供从可靠来源获取的情境化示例，帮助你写出更好的英语",
  },
];
</script>

<style scoped>
.el-card {
  margin-bottom: 20px;
}
</style>
