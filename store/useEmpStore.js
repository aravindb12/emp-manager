import { create } from "zustand";

export const useEmpStore = create((set) => ({
  employees: null,
  fetchEmpData: async (url) => {
    const response = await fetch(url)
    const json = await response.json()
    set({employees: json.data})
  },
  addEmployee: (newEmployee) => {
    set((state) => {
      return { employees: [...state.employees, newEmployee] };
    });
  },
  editEmployee: (id, updatedEmployee) => {
    set((state) => {
      const updatedEmployees = state.employees.map((employee) => {
        if (employee.id === id) {
          return { ...employee, ...updatedEmployee };
        }
        return employee;
      });
      return { employees: updatedEmployees };
    });
  },
  deleteEmployee: (id) => {
    set((state) => {
      const updatedEmployees = state.employees.filter(
        (employee) => employee.id !== id
      );
      return { employees: updatedEmployees };
    });
  },
}));
