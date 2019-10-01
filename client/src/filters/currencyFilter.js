import Vue from 'vue'
import { CURRENCIES } from '../main/constants'

Vue.filter('currency', (value, currency) => {
  if (typeof value !== 'number') {
    return value
  }

  const locale = CURRENCIES.find(item => item.key === currency)

  const formatter = new Intl.NumberFormat(locale.value, {
    style: 'currency',
    currency: locale.key,
    minimumFractionDigits: 2,
  })

  return formatter.format(value)
})
