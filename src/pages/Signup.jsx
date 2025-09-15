import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
export default function Signup(){
  const { signup } = useAuth()
  const [form,setForm] = useState({name:'',email:'',password:''})
  const onChange = e => setForm({...form,[e.target.name]: e.target.value})
  const onSubmit = e => {
    e.preventDefault()
    const res = signup(form)
    if(res.error) alert(res.error)
  }
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Sign up</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={onChange} placeholder="Full name" className="w-full border p-2 rounded" />
        <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full border p-2 rounded" />
        <input name="password" type="password" value={form.password} onChange={onChange} placeholder="Password" className="w-full border p-2 rounded" />
        <button className="bg-accent text-white px-4 py-2 rounded">Create account</button>
      </form>
    </div>
  )
}
