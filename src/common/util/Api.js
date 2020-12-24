import { message } from "antd";
import Axios from "axios";

/**
 *
 * @param {object} param
 * @param {'get' | 'post' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 */
export function callApi({ method = "get", url, params, data }) {
  return Axios({
    url,
    method,
    params,
    data,
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }).then((response) => {
    const { isSuccess, resultCode, resultMessage } = response.data;
    console.log(response);
    if (!isSuccess) {
      message.error(resultMessage);
    }
    return {
      isSuccess: isSuccess,
      data: response.data.data,
      resultCode,
      resultMessage,
    };
  });
}

export const ResultCode = {
  Success: 0,
};
