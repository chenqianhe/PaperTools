<template>
  <el-space wrap>
    <el-card class="box-card" v-for="content in contents" :key="content.name">
      <div class="card-content">
        <el-link type="primary" :href="content.website" target="_blank">
          <h2>{{ content.name }}</h2>
        </el-link>
      </div>
    </el-card>
  </el-space>
</template>

<script setup lang="ts">
const contents = [
  {
    name: "DeepL 翻译器",
    website: "https://www.deepl.com/translator",
  },
  {
    name: "百度翻译",
    website: "https://fanyi.baidu.com/",
  },
  {
    name: "Google 翻译",
    website: "https://translate.google.com.hk/",
  },
  {
    name: "腾讯翻译君",
    website: "https://fanyi.qq.com/",
  },
];
</script>

<style scoped lang="less">
.el-card {
  margin-bottom: 20px;
}
</style>
