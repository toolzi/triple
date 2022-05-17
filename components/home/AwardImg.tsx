import { motion } from 'framer-motion'
import styled from 'styled-components'

import { fadeIn } from '../../animations/fadeIn'

const BgDiv = styled(motion.div)`
  background-image: url(/assets/triple.png);
  background-repeat: no-repeat;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
`

interface AwardImgProps {
  delay: number
}

const AwardImg = ({ delay = 0 }: AwardImgProps) => {
  return <BgDiv {...fadeIn({ delay })}>2021년 12월 기준</BgDiv>
}

export default AwardImg
