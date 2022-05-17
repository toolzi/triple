import { motion } from 'framer-motion'
import styled from 'styled-components'

import { fadeIn } from '../../animations/fadeIn'

import StoreAward from './StoreAward'

const Div = styled(motion.div)`
  margin: 50px 0 140px 623px;
  white-space: nowrap;
`

interface StoreAwardsProps {
  delay: number
}

const StoreAwards = ({ delay }: StoreAwardsProps) => {
  return (
    <Div {...fadeIn({ delay })}>
      <StoreAward
        present="2018 구글 플레이스토어"
        title="올해의 앱 최우수상 수상"
        imageSrc="/assets/play-store.png"
      />
      <StoreAward
        present="2018 애플 앱스토어"
        title="오늘의 여행앱 선정"
        imageSrc="/assets/badge-apple.png"
      />
    </Div>
  )
}

export default StoreAwards
