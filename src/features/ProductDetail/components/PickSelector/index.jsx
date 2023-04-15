import { useState } from 'react'
import { List, Stack } from '@mui/material'
import {
  Collapse,
  CollapseHeader,
  CollapseTitle,
  CollapseSubtitle,
  CollapseButton,
  CollapseContent,
} from 'components/Collapse'
import RadioButtonListItem from 'components/RadioButtonListItem'

export default function PickSelector({
  title = 'Pick one',
  options = [],
  maxQuantity = 1,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState([])

  const handleToggle = () => setIsOpen(!isOpen)

  const handleSelect = (option) => setSelectedOption(option)

  return (
    <Collapse>
      <CollapseHeader onClick={handleToggle}>
        <Stack direction="column">
          <CollapseTitle title={title} />
          <CollapseSubtitle subtitle={`Pick ${maxQuantity} (required)`} />
        </Stack>
        <CollapseButton isOpen={isOpen} onClick={handleToggle} />
      </CollapseHeader>
      <CollapseContent isOpen={isOpen}>
        <List
          sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
          disablePadding
        >
          {options.map((option) => (
            <RadioButtonListItem
              key={option.name}
              title={option}
              onClick={() => handleSelect(option)}
              isChecked={selectedOption.includes(option)}
            />
          ))}
        </List>
      </CollapseContent>
    </Collapse>
  )
}
