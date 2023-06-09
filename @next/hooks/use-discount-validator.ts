import { useState } from 'react'
import { DISCOUNT_CODES } from '@constants'
import { useSnackbar } from 'notistack'
import { DiscountCodeTypes } from '@types'

export const useDiscount = (): any => {
  const { enqueueSnackbar } = useSnackbar()
  const [discountedAmount, setDiscountedAmount] = useState(0)
  const calculateDiscountedAmount = (
    totalPrice: number,
    discountCode: DiscountCodeTypes
  ): void => {
    setDiscountedAmount(0)
    if (!discountCode) return
    if (discountCode && DISCOUNT_CODES[discountCode] && totalPrice) {
      const discountFactor = 1 - DISCOUNT_CODES[discountCode]
      const discountAmount = totalPrice * DISCOUNT_CODES[discountCode]
      totalPrice *= discountFactor
      setDiscountedAmount(discountAmount)
    } else {
      setDiscountedAmount(0)
      enqueueSnackbar('Invalid Code!', {
        variant: 'error'
      })
    }
  }

  return { discountedAmount, calculateDiscountedAmount }
}
