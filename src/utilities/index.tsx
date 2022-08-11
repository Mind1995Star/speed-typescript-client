// import { toast } from "react-toastify";

export const NotifySuccess = (str: any) => {
  if (typeof str === "string") {
    // toast.success(str);
  }
  console.error("This is not String");
};

export const NotifyFail = (str: any) => {
  if (typeof str === "string") {
    // toast.error(str);
  }
  console.error("This is not String");
};
