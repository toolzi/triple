import type { NextPage } from 'next'
import styled from 'styled-components'

import AwardLayout from '../components/AwardLayout'

const Div = styled.div`
  min-width: 1200px;
  background-color: #fff;
`

const Home: NextPage = () => {
  return (
    <Div>
      <AwardLayout />
    </Div>
  )
}

export default Home
