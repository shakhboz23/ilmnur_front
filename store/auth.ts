import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import { useApiRequest } from "~/composables";

import { useNotification } from "~/composables";
export const useAuthStore = defineStore("auth", () => {
  const apiRequest: any = useApiRequest();
  const { openNotification } = useNotification();
  const store = reactive({
    passType: "password",
    is_matched: false,
    step: 0,
    code: '',
    changeEmailModal: false,
    searchData: [],
  });

  const changepassword = reactive({
    old_password: '',
    new_password: '',
    confirm_password: '',
  })

  const modal = reactive({
    verification: false,
  })

  const isLoading = useLoadingStore();
  const router = useRouter();

  const create = reactive({
    phone: "",
    password: "",
    username: "",
  });

  const register = reactive({
    role: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const login = reactive({
    email: "",
    phone: "",
    password: "",
  });

  const reset_pass = reactive({
    new_password: "",
    confirm_password: "",
    activation_link: "",
  });

  const user: any = reactive({
    name: "",
    surname: "",
    email: "",
    password: "",
    role: "",
  });

  const profile: any = reactive({
    id: "",
    name: "",
    surname: "",
    image: "",
    imageFile: "",
    bio: "",
    email: "",
    password: "",
    role: "",
  });

  function changePassType() {
    store.passType = store.passType == 'password' ? 'text' : 'password';
  }

  function getUserFullInfo(is_check?: string) {
    if (is_check == 'login') {
      if (isLoading.user.name) return;
    }
    isLoading.addLoading("getUserFullInfo");
    apiRequest
      .get(`user/${isLoading.user.id}`)
      .then((res: any): void => {
        if (res.status == 200) {
          isLoading.store.middleware = false;
          isLoading.store.isLogin = true;
          isLoading.user = res.data;
          for (let i in res.data) {
            profile[i] = res.data[i];
          }
          //   isLoading.store.socket = io("http://localhost:4000", {
          //     reconnectionDelayMax: 10000000, // Maximum delay between reconnection attempts (milliseconds)
          //     reconnectionAttempts: 5,
          //     query: {
          //       id: isLoading.user?.data.id,
          //     },
          //   });
          //   isLoading.user.current_role_step = 0;
          //   isLoading.middleware.loading = false;
          //   for (let i of isLoading.user?.data.role) {
          //     isLoading.user.current_role_step += 1;
          //     if (i.role == isLoading.user?.data.current_role) {
          //       isLoading.user.current_role_data = i;
          //       break;
          //     }
          //   }
        } else {
          isLoading.store.isLogin = false;
          isLoading.store.middleware = false;
        }
        isLoading.removeLoading("getUserFullInfo");
      })
      .catch((err: any) => {
        isLoading.store.middleware = false;
        isLoading.store.isLogin = false;
        console.log(err);
      });
  }

  function authLogin() {
    localStorage.removeItem("token");
    apiRequest
      .post("user/login", login, 'auth')
      .then((res: any) => {
        console.log(res);
        if (!res.data?.user?.is_active) {
          return router.push("/verify-email");
        }
        isLoading.store.error = '';
        localStorage.setItem("token", res.data?.token);
        getUserFullInfo('login');
        isLoading.store.isLogin = true;
        if (res.data.statusCode == 200) {
          router.push("/");
        }
      })
      .catch((err: any) => {
        isLoading.store.error = err.response.data.message
        console.log(err);
      });
  }

  function resetPassword() {
    const activation_link = router.currentRoute.value.query.activation_link;
    apiRequest
      .post("user/reset-password", { activation_link, new_password: changepassword.new_password })
      .then((res: any) => {
        console.log(res);
        if (res.status == 201) {
          router.push("/login");
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  function changePassword() {
    apiRequest
      .post("user/change-password", changepassword)
      .then((res: any) => {
        console.log(res);
        if (res.status == 201) {
          router.push("/login");
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  function sendOtp() {
    apiRequest
      .post("otp/send-otp", login)
      .then((res: any) => {
        console.log(res);
        if (res.status == 201) {
          store.step = 1;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  function changeEmail() {
    apiRequest
      .put("user/change-email", { ...login, code: store.code })
      .then((res: any) => {
        console.log(res);
        if (res.status == 200) {
          store.changeEmailModal = false;
          router.push("/login");
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  function forgotPassword() {
    apiRequest
      .post("user/forgot-password", { email: login.email })
      .then((res: any) => {
        if (res.status == 201) {
          router.push("/verify-email");
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  function authRegister() {
    apiRequest
      .post("user/register", register, 'auth')
      .then((res: any) => {
        if (res.data.message == "Verification code sended successfully") {
          localStorage.setItem("token", res.data.token);
          router.push("/verify-email");
          getUserFullInfo('login');
        }
      })
      .catch((err: any) => {
        console.log(err);
        if (err.response?.data?.message == "Already registered") {
          //   showMessage("Email", "Allaqachon ro'yhatdan o'tilgan");
        }
      });
  }

  function authActivateLink() {
    const activation_link = router.currentRoute.value.query.activation_link;
    apiRequest
      .get(`user/activation_link/${activation_link}`, 'auth')
      .then((res: any) => {
        if (res.data.message == "User activated successfully") {
          localStorage.setItem("token", res.data?.token);
          router.push("/");
        }
      })
      .catch((err: any) => {
        if (err.response?.data?.message == "User already activated") {
          //   showMessage("Email", "Allaqachon ro'yhatdan o'tilgan");
        }
      });
  }

  function authResetPass() {
    reset_pass.activation_link = String(
      router.currentRoute.value.query.activation_link
    );
    apiRequest
      .put(`user/newPassword`, reset_pass)
      .then((res: any) => {
        if (res.status == 200) {
          router.push("/login");
        }
      })
      .catch((err: any) => {
        console.log(err);
        if (err.response?.data?.message == "User already activated") {
          //   showMessage("Email", "Allaqachon ro'yhatdan o'tilgan");
        }
      });
  }

  async function verifyGoogleCredential(response: any) {
    const credential = response.credential;
    apiRequest
      .post("user/auth/google", { credential })
      .then((res: any) => {
        localStorage.setItem("token", res.data.token);
        if (res.data.statusCode == 200) {
          router.push("/settings");
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  async function searchUser(search: string) {
    const res = await apiRequest
      .get(`user/search/${search}/1`, 'searchUser')
    console.log(res);
    store.searchData = res.data?.data?.records;
    return res.data?.data?.records;
  }

  async function createUser() {
    apiRequest
      .post("user/register", user)
      .then((res: any) => {
        localStorage.setItem("token", res.data.token);
        if (res.data.statusCode == 200) {
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  function updateProfile() {
    const formData = new FormData();
    for (let i in profile) {
      formData.append(i, profile[i])
    }
    formData.delete("imageFile");
    formData.delete("image");
    formData.append('image', profile.imageFile);
    apiRequest
      .put(
        `user/profile`,
        formData,
        'updateProfile'
      )
      .then((res: any) => {
        openNotification('success', "Muvaffaqiyatli", "O'zgarishlar saqlandi")
        getUserFullInfo()
      })
      .catch((err: any) => {
        getUserFullInfo()
        console.log(err);
        // openNotification(err?.response?.data?.message);
      });
  }

  return {
    store,
    create,
    modal,
    user,
    profile,
    getUserFullInfo,
    reset_pass,
    sendOtp,
    register,
    login,
    authLogin,
    searchUser,
    authRegister,
    authActivateLink,
    forgotPassword,
    resetPassword,
    changePassword,
    changeEmail,
    authResetPass,
    verifyGoogleCredential,
    createUser,
    updateProfile,
    changePassType,
    changepassword,
  };
});
