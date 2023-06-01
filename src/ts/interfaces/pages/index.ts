export interface IPage {
  path: string
  includes?: { [key: string]: boolean }
  name: {
    eu?: string
    ru?: string
  }
}

// name: string
export interface IPages {
  findPages: () => { [key: string]: IPage }
}