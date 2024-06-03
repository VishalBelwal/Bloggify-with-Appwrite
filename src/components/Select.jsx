import React, {useId} from 'react'


function Select({
  options, label, className="", ...props
}, ref) {

  const id = useId()

  return (
    <div className='w-full'>
      {
        label && <label htmlFor={id} className=''></label>
      }

      <select {...props} id={id} ref={ref} className={`w-full rounded-lg px-3 py-2 duration-200 bg-white text-black border border-gray-200 outline-none focus:bg-gray-50 ${className}`}>
        {
          options?.map((option) => (
            <option key={option} value={option} >{option}</option>
          ))
        }
      </select>
    </div>
  )
}

export default React.forwardRef(Select)