export enum valueRoles {
  USER= 'USER',
  ADMIN= 'ADMIN'
}
export enum LOCAL {
  ADMIN= 'admin',
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