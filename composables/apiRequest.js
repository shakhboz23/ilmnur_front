import axios from 'axios';
import { useLoadingStore } from "@/store";

export default function apiRequest(options) {
  const config = isLoading.checkCurrentUrl();
  const router = useRouter()
  function getToken() {
    return localStorage.getItem("token");
  }

  function getHeader() {
    let token = getToken();

    return {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": '*',
    };
  }
  const api = axios.create({
    baseURL: config.public.apiBaseUrl,
    timeout: 10000,
  });

  api.interceptors.request.use(
    // config => {
    //   if (token.value) {
    //     config.headers['Authorization'] = 'Bearer '+token.value;
    //   }
    //   return config;
    // },
    { headers: getHeader() },
    error => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    response => {
      const res = response.data;
      if (response.status !== 200) {
        return Promise.reject(new Error(res.message || 'Error'));
      } else {
        return res['data'];
      }
    },
    error => {
      if (error.response && (error.response.status == 401)) {
        token.value = null;
        router.push('/login');
      }
      return Promise.reject(error.response);
    }
  );

  return api(options);
};
