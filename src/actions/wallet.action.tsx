import axios from "axios";
import {
  ADD_PREFIX,
  WALLET_PREFIX,
  PUBLIC_PREFIX,
  BACKEND_API_PREFIX,
} from "../configs/public.config";

export const addWalletAddress = async (params: any) => {
  console.log("This is Action:", params);

  const result = await axios.post(
    BACKEND_API_PREFIX + PUBLIC_PREFIX + WALLET_PREFIX + ADD_PREFIX,
    {
      walletAddress: params,
    }
  );
  if (result.status === 200) {
    return result;
  }
};
