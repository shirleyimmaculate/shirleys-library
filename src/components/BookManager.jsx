import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function BookManager() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBooks()
  }, [])

  async function fetchBooks() {
    setLoading(true)
    const { data, error } = await supabase.from('books').select('*')
    if (error) {
      console.error('Error fetching books:', error)
    } else {
      setBooks(data)
    }
    setLoading(false)
  }

  return (
    <div>
      <h3>📚 Your Books</h3>
      {loading && <p>Loading books...</p>}
      {!loading && books.length === 0 && <p>No books found.</p>}
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ marginBottom: '10px' }}>
            <strong>{book.title}</strong><br />
            <em>{book.subtitle}</em>
          </li>
        ))}
      </ul>
    </div>
  )
}
