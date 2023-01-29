import { useState, useEffect } from 'react'
import { pixPayload } from './pixPayload'

export function usePixPayload(params) {
  const [result, setResult] = useState(['', null])
  useEffect(() => {
    try {
      setResult([pixPayload(params), null])
    } catch (e) {
      setResult(['', e])
    }
  }, [params])
  return result
}