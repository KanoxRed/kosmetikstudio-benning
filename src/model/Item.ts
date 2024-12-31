export interface Item {
  title: string
  img: string
  description: string
  price: string
  duration?: string
  subItems?: Item[]
}
