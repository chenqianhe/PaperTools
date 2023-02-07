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
    name: "Latex 公式编辑器",
    website: "https://www.latexlive.com/",
    intro: "在线编辑 Latex 数学公式。支持图片识别数学公式，并转换为 Latex 代码",
  },
  {
    name: "MyScript",
    website: "https://webdemo.myscript.com/",
    intro:
      "1. 数学：编写您的计算、方程式、化学公式并立即获得结果。\n2. 写：使用我们的教程编写文本、预览和更改识别结果并发现所有功能。\n3. 图表：绘制线条和形状、编写文本、预览并导出为 Microsoft PowerPoint 格式。",
  },
  {
    name: "火龙果写作",
    website: "https://mypitaya.com/",
    intro:
      "AI驱动的文字生产力工具。支持内容续写、改写润色、内容审核校对、多语言翻译等",
  },
  {
    name: "腾讯交互翻译",
    website: "https://transmart.qq.com/",
    intro:
      "腾讯交互翻译融合了腾讯人工智能实验室自研的交互式机器翻译、神经网络机器翻译、 统计机器翻译、语义理解、信息检索等技术，帮助用户更快、更好地完成翻译任务",
  },
];
</script>

<style scoped lang="less">
.el-card {
  margin-bottom: 20px;
}
</style>
