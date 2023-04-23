import { CharacterMap } from "./BreadCrumdsModels";


/**
 * Takes an URL String and removes query params and hash params
 * @param url - The URL string
 * @returns The transformed URL string
 *
 */
const getPathFromUrl = (url: string): string => {
  return url.split(/[?#]/)[0]
}

/**
 * Takes a breadcrumb title (from url path) and replaces
 * special chars to more readable chars
 *
 * @param title - The breadcrumb title
 * @param toUpperCase
 * @param replaceCharacterList
 * @param transformLabel
 * @returns The transformed title or the result of the custom transformLabel function
 *
 */
export const convertBreadcrumb = (
  title: string,
  toUpperCase: boolean | undefined,
  replaceCharacterList: Array<CharacterMap> | undefined,
  transformLabel?: ((title: string) => React.ReactNode) | undefined
): React.ReactNode => {
  let transformedTitle = getPathFromUrl(title)

  if (transformLabel) {
    return transformLabel(transformedTitle)
  }

  if (replaceCharacterList) {
    for (let i = 0; i < replaceCharacterList.length; i++) {
      transformedTitle = transformedTitle.replaceAll(replaceCharacterList[i].from, replaceCharacterList[i].to)
    }
  }

  // decode for utf-8 characters and return ascii.
  return toUpperCase ? decodeURI(transformedTitle).toUpperCase() : decodeURI(transformedTitle)
}