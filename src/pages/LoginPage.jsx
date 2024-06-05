import React from 'react'
import { login as loginComponent } from '../store/authSlice'

function LoginPage() {
  return (
    <div className='py-8'>
      <loginComponent />
    </div>
  )
}

export default LoginPage