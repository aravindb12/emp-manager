"use client"
import React,{useEffect} from "react";
import EmpTable from "../../components/EmpTable";
import { useEmpStore } from "@/store/useEmpStore";
const DataTable = () => {
  const { fetchEmpData, employees } = useEmpStore();

  useEffect(()=>{
    fetchEmpData("https://dummy.restapiexample.com/api/v1/employees")
  },[])
  return (
    <div>
      <EmpTable employees={employees} isEditMode={false} />
    </div>
  );
};

export default DataTable;
