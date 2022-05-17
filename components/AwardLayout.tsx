import styled from 'styled-components'

import { AwardImg, Indicators, StoreAwards } from './home'

const Section = styled.section`
  width: 1040px;
  margin: 0 auto;
  position: relative;
`

const AwardLayout = () => {
  return (
    <Section>
      <AwardImg delay={0} />
      <Indicators delay={0.1} />
      <StoreAwards delay={0.2} />
    </Section>
  )
}

export default AwardLayout
