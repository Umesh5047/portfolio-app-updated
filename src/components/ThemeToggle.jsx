import React, { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [dark, setDark] = useState(()=> localStorage.getItem('pa_theme')==='dark')
  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('pa_theme', dark ? 'dark' : 'light')
  },[dark])
  return <button onClick={()=>setDark(!dark)} className="px-2 py-1 bg-accent text-white rounded">{dark? '🌙' : '☀️'}</button>
}
