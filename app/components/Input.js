import React from 'react'

const Input = ({ label, id, type, onChange , defaultValue, min,  noLabel=false, isEditMode }) => {


  return (
    <div>
        {!noLabel && <label className="block text-sm font-medium leading-6 text-gray-600 my-2" htmlFor={id}>{label}</label>}
        <div>
            <input id={id} type={type} min={min} onChange={onChange} defaultValue={defaultValue}
                className={`block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none`} 
                    />
        </div>
    </div>
  )
}

export default Input