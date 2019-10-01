import { shallowMount } from '@vue/test-utils'
import Component from '@/modules/Items/submodules/List/components/item-card/item-card.vue'
import currencyFilter from '@/filters/currencyFilter'
import VueRouter from 'vue-router'
import Vue from 'vue'

describe('ItemsCard', () => {
  let wrapper
  const instance = Vue.extend()
  
  beforeEach(() => {
    Vue.use(VueRouter)
    const router = new VueRouter({routes: [
      {path: '/items', name: 'items', component: {render: h => '-'}},
      {path: '/items/:id', name: 'items.details', component: {render: h => '-'}},
    ]})

    wrapper = shallowMount(Component, {
      instance,
      router,
      filter: currencyFilter,
      propsData: {
        item: {
          id: 1,
          title: 'Component title',
          price: {
            ammount: 1,
            currency: 'USD',
            decimals: 123,
          },
          picture: '',
          condition: 'new',
          free_shipping: false,
        }
      }
    })
  })

  it('should be a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should navigate to item details route after search', () => {
    const spy = jest.spyOn(wrapper.vm, 'navigateToDetails')
    wrapper.vm.navigateToDetails()
    expect(spy).toHaveBeenCalled()
    expect(wrapper.vm.$route.name).toBe('items.details')
    expect(wrapper.vm.$route.params).toEqual({ id: 1})
  })
})
