import { motion } from 'framer-motion'
import styled from 'styled-components'

import { fadeIn } from '../../animations/fadeIn'

import Indicator from './Indicator'

const Div = styled(motion.div)`
  margin-left: 623px;
  padding-top: 150px;
`

interface IndicatorsProps {
  delay: number
}

const Indicators = ({ delay }: IndicatorsProps) => {
  return (
    <Div {...fadeIn({ delay })}>
      <Indicator totalCount={350} unit="만 명" subject="여행자" />
      <Indicator totalCount={21} unit="만 개" subject="여행 리뷰" />
      <Indicator totalCount={650} unit="만 개" subject="여행 일정" />
    </Div>
  )
}

export default Indicators
