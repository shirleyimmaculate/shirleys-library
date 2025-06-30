import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import Login from '../components/Login'
import BookManager from '../components/BookManager'

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
    <div style={{ padding: 20 }}>
      <h2>Welcome, Admin!</h2>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <BookManager />
    </div>
  )
}
