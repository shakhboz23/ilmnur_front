import { useApiRequest } from "~/composables";
// import { useLoadingStore } from "./loading";

export const useStripeStore = defineStore("stripe", () => {
  const apiRequest = useApiRequest();
  // const isLoading = useLoadingStore();
  const router = useRouter();

  const store: any = reactive({
    // url: '',
  });

  function clearData() {}

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
    window.open(url, '_blank')
  }

  return {
    store,
    clearData,
    createCheckout,
  };
});
