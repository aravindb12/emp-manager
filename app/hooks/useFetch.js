import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
  },[url])

  const fetchData = async()=>{
    const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    const json = await response.json()
    setData(json.data);
  }
  return data
};

export default useFetch;