import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook that listens for scrolling events and applies styles to a provided ref element when a minimum scroll position is reached.
 * @param {React.MutableRefObject<HTMLElement>} ref - The ref object for the element to apply styles to.
 * @param {number} [minScroll=0] - The minimum scroll position required to apply styles.
 * @param {object} [styles={}] - The styles to apply when the minimum scroll position is reached.
 */
export default function useScrollListener(ref, minScroll = 0, styles = {}) {
  const [bodyContainer, setBodyContainer] = useState(null)

  const handleScroll = useCallback(() => {
    if (bodyContainer.scrollTop > minScroll) {
      Object.entries(styles).forEach(([property, value]) => {
        const refCurrent = ref.current
        if (refCurrent) {
          refCurrent.style[property] = value
        }
      })
    } else {
      Object.keys(styles).forEach((property) => {
        const refCurrent = ref.current
        if (refCurrent) {
          refCurrent.style[property] = ''
        }
      })
    }
  }, [bodyContainer?.scrollTop, minScroll, ref, styles])

  useEffect(() => {
    if (typeof window === 'undefined') return () => {}
    const body = document.querySelector('#body')
    setBodyContainer(body)
    return () => {}
  }, [])

  useEffect(() => {
    if (!bodyContainer) return () => {}

    bodyContainer.addEventListener('scroll', handleScroll)

    return () => {
      bodyContainer.removeEventListener('scroll', handleScroll)
    }
  }, [ref, minScroll, styles, bodyContainer, handleScroll])
}
