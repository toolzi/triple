import styled from 'styled-components'

const BgDiv = styled.div<{ src: string }>`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0 5px 62px;
  font-size: 14px;
  line-height: 22px;
  display: inline-block;
  background-image: url(${({ src }) => src});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;

  &:not(:last-child) {
    margin-right: 39px;
  }
`

interface AwardProps {
  present: string
  title: string
  imageSrc: string
}

const StoreAward = ({ present, title, imageSrc }: AwardProps) => {
  return (
    <BgDiv src={imageSrc}>
      {present}
      <br />
      {title}
    </BgDiv>
  )
}

export default StoreAward
