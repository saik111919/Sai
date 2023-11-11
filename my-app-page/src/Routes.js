import MainPage from "./Pages/MainPage";

export const routes = [
  {
    path: "/",
    component: MainPage,
    protected: false,
    isAdmin: false,
  },
];
