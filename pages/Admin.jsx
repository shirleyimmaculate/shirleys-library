import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import Login from '../components/Login'

export default function Admin() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  if (!session) return <Login />

  return (
    <div>
      <h2>Welcome, Admin!</h2>
      <button onClick={handleLogout}>Logout</button>
      <p>You're logged in and ready to manage your books.</p>
    </div>
  )
}
