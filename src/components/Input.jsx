import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
  label, type = "text", placeholder, className="", ...props
}, ref ) {

  const id = useId();

  return (
    <div className='w-full'>
      {
        label && <label className='inline-block mb-1 pl-1' htmlFor={props.id}>
          {label}
        </label>
      }

      <input type={type} className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `} ref={ref} {...props} id={id}/>

      //useRef se do different and individual components ke beech me refrence pass bhi kiya jata hai and state ki form me liye bhi jaata hai
    </div>
  )
})

export default Input