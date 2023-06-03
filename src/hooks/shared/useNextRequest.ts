import { useState } from "react"

export function useNextRequest() {
  const [data, setData] = useState({
    data: false,
    loading: false
  })

  async function request() {

  }

  return [request]
}