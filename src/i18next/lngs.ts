export const lngs: ILengs = {
  ru: { nativeName: 'Ru' },
  en: { nativeName: 'En' },
  
}

export interface ILengs  {
  [key: string]: any
  ru: { nativeName: string }
  en: { nativeName: string }
}