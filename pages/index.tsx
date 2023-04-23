
import { useEffect, useState } from 'react'

interface HelloResponse {
  message: string
}

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello')
      const data: HelloResponse = await response.json()
      setMessage(data.message)
    }
  
    fetchData()
  
    return () => {
      // Aquí puedes poner cualquier limpieza que necesites hacer
      // cuando el componente se desmonte.
    }
  }, [])

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}