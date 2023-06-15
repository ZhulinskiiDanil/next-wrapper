import { IStatus } from "@shared/types"

export type IListenerProps = { [key: string]: any }
export type IListener = (props: IListenerProps) => any
export interface IListeners {
  onStatus: (props: { status: IStatus }) => void
  onError: (props: any) => void
}

export const listeners: IListeners = {
  onStatus({ status }) {
    console.log(status);
  },
  onError(data) {
    console.log(data);
  }
}

export function createListener(
  listenerName: "onStatus",
  listener: (props: { status: IStatus }) => void
): void
export function createListener(
  listenerName: "onError",
  listener: (props: any) => void
): void
export function createListener(
  listenerName: "onStatus" | "onError",
  listener: (props: any) => void
) {
  listeners[listenerName as unknown as keyof IListeners] = listener || (() => {})
}