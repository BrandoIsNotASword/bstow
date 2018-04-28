import styled from 'styled-components'

const ProgressBar = styled.div`
  border: 1px solid white;
  width: 50%;
  height: 10px;
  border-radius: 100px;
  position: relative;
  margin-bottom: 10px;
  &:after {
    content: " ";
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(to right,#6659ba 0%,#2bc4ff 100%,#2ccad3 100%);
    position: absolute;
    border-radius: 100px;
  }
`

export default ProgressBar
