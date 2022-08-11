import { useEffect, useState } from "react";
import { getAddress } from "../actions/metamask.action";

export default function CheckPage() {
  const [tableData, setTableData] = useState([]);
  const getData = async () => {
    let { data } = await getAddress();
    for (var i = 0; i < data.length; i++) {
      data[i]["id"] = i;
    }
    setTableData(data);
  };
  console.log("tableData:", tableData);
  useEffect(() => {
    getData();
  }, [getData]);
  alert("This is Test Page");
  return (
    <>
      <div>This is TestPage</div>
    </>
  );
}
