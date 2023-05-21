export enum valueRoles {
  USER= 'USER',
  ADMIN= 'ADMIN'
}
export enum LOCAL {
  TOKEN= 'token',
  USER= 'user',
  ACCSESS= 'accessToken',
  REFRSH= 'accessToken'
}
interface IRoles {
  value: valueRoles
}

export interface IUser {
  login: string
  email: string
  password: string
  roles: IRoles[]
}

export interface IAuthResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}