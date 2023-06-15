import { IRequestMethod } from "@/shared/types"
import { listeners } from "./listeners"

export interface IRequestProps {
  query?: { [key: string]: any }
  body?: { [key: string]: any }
  headers?: { [key: string]: any }
}

const InternalServerError = () => ({
  statusCode: 500,
  message: "Internal Server Error"
})

const BadRequestError = () => ({
  statusCode: 400,
  message: "Bad Request"
})

export async function request(
  url: string,
  method: IRequestMethod = "GET",
  props?: IRequestProps
) {
  listeners.onStatus({ status: "pending" })
  
  try {
    const body = props?.body ? JSON.stringify(props?.body) : undefined
    const headers = props?.headers || {}

    const data: { response: any } = {
      response: false
    }

    try {
      data.response = await fetch(url, {
        method, headers, body
      })
    } catch(err) {
      listeners.onStatus({ status: "rejected" })
      listeners.onError(InternalServerError())
      return null
    }

    try {
      const result = await data.response.json()
      listeners.onStatus({ status: "fulfilled" })

      return result || null
    } catch(err) {
      const result = data.response
      listeners.onStatus({ status: "fulfilled" })

      return result || null
    }
  } catch(err) {
    listeners.onStatus({ status: "rejected" })
    listeners.onError(BadRequestError())
  }
}