export type DiscountCodeTypes = '10OFF' | '20OFF'
export type PromoCodeTypes = '50HamOFF' | '50ChilliOFF'
export type BurgerSizeTypes = 's' | 'm' | 'l'
export interface BurgerDetailTypes {
  burgerType: string
  burgerSize: BurgerSizeTypes
}
export interface ItemListType {
  name: string
  price: number
  size: string
  image?: string
}
