import { useEffect, useState } from 'react'

const msTarget = 2000
const breakpoints = {
  ms: 900,
  count: 6,
}

const useIncrementingCount = (totalCount: number): { count: number } => {
  const [count, setCount] = useState(0)
  const countTarget = totalCount - breakpoints.count

  useEffect(() => {
    const fastCountInterval = setInterval(() => {
      if (count < countTarget) {
        setCount((prev: number) => prev + 1)
      }
    }, (msTarget - breakpoints.ms) / totalCount)

    const slowCountInterval = setInterval(() => {
      if (countTarget <= count && count < totalCount) {
        setCount((prev: number) => prev + 1)
      }
    }, breakpoints.ms / breakpoints.count)

    return () => {
      clearInterval(fastCountInterval)
      clearInterval(slowCountInterval)
    }
  }, [count, countTarget, totalCount])

  return { count }
}

export default useIncrementingCount
