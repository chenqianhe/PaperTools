<template>
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
</template>

<script setup lang="ts">
const contents = [
  {
    name: "Cmd Markdown 公式指导手册",
    website: "https://ericp.cn/cmd",
    intro:
      "本文为 MathJax 在 Cmd Markdown 环境下的常用语法指引。Cmd Markdown 编辑阅读器支持 Latex 编辑显示支持",
  },
  {
    name: "Latex 入门",
    website: "https://zhuanlan.zhihu.com/p/456055339",
    intro:
      "本份教程适合完全没有用过LaTeX的读者使用，学习完后应该能满足LaTeX日常使用的要求。如果之前已经使用过LaTeX的话，也可以参考本文学习",
  },
];
</script>

<style scoped lang="less">
.el-card {
  margin-bottom: 20px;
}
</style>
