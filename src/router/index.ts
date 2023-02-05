import { createRouter, createWebHistory } from "vue-router";
import CitationFormatView from "@/views/CitationFormatView.vue";
import CitationView from "@/views/CitationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "CitationFormat",
      component: CitationFormatView,
    },
    {
      path: "/citation",
      name: "Citation",
      component: CitationView,
    }
  ],
});

export default router;
