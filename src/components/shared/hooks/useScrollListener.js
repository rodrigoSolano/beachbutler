// @ts-check
/* eslint-disable */
import { useEffect } from 'react'

/**
 * Custom hook that listens for scrolling events and applies styles to a provided ref element when a minimum scroll position is reached.
 * @param {React.MutableRefObject<HTMLElement>} ref - The ref object for the element to apply styles to.
 * @param {number} [minScroll=0] - The minimum scroll position required to apply styles.
 * @param {object} [styles={}] - The styles to apply when the minimum scroll position is reached.
 */
export default function useScrollListener(ref, minScroll = 0, styles = {}) {
  useEffect(() => {
    const handleScroll = () => {
      const bodyContainer = document.querySelector('#body')
      if (bodyContainer.scrollTop > minScroll) {
        Object.entries(styles).forEach(([property, value]) => {
          ref.current.style[property] = value
        })
      } else {
        Object.keys(styles).forEach(
          (property) => (ref.current.style[property] = '')
        )
      }
    }

    const bodyContainer = document.querySelector('#body')
    bodyContainer.addEventListener('scroll', handleScroll)

    return () => {
      bodyContainer.removeEventListener('scroll', handleScroll)
    }
  }, [ref, minScroll, styles])
}
