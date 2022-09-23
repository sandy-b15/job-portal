import { api_token } from "../config/config";

const axios = require("axios").default;

export function getApi(pUrl, params) {
  let url = pUrl;

  return axios.get(url, {
    method: "get",
    headers: {
      Authorization: `Bearer ${api_token.token}`,
      "Content-Type": "application/json ",
    },
    responseType: "json",
    params: params,
  });
}

export function postApi(pUrl, data) {
  let url = pUrl;

  return axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${api_token.token}`,
    },
    data: data,
  });
}
