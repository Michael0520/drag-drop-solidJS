import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import DragAndDrop from '~/components/drag-and-drop.vue'

describe('component of TheCounter.vue', () => {
  it('should render', () => {
    const wrapper = mount(DragAndDrop)
    expect(wrapper.find('.container').exists()).toBe(true)
    expect(wrapper.find('.slot.a').exists()).toBe(true)
    expect(wrapper.find('.second-row').exists()).toBe(true)
    expect(wrapper.find('.slot.d').exists()).toBe(true)

    // 檢查項目
    expect(wrapper.find('.item.a').text()).toBe('A')
    expect(wrapper.find('.item.c').text()).toBe('C')
    expect(wrapper.find('.item.d').text()).toBe('D')
  })
})
