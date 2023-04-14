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
import CheckboxListItem from 'components/CheckboxListItem'

export default function PickMultipleSelector({
  title = 'Pick two',
  options = [],
  maxQuantity = 2,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleToggle = () => setIsOpen(!isOpen)

  const handleSelect = (option) => {
    if (selectedOptions.includes(option))
      setSelectedOptions(selectedOptions.filter((item) => item !== option))
    else
      setSelectedOptions([...selectedOptions.slice(-maxQuantity + 1), option])
  }

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
            <CheckboxListItem
              key={option.name}
              title={option}
              onClick={() => handleSelect(option)}
              isChecked={selectedOptions.includes(option)}
            />
          ))}
        </List>
      </CollapseContent>
    </Collapse>
  )
}
