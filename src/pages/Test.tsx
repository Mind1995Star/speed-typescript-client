import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PUBLIC_PREFIX } from "../configs/public.config";
import { getAddress } from "../actions/metamask.action";

export default function Test() {
  const [tableData, setTableData] = useState<
    Array<{ _id: string; address: string }>
  >([]);

  const history = useHistory();

  const getData = async () => {
    let data = await getAddress();
    setTableData(data.addressData);
  };

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, []);

  const toBack = () => {
    history.push({
      pathname: PUBLIC_PREFIX,
    });
  };

  return (
    <>
      <div className="flex justify-center text-white">
        <div className="flex flex-row items-center justify-center w-full relative">
          <div
            className="flex absolute top-2 right-4 py-[10px] text-[15px] cursor-pointer px-[15px] md:py-[15px] md:text-[25px] mb-[20px] bg-[#3898EC] text-center rounded-[10px] hover:bg-[#0057a3]"
            onClick={toBack}
          >
            Back
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[50px]">
        <table className="text-white text-center border-solid border-white p-[20px]">
          <tr className="text-[30px]">
            <th>No</th>
            <th>Wallet Account List</th>
          </tr>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.address}</td>
              </tr>
            );
          })}
        </table>
        {/* <table className="text-white text-center border-solid border-white m-[20px]">
          <tr className="text-[40px]">
            <th>No</th>
            <th>Wallet Address</th>
          </tr>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.address}</td>
              </tr>
            );
          })}
        </table> */}
      </div>
    </>
  );
}
