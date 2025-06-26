import { useApiRequest } from "~/composables";
import { useCoursesStore } from "./courses";

// import { useLoadingStore } from "./loading";

export const useStripeStore = defineStore("stripe", () => {
  const apiRequest = useApiRequest();
  const useCourses = useCoursesStore();
  const router = useRouter();
  const { openNotification } = useNotification();

  const store: any = reactive({
    // url: '',
    paymentHistory: null,
    userGrouppaymentHistory: null,
    groupPaymentHistory: null,
  });

  function clearData() { }

  async function createCheckout() {
    const course_id = +router.currentRoute.value.params.course_id
    let res: any;
    const data: any = await apiRequest.post(`stripe/checkout`, {
      course_id,
      amount: 250,
    }, "checkout");
    if (data.data.message) {
      openNotification('success', data.data.message, '');
      return { success: true }
    } else {
      res = data.data?.url;
    }
    openStripeWindow(res);
    window.close
  }

  async function getUserPaymentHistory() {
    const data: any = await apiRequest.get(`stripe/get-user-payment-history`, "payment");
    if (data.data.message) {
      // openNotification('success', data.data.message, '');
      return { success: true }
    } else {
      store.paymentHistory = data.data; 
    }
  }
  
  async function getUserGroupPaymentHistory() {
    const data: any = await apiRequest.get(`stripe/get-user-group-payment-history`, "payment");
    if (data.data.message) {
      // openNotification('success', data.data.message, '');
      return { success: true }
    } else {
      store.userGrouppaymentHistory = data.data; 
    }
  }

  async function getGroupPaymentHistory() {
    const data: any = await apiRequest.get(`stripe/get-group-payment-history`, "payment");
    if (data.data.message) {
      // openNotification('success', data.data.message, '');
      return { success: true }
    } else {
      store.groupPaymentHistory = data.data; 
    }
  }

  function openStripeWindow(url: string) {
    // 1. Orqa fon (backdrop) qo‘shish
    const backdrop = document.createElement('div');
    backdrop.id = 'stripe-backdrop';
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100vw';
    backdrop.style.height = '100vh';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    backdrop.style.zIndex = '9999';
    document.body.appendChild(backdrop);
    const width = 400;
    const height = 600;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    // 2. Yangi oynani ochish
    const stripeWindow: any = window.open(url, '_blank',
      `width=${width},height=${height},top=${top},left=${left}`
    );

    backdrop.addEventListener('click', () => {
      stripeWindow?.focus();
    });


    // 3. Orqa fonni o‘chirish (ixtiyoriy: timeout yoki postMessage orqali)
    const interval = setInterval(() => {
      if (stripeWindow.closed) {
        clearInterval(interval);
        document.getElementById('stripe-backdrop')?.remove();
        useCourses.getByCourse();
      }
    }, 500);
  }



  return {
    store,
    clearData,
    createCheckout,
    getUserPaymentHistory,
    getUserGroupPaymentHistory,
    getGroupPaymentHistory,
  };
});
