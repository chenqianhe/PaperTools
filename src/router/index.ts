import { createRouter, createWebHistory } from "vue-router";
import CitationFormatView from "@/views/CitationFormatView.vue";
import CitationView from "@/views/CitationView.vue";
import DocsView from "@/views/DocsView.vue";
import LatexView from "@/views/LatexView.vue";
import TranslateView from "@/views/TranslateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/formatpdfcitation",
      name: "CitationFormat",
      component: CitationFormatView,
    },
    {
      path: "/citation",
      name: "Citation",
      component: CitationView,
    },
    {
      path: "/docs",
      name: "Docs",
      component: DocsView,
    },
    {
      path: "/",
      name: "Latex",
      component: LatexView,
    },
    {
      path: "/translate",
      name: "Translate",
      component: TranslateView,
    },
  ],
});

export default router;
