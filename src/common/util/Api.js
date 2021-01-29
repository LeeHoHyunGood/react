import { message } from "antd";
import Axios from "axios";
import { storageHelper } from "../util/storageHelper";

/**
 *
 * @param {object} param
 * @param {'get' | 'post' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 */
export function callApi({ method = "get", url, params, data }) {
  var token = storageHelper.get("token");
  console.log(token);
  return Axios({
    url,
    method,
    params,
    data,
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      token: token,
    },
  }).then((response) => {
    const { isSuccess, resultCode, resultMessage } = response.data;
    console.log(response);
    if (!isSuccess) {
      console.log("오류");
      message.error(resultMessage);
    }
    return {
      isSuccess: isSuccess,
      data: response.data,
      resultCode,
      resultMessage,
    };
  });
}

export const ResultCode = {
  Success: 0,
};
