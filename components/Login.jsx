import React, { useState } from 'react'
import { supabase } from '../supabase'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) setError(error.message)
    else alert('Check your email for the magic login link!')
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ padding: 8, marginRight: 10 }}
      />
      <button onClick={handleLogin}>Send Magic Link</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
