"use client";
import React, {useState} from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "./Avatar";
import Input from "@/app/components/Input";
import { useEmpStore } from '@/store/useEmpStore';
import TableButton from './TableButton';

const EmpTable = ({employees, isEditMode}) => {
 
  const { editEmployee, deleteEmployee } = useEmpStore();
  const [ empData, setEmpData] = useState({})

  const handleChange = (e, empId) =>{
    let targetId = e.target.id.replace(/\d+$/, '')
    setEmpData({...empData, [targetId] : e.target.value, empId: empId })
  }

  const handleSave =(id) =>{
    editEmployee(id,empData)
  }

  const handleDelete =(id) =>{
    deleteEmployee(id)
  }
  
  const tableHeaderCls = `text-gray-400 text-xs font-semibold`

  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={`${tableHeaderCls} w-7`} align="left">
                <Avatar/>
              </TableCell>
              <TableCell className={`${tableHeaderCls} w-2/5 `} align="left">NAME</TableCell>
              <TableCell className={`${tableHeaderCls} w-1/5`} align="left">SALARY</TableCell>
              <TableCell className={`${tableHeaderCls} w-1/5`} align="left">AGE</TableCell>
              <TableCell className='w-1/5'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.map((employee, index) => (
              <TableRow key={employee.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} >
                <TableCell align="left">
                   <Avatar/>
                </TableCell>
                <TableCell align="left">
                  {isEditMode? 
                  <Input id={"employee_name"+index} type="text" defaultValue={employee.employee_name} noLabel onChange={e =>handleChange(e, employee.id)}/>
                  : (employee.employee_name.substring(0, 25))}
                </TableCell>
                <TableCell align="left">
                {isEditMode? 
                  <Input id={"employee_salary"+index} type="number" min='0' defaultValue={employee.employee_salary} noLabel onChange={e =>handleChange(e, employee.id)}/>
                  : (employee.employee_salary)}</TableCell>
                <TableCell align="left">
                {isEditMode? 
                  <Input id={"employee_age"+index} type="number" min='0' defaultValue={employee.employee_age} noLabel onChange={e =>handleChange(e, employee.id)}/>
                  : (employee.employee_age)}</TableCell>
                <TableCell align="left">
                {isEditMode? 
                  <TableButton text='Save' onClick={() => handleSave(employee.id)}/>
                  : <div className='flex w-fit'>
                  <TableButton text='Delete' onClick={() => handleDelete(employee.id)}/>
                    </div>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default EmpTable