import { useState } from "react";
import tableData1 from "../tableData1.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {
 const [tableData, setTableData] = useState(tableData1);

 const columns = [
  { label: "Full Name", accessor: "full_name" },
  { label: "Email", accessor: "email" },
  { label: "Gender", accessor: "gender" },
  { label: "Age", accessor: "age" },
  { label: "Start date", accessor: "start_date" },
 ];

 return (
  <>
   <table className="table">
    <caption>
     Developers currently enrolled in this course, column headers are sortable.
    </caption>
    <TableHead columns={columns} />
    <TableBody columns={columns} tableData={tableData} />
   </table>
  </>
 );
};

export default Table;
