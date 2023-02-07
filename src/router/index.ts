import { createRouter, createWebHistory } from "vue-router";
import CitationFormatView from "@/views/CitationFormatView.vue";
import CitationView from "@/views/CitationView.vue";
import DocsView from "@/views/DocsView.vue";
import LatexView from "@/views/LatexView.vue";
import TranslateView from "@/views/TranslateView.vue";
import AIToolsView from "@/views/AIToolsView.vue";

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
    {
      path: "/aitools",
      name: "AITools",
      component: AIToolsView,
    },
  ],
});

export default router;
