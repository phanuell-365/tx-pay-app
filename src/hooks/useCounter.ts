import { useState, useCallback } from 'react'

export interface UseCounterOptions {
  initialValue?: number
  min?: number
  max?: number
}

export const useCounter = (options: UseCounterOptions = {}) => {
  const { initialValue = 0, min, max } = options
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => {
    setCount(prev => {
      const newValue = prev + 1
      if (max !== undefined && newValue > max) return prev
      return newValue
    })
  }, [max])

  const decrement = useCallback(() => {
    setCount(prev => {
      const newValue = prev - 1
      if (min !== undefined && newValue < min) return prev
      return newValue
    })
  }, [min])

  const reset = useCallback(() => {
    setCount(initialValue)
  }, [initialValue])

  const setValue = useCallback((value: number) => {
    setCount(prev => {
      if (min !== undefined && value < min) return prev
      if (max !== undefined && value > max) return prev
      return value
    })
  }, [min, max])

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  }
}
