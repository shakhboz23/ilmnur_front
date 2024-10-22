import axios from "axios";
import { useLoadingStore } from "@/store";
export const useApiRequest = () => {
  const isLoading: any = useLoadingStore();
  // isLoading.checkCurrentUrl();
  // const { start, finish } = useLoadingIndicator();
  const endPoint: string = isLoading.store.baseUrl;

  function getToken() {
    return localStorage.getItem("token");
  }

  function getHeader() {
    let token = getToken();

    return {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
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

  function post(url: string, data = {}) {
    let headers = getHeader();
    url = endPoint + url;
    return new Promise(function (resolve, reject) {
      axios
        .post(url, data, { headers })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          if (err) {
            console.log(err);
          }
        });
    });
  }

  function put(url: string, data = {}) {
    let headers = getHeader();
    url = endPoint + url;
    return new Promise(function (resolve, reject) {
      axios
        .put(url, data, { headers: headers })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  function delete_req(url: string) {
    let headers = getHeader();
    url = endPoint + url;
    return new Promise(function (resolve, reject) {
      axios
        .delete(url, { headers: headers })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
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
