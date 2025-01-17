import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
import { useState } from "react";
export default function EntirePractice() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "red",
    color: "gray",
    content: "text",
  });

  return (
    <div>
      <Select setData={setData} />
      <Input setData={setData} />
      <Result data={data} />
    </div>
  );
}
