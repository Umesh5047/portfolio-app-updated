import React, { useState } from 'react'

export default function ContactForm(){
  const [form,setForm]=useState({name:'',email:'',message:''})
  const [status,setStatus]=useState(null)
  const onChange = e => setForm({...form,[e.target.name]: e.target.value})
  const onSubmit = e => {
    e.preventDefault()
    if(!form.name||!form.email||!form.message){ setStatus({error:'Fill all fields'}); return }
    const msgs = JSON.parse(localStorage.getItem('pa_messages')||'[]')
    msgs.push({...form,id:Date.now()})
    localStorage.setItem('pa_messages', JSON.stringify(msgs))
    setForm({name:'',email:'',message:''})
    setStatus({ok:'Saved locally'})
  }
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-2">Contact</h3>
      <form onSubmit={onSubmit} className="space-y-2">
        <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="w-full border p-2 rounded" />
        <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full border p-2 rounded" />
        <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="4" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-accent text-white px-4 py-2 rounded">Send</button>
      </form>
      {status && (status.error ? <div className="text-red-600 mt-2">{status.error}</div> : <div className="text-green-600 mt-2">{status.ok}</div>)}
    </div>
  )
}
