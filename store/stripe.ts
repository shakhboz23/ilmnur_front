import { useApiRequest } from "~/composables";
import { useCoursesStore } from "./courses";

// import { useLoadingStore } from "./loading";

export const useStripeStore = defineStore("stripe", () => {
  const apiRequest = useApiRequest();
  const useCourses = useCoursesStore();
  const router = useRouter();

  const store: any = reactive({
    // url: '',
  });

  function clearData() { }

  async function createCheckout() {
    const course_id = +router.currentRoute.value.params.course_id
    const data: any = await apiRequest.post(`stripe/checkout`, {
      course_id,
      amount: 250,
    }, "checkout");
    let url = data.data?.url;
    // console.log(data, data.data, store.url);
    // isLoading.modal.checkout = true
    // router.push(data.data?.url, )
    // window.open(url, '_blank', 'width=400,height=600')
    openStripeWindow(url);
    window.close
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
    const newWindow: any = window.open(url, '_blank',
      `width=${width},height=${height},top=${top},left=${left}`
    );

    // 3. Orqa fonni o‘chirish (ixtiyoriy: timeout yoki postMessage orqali)
    const interval = setInterval(() => {
      if (newWindow.closed) {
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
  };
});
