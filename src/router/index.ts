import { createRouter, createWebHistory } from "vue-router";
import CitationFormatView from "@/views/CitationFormatView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "CitationFormat",
      component: CitationFormatView,
    },
  ],
});

export default router;
