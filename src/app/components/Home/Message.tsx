import { useState, useEffect } from 'react'

interface MessageProps {
  type: string
  msg: string
}

export default function Message({ type, msg }: MessageProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return
    }

    setVisible(true)

    setTimeout(() => {
      setVisible(false)
    }, 3000)
  }, [msg])

  return (
    <>
      {visible && (
        <div
          className="w-5/6 p-4 border border-green-700 mx-auto text-center mb-8 rounded-md text-green-600 bg-green-300"
          id={type}
        >
          {msg}
        </div>
      )}
    </>
  )
}
