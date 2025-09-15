import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({children}){
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pa_user')) } catch { return null }
  })

  useEffect(()=> {
    if(user) localStorage.setItem('pa_user', JSON.stringify(user))
    else localStorage.removeItem('pa_user')
  }, [user])

  const signup = ({name,email,password}) => {
    const users = JSON.parse(localStorage.getItem('pa_users') || '[]')
    if(users.find(u=>u.email===email)) return {error:'User exists'}
    const u = {id:Date.now(), name, email, password}
    users.push(u)
    localStorage.setItem('pa_users', JSON.stringify(users))
    setUser({id:u.id,name:u.name,email:u.email})
    return {ok:true}
  }

  const login = ({email,password}) => {
    const users = JSON.parse(localStorage.getItem('pa_users') || '[]')
    const u = users.find(x=>x.email===email && x.password===password)
    if(!u) return {error:'Invalid credentials'}
    setUser({id:u.id,name:u.name,email:u.email})
    return {ok:true}
  }

  const logout = ()=> setUser(null)

  return <AuthContext.Provider value={{user,signup,login,logout}}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)
