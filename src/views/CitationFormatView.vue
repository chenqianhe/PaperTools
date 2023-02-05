<template>
  <el-form label-position="top">
    <el-form-item label="每项引用开头标识(支持正则)：">
      <el-input v-model="label" placeholder="例如：[1] xxx 开头为 '['">
        <template #prepend>^</template>
      </el-input>
    </el-form-item>
    <el-row>
      <el-col :span="8">
        <el-form-item label="原始引用（直接从PDF中复制）：">
          <el-input
            v-model="rawCitation"
            :autosize="{ minRows: 30, maxRows: 120 }"
            type="textarea"
            :placeholder="rawCitationExample"
          />
        </el-form-item>
      </el-col>
      <el-col :span="1"></el-col>
      <el-col :span="15">
        <el-form-item label="格式化后的引用：">
          <el-input
            v-model="formattedCitation"
            :autosize="{ minRows: 30, maxRows: 120 }"
            type="textarea"
            :readonly="true"
            :placeholder="formattedCitationExample"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const label = ref("\\[\\d+\\]");
const rawCitation = ref("");
const formattedCitation = ref("");

const rawCitationExample =
  "例如：\n" +
  "[1] Tony Bergstrom and Karrie Karahalios. 2007.\n" +
  "Conversation Clock: Visualizing audio patterns in\n" +
  "co-located groups. In Proceedings of the Hawaii\n" +
  "International Conference on System Sciences. IEEE,\n" +
  "78–78.\n" +
  "[2] Jordan L Boyd-Graber, Sonya S Nikolova, Karyn A\n" +
  "Moffatt, Kenrick C Kin, Joshua Y Lee, Lester W\n" +
  "Mackey, Marilyn M Tremaine, and Maria M Klawe.\n" +
  "2006. Participatory design with proxies: developing a\n" +
  "desktop-PDA system to support people with aphasia. In\n" +
  "Proceedings of the SIGCHI Conference on Human\n" +
  "Factors in Computing Systems. ACM, 151–160.\n" +
  "[3] Daniel Cer, Yinfei Yang, Sheng-yi Kong, Nan Hua,\n" +
  "Nicole Limtiaco, Rhomni St John, Noah Constant,\n" +
  "Mario Guajardo-Cespedes, Steve Yuan, Chris Tar, and\n" +
  "others. 2018. Universal sentence encoder. arXiv preprint\n" +
  "arXiv:1803.11175 (2018).";

const formattedCitationExample =
  "例如：\n" +
  "[1] Tony Bergstrom and Karrie Karahalios. 2007.Conversation Clock: Visualizing audio patterns inco-located groups. In Proceedings of the HawaiiInternational Conference on System Sciences. IEEE,78–78.\n" +
  "[2] Jordan L Boyd-Graber, Sonya S Nikolova, Karyn AMoffatt, Kenrick C Kin, Joshua Y Lee, Lester WMackey, Marilyn M Tremaine, and Maria M Klawe.2006. Participatory design with proxies: developing adesktop-PDA system to support people with aphasia. InProceedings of the SIGCHI Conference on HumanFactors in Computing Systems. ACM, 151–160.\n" +
  "[3] Daniel Cer, Yinfei Yang, Sheng-yi Kong, Nan Hua,Nicole Limtiaco, Rhomni St John, Noah Constant,Mario Guajardo-Cespedes, Steve Yuan, Chris Tar, andothers. 2018. Universal sentence encoder. arXiv preprintarXiv:1803.11175 (2018).\n";

watch([label, rawCitation], ([newLabel, newRawCitation]) => {
  formattedCitation.value = newRawCitation
    .split("\n")
    .reduce((previousValue, currentValue) => {
      return new RegExp("^" + newLabel).test(currentValue)
        ? previousValue + "\n" + currentValue
        : previousValue + currentValue;
    }, "");
});
</script>

<style scoped></style>
