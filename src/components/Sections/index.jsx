import { useRef } from 'react'
import { Typography } from '@mui/material'

import useScrollListener from 'hooks/useScrollListener'
import useSections from './useSections'

import { Wrapper, Container, SectionContainer } from './styles'

export default function Sections({ sections = [] }) {
  const ref = useRef(null)
  const { currentSectionActive, onClickSection } = useSections()

  const styles = { backgroundColor: 'white' }

  useScrollListener(ref, 155, styles)

  const isActive = (section) => currentSectionActive === section.anchor

  return (
    <Wrapper ref={ref}>
      <Container>
        {sections.map((section) => (
          <SectionContainer
            key={section.id}
            onClick={() => onClickSection(section)}
            isActive={isActive(section)}
          >
            <Typography variant="body1" sx={{ color: 'inherit' }}>
              {section.label}
            </Typography>
          </SectionContainer>
        ))}
      </Container>
    </Wrapper>
  )
}
