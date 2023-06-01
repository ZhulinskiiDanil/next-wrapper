export interface IPage {
  path: string
  includes?: { [key: string]: boolean }
}

// name: string
export interface IPages {
  findPages: () => { [key: string]: IPage }
}