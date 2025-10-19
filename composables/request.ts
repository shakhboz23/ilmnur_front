import axios from "axios";
import { useLoadingStore } from "@/store";
export const useApiRequest = () => {
  const isLoading: any = useLoadingStore();
  // isLoading.checkCurrentUrl();
  // const { start, finish } = useLoadingIndicator();
  const endPoint: string = isLoading.checkCurrentUrl();

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

  function get(url: string, loadingType?: string) {
    if (process.client) {
      let headers = getHeader();
      isLoading.addLoading(loadingType);
      console.log(isLoading.store.loadingTypes);
      url = endPoint + url;
      return new Promise(function (resolve) {
        axios
          .get(url, { headers })
          .then((res) => {
            console.log(res, "res");
            isLoading.removeLoading(loadingType);
            console.log(isLoading.store.loadingTypes);
            resolve(res);
          })
          .catch((err) => {
            isLoading.removeLoading(loadingType);
            console.log(err);
            // if (err.response?.status == 401) {
            //   isLoading.store.isLogin = false;
            // }
            resolve(err);
          });
      });
    }
  }

  function post(url: string, data: any = {}, loadingType?: string) {
    console.log(data);
    // for (let [key, value] of data.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    let headers = getHeader();
    isLoading.addLoading(loadingType);
    url = endPoint + url;
    return new Promise(function (resolve, reject) {
      axios
        .post(url, data, { headers })
        .then((res) => {
          isLoading.store.errorMessage.message = "";
          isLoading.removeLoading(loadingType);
          resolve(res);
        })
        .catch((err) => {
          isLoading.removeLoading(loadingType);
          reject(err);
          if (err) {
            isLoading.store.errorMessage.message = err.response.data.message;
            console.log(err);
          }
        });
    });
  }

  function put(url: string, data = {}, loadingType?: string) {
    let headers = getHeader();
    url = endPoint + url;
    isLoading.addLoading(loadingType);
    return new Promise(function (resolve, reject) {
      axios
        .put(url, data, { headers: headers })
        .then((res) => {
          isLoading.removeLoading(loadingType);
          isLoading.store.errorMessage.message = "";
          resolve(res);
        })
        .catch((err) => {
          isLoading.removeLoading(loadingType);
          isLoading.store.errorMessage.message = err.response.data.message;
          console.log(err);
          reject(err);
        });
    });
  }

  function delete_req(url: string, loadingType?: string) {
    let headers = getHeader();
    url = endPoint + url;
    isLoading.addLoading(loadingType);
    return new Promise(function (resolve, reject) {
      axios
        .delete(url, { headers: headers })
        .then((res) => {
          isLoading.removeLoading(loadingType);
          isLoading.store.errorMessage.message = "";
          resolve(res);
        })
        .catch((err) => {
          isLoading.removeLoading(loadingType);
          isLoading.store.errorMessage.message = err.response.data.message;
          console.log(err);
          reject(err);
        });
    });
  }

  return {
    get,
    post,
    put,
    delete_req,
  };
};
