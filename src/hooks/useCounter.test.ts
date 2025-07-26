import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('initializes with default value of 0', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.count).toBe(0)
  })

  it('initializes with custom initial value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }))

    expect(result.current.count).toBe(5)
  })

  it('increments count', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })

  it('decrements count', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 1 }))

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(0)
  })

  it('respects maximum value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5, max: 5 }))

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(5)
  })

  it('respects minimum value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0, min: 0 }))

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(0)
  })

  it('resets to initial value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 3 }))

    act(() => {
      result.current.increment()
      result.current.increment()
    })

    expect(result.current.count).toBe(5)

    act(() => {
      result.current.reset()
    })

    expect(result.current.count).toBe(3)
  })

  it('sets value directly', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.setValue(10)
    })

    expect(result.current.count).toBe(10)
  })

  it('does not set value outside bounds', () => {
    const { result } = renderHook(() => useCounter({ min: 0, max: 10 }))

    act(() => {
      result.current.setValue(-5)
    })

    expect(result.current.count).toBe(0)

    act(() => {
      result.current.setValue(15)
    })

    expect(result.current.count).toBe(0)
  })
})
