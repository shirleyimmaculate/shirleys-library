import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import { useSearchParams } from 'react-router-dom'

export default function EditBook() {
  const [searchParams] = useSearchParams()
  const bookId = searchParams.get('id')

  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [filename, setFilename] = useState('')

  useEffect(() => {
    if (bookId) fetchBook()
  }, [bookId])

  async function fetchBook() {
    setLoading(true)
    const { data, error } = await supabase.from('books').select('*').eq('id', bookId).single()
    if (error) {
      alert('Error loading book')
      console.error(error)
    } else {
      setBook(data)
      setTitle(data.title)
      setSubtitle(data.subtitle || '')
      setFilename(data.filename || '')
    }
    setLoading(false)
  }

  async function updateBook() {
    setSaving(true)
    const { error } = await supabase.from('books').update({
      title,
      subtitle,
      filename
    }).eq('id', bookId)
    setSaving(false)
    if (error) {
      alert('Failed to update book')
      console.error(error)
    } else {
      alert('Book updated successfully!')
    }
  }

  if (loading) return <p>Loading...</p>
  if (!book) return <p>Book not found.</p>

  return (
    <div style={{ padding: 20 }}>
      <h2>Edit Book</h2>
      <label>Title:<br />
        <input value={title} onChange={e => setTitle(e.target.value)} style={{ width: '100%' }} />
      </label>
      <br /><br />
      <label>Subtitle:<br />
        <input value={subtitle} onChange={e => setSubtitle(e.target.value)} style={{ width: '100%' }} />
      </label>
      <br /><br />
      <label>Filename:<br />
        <input value={filename} onChange={e => setFilename(e.target.value)} style={{ width: '100%' }} />
      </label>
      <br /><br />
      <button onClick={updateBook} disabled={saving}>
        {saving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  )
}
