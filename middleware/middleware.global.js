import { defineNuxtRouteMiddleware } from "#app";
import { useAuthStore, useLoadingStore } from "@/store";
export default defineNuxtRouteMiddleware(async (to, from) => {
  const useAuth = useAuthStore();
  const isLoading = useLoadingStore();
  try {
    if (process.client) {
      const token = localStorage.getItem("token");
      if (token) {
        const parts = token.split(".");
        const exp = parts[1];
        const decodedPayload = JSON.parse(atob(exp));
        const experition = decodedPayload.exp;
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
