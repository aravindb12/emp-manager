"use client"

import React, { useState } from "react";
import { useEmpStore } from "@/store/useEmpStore";
import Input from "@/app/components/Input";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState();
  const [age, setAge] = useState();

  const { addEmployee } = useEmpStore();

  const handleAddPost = (e) => {
    e.preventDefault();
    const newEmployee = {
      employee_id: Date.now(),
      employee_name: name,
      employee_salary: salary,
      employee_age: age,
    };
    addEmployee(newEmployee);
    setName('')
    setSalary(null)
    setAge(null)
  };
  
  return (
    <form className="">
      <Input id="employee_name" label="Name" type="text" onChange={(e) => setName(e.target.value)}/>
      <Input id="employee_salary" min='0' label="Salary" type="number" onChange={(e) => setSalary(e.target.value)}/>
      <Input id="employee_age" min='0' label="Age" type="number" onChange={(e) => setAge(e.target.value)} />
      <button className="rounded-md my-6 py-1 px-2 text-sm font-medium focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2 text-gray-900 bg-slate-200" onClick={handleAddPost}>Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
