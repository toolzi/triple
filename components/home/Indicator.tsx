import styled from 'styled-components'

import useIncrementingCount from '../../hooks/useIncrementingCount'

const Div = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`

interface StrengthCountProps {
  totalCount: number
  unit: string
  subject: string
}

const Indicator = ({ totalCount, unit, subject }: StrengthCountProps) => {
  const { count } = useIncrementingCount(totalCount)

  return (
    <Div>
      <strong>
        {count}
        {unit}
      </strong>
      의 {subject}
    </Div>
  )
}

export default Indicator
