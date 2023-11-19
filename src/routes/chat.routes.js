import Clear from "@/layouts/Clear.vue";

export default {
  path: "/",
  component: Clear,
  children: [
    { path: "", name: "chat", component: () => import("../pages/Chat.vue") },
  ],
};
