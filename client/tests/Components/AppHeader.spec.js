import { shallowMount } from '@vue/test-utils'
import Component from '@/modules/Shared/components/app-header/app-header.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

describe('AppHeader', () => {
  let wrapper
  const instance = Vue.extend()
  
  beforeEach(() => {
    Vue.use(VueRouter)
    const router = new VueRouter({routes: [
      {path: '/items', name: 'items', component: {render: h => '-'}},
    ]})

    wrapper = shallowMount(Component, {
      instance,
      router,
    })
  })

  it('should be a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should navigate to items route after search', () => {
    wrapper.setData({ model: { search: 'apple' } })
    const spy = jest.spyOn(wrapper.vm, 'search')
    wrapper.vm.search()
    expect(spy).toHaveBeenCalled()
    expect(wrapper.vm.$route.name).toBe('items')
    expect(wrapper.vm.$route.query).toEqual({ search: 'apple'})
  })

  it('should navigate to home route after click on app logo', () => {
    const spy = jest.spyOn(wrapper.vm, 'navigateHome')
    wrapper.vm.navigateHome()
    expect(spy).toHaveBeenCalled()
    expect(wrapper.vm.$route.path).toBe('/')
    expect(wrapper.vm.$route.query).toEqual({})
    spy.mockRestore()
  })
})
