import Vue from 'vue'

Vue.filter('currency', (value) => {
  if (typeof value !== 'number') {
    return value
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })

  return formatter.format(value)
})
