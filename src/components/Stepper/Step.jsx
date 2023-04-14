import { StepCircle, StepLine } from './styles'

export default function Step({ status }) {
  return (
    <>
      <StepCircle status={status} />
      <StepLine status={status} />
    </>
  )
}
