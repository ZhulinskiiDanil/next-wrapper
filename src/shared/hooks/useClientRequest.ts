import { useState } from "react"
import { request } from './utils/request'
import { createListener } from "./utils/listeners"
import { IStatus } from "@shared/types"

interface IDataState {
  data: any
  status: IStatus
}

export function useClientRequest(): [typeof request, IStatus] {
  const [data, setData] = useState<IDataState>({
    data: false,
    status: "pending"
  })

  function setStatus(status: IStatus) {
    if (data.status !== status) {
      setData(pre => ({ ...pre, status }))
    }
  }

  createListener("onStatus", ({ status }) => {
    setStatus(status)
  })

  createListener("onError", ({ status }) => {
    setStatus(status)
  })

  return [request, data.status]
}