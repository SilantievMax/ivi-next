export interface CharacterMap {
  /** The source character or character pattern that should be replaced (e.g. 'ae') */
  from: string
  /** The replacement into which the character should be replaced. */
  to: string
}

export interface BreadcrumbsProps {
  /** The title for the very first breadcrumb pointing to the root directory. Example: '/' Default: 'HOME' */
  rootLabel?: string | null
  /** Boolean indicator whether the root label should be omitted. Example: true Default: false */
  omitRootLabel?: boolean
  /** Boolean indicator if the labels should be displayed as uppercase. Example: true Default: false */
  labelsToUppercase?: boolean | undefined
  /** Array containing a list of specific characters that should be replaced in the label. This can be useful to convert special characters such as vowels. Example: [{ from: 'ae', to: 'ä' }, { from: '-', to: ' '}] Default: [{ from: '-', to: ' ' }] */
  replaceCharacterList?: Array<CharacterMap> | undefined
  /** A transformation function that allows to customize the label strings. Receives the label string and has to return a string or React Component */
  transformLabel?: ((title: string) => React.ReactNode) | undefined
  /** Array containing all the indexes of the path that should be omitted and not be rendered as labels. If we have a path like '/home/category/1' then you might want to pass '[2]' here, which omits the breadcrumb label '1'. Indexes start with 0. Example: [2] Default: undefined */
  omitIndexList?: Array<number> | undefined
  /** An inline style object for the inactive breadcrumb list item */
  inactiveItemStyle?: any | null
  /** Classes to be used for the inactive breadcrumb list item */
  inactiveItemClassName?: 'point' | 'slash' |''
  /** An inline style object for the active breadcrumb list item */
  activeItemStyle?: any | null
  /** Classes to be used for the active breadcrumb list item */
  activeItemClassName?: 'slash' | 'point'| ''
}

export interface Breadcrumb {
  /** Breadcrumb title. Example: 'blog-entries' */
  breadcrumb: string
  /** The URL which the breadcrumb points to. Example: 'blog/blog-entries' */
  href: string
}

