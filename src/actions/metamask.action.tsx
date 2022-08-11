import axios from "axios";
import {
  ADD_PREFIX,
  METAMASK_PREFIX,
  PUBLIC_PREFIX,
  BACKEND_API_PREFIX,
  GET_PREFIX,
} from "../configs/public.config";

export const addMetamaskAddress = async (params: any) => {
  console.log("sending address:", params);
  // interface dataValue {
  //   address: string;
  // }
  // dataValue;
  // console.log("Type: " + typeof params);

  const result = await axios.post(
    BACKEND_API_PREFIX + PUBLIC_PREFIX + METAMASK_PREFIX + ADD_PREFIX,
    {
      walletAddress: params,
    }
  );
  if (result.status === 200) {
    return result;
  }

  // const result = await axios({
  //   url: BACKEND_API_PREFIX + PUBLIC_PREFIX + METAMASK_PREFIX + ADD_PREFIX,
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  //   data: params,
  // });
};

export const getAddress = async () => {
  const result = await axios.post(
    BACKEND_API_PREFIX + PUBLIC_PREFIX + METAMASK_PREFIX + GET_PREFIX
  );
  if (result.status === 200) {
    return result.data;
  }
};
