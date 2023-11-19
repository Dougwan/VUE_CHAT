import CHAT_ROUTES from "./chat.routes";

const routes = [
  {
    path: "/",
    children: [CHAT_ROUTES],
  },
];

export default routes;
