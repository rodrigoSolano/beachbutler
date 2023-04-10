// @ts-check
import { useState, useEffect, useMemo } from 'react'

/**
 * Custom hook that manages the state and behavior of a sections header.
 * @returns {{
 *  currentSectionActive: string | null,
 *  onClickSection: (section: {anchor: string}) => void
 * }} An object with a ref for the container element, the id of the active section, and a function to handle section clicks.
 */
export default function useSections() {
  const [currentSectionActive, setCurrentSectionActive] = useState(null)

  /**
   * Handler function for a section click.
   * Scrolls to the corresponding section when a section is clicked.
   * @param {object} _section - The section object with the anchor property.
   */
  const onClickSection = (_section) => {
    const section = document.querySelector(`#${_section.anchor}`)
    const bodyContainer = document.querySelector('#body')

    if (
      section instanceof HTMLElement &&
      bodyContainer instanceof HTMLElement
    ) {
      bodyContainer.scrollTo({
        top: section.offsetTop - 115,
        behavior: 'smooth',
      })
    }
  }

  /**
   * Memoized array of all the section elements.
   * This array is memoized to avoid unnecessary re-renders.
   */
  const sections = useMemo(() => {
    if (typeof window === 'undefined') return []
    return Array.from(document.querySelectorAll('.section'))
  }, [])

  /**
   * Effect hook that sets up an IntersectionObserver to track when sections intersect with the viewport.
   * When an intersection occurs, it sets the currentSectionActive state to the id of the intersecting section.
   */
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSectionActive(entry.target.getAttribute('id'))
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: document.querySelector('#body'),
      rootMargin: '0px',
      threshold: 1,
    })

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [sections])

  return {
    currentSectionActive,
    onClickSection,
  }
}
