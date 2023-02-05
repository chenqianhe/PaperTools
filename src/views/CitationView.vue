<template>
  <el-card class="box-card" v-for="content in contents" :key="content.name">
    <template #header>
      <div class="card-header">
        <span>
          <el-link type="primary" :href="content.website" target="_blank">
            <h2>{{
            content.name
              }}</h2>
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
    name: "MyBib",
    website: "https://www.mybib.com/",
    intro:
      "MyBib 是一个在线的文献管理工具，可以帮助你管理文献，生成引用列表，生成文献引用",
  },
  {
    name: "Cite This For Me",
    website: "https://www.citethisforme.com/",
    intro: "创建 Harvard, APA & MLA 引用",
  }
]

</script>

<style scoped lang="less">
.el-card {
  margin-bottom: 20px;
}
</style>