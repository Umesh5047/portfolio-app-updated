import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
export default function Login(){
  const { login } = useAuth()
  const [form,setForm] = useState({email:'',password:''})
  const onChange = e => setForm({...form,[e.target.name]: e.target.value})
  const onSubmit = e => {
    e.preventDefault()
    const res = login(form)
    if(res.error) alert(res.error)
  }
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full border p-2 rounded" />
        <input name="password" type="password" value={form.password} onChange={onChange} placeholder="Password" className="w-full border p-2 rounded" />
        <button className="bg-accent text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  )
}
