import { defineNuxtRouteMiddleware } from "#app";
import { useAuthStore, useLoadingStore } from "@/store";
export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter();
  const useAuth = useAuthStore();
  const isLoading = useLoadingStore();
  try {
    if (process.client) {
      console.log(to.name, '2233')
      const token = localStorage.getItem("token") || to.query.token;
      console.log(to.query.token && to.query.token != undefined && to.name == 'login', '2300');
      if (to.query.token && to.query.token != undefined && to.name == 'login') {
        localStorage.setItem("token", to.query.token);
        router.push('/');
      }
      if (token) {
        const parts = token.split(".");
        const exp = parts[1];
        const decodedPayload = JSON.parse(atob(exp));
        const experition = decodedPayload.exp;
        isLoading.user.id = decodedPayload.id;
        const now = +Date.now().toString().slice(0, 10);
        if (now >= experition) {
          localStorage.removeItem("token");
          isLoading.store.middleware = false;
          isLoading.store.isLogin = false;
        } else {
          useAuth.getUserFullInfo();
        }
      } else {
        isLoading.store.middleware = false;
      }
    }
  } catch (err) {
    if (
      localStorage.hasOwnProperty("user_id") ||
      localStorage.hasOwnProperty("token")
    ) {
    }
    console.log(err);
    isLoading.store.middleware = false;
    isLoading.store.isLogin = false;
  }
});
