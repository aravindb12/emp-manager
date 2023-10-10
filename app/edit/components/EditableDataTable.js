"use client"
import React from "react";
import { useEmpStore } from "@/store/useEmpStore";
import EmpTable from "@/app/components/EmpTable";

const EditableDataTable = () => {
  const { employees } = useEmpStore();

  return (
    <div className="">
      <EmpTable employees={employees} isEditMode={true} />
    </div>
  );
};

export default EditableDataTable;
