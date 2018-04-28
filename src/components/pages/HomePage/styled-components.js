import styled from 'styled-components'
import { Avatar } from 'components'

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1350px;
  margin: 0 auto;
`

const Banner = styled.div`
  background-image: url(${props => props.src});
  min-height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  display: flex;
`

const OrgInfo = styled.div`
  padding: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: linear-gradient(to left, rgba(0,0,0,0.85) 0%,rgba(0,0,0,0) 100%);
  color: white;
  box-sizing: border-box;
  justify-content: center;
  @media(min-width: 720px) {
    margin-left: auto;
    width: 60%;
  }
`

const Goal = styled.span`
  font-size: 3.25em;
  color: white;
  margin-bottom: 10px;
  text-align: right;
  span {
    font-weight: bold;
  }
`

const Hr = styled.hr`
  width: 30%;
  margin: 20px 0;
`

const Title = styled.h1`
  font-size: 3.25em;
  margin: 0;
  text-align: right;
`

const Description = styled.p`
  font-size: 20px;
  margin: 0;
  margin-top: 15px;
  margin-bottom: 30px;
  text-align: right;
  padding-left: 50px;
  width: 100%;
  box-sizing: border-box;
  @media(min-width: 720px) {
    margin-left: auto;
    max-width: 500px;
  }
`

const ButtonDonate = styled.div`
  background: linear-gradient(to right,#6659ba 0%,#2bc4ff 100%,#2ccad3 100%);
  padding: 15px 25px;
  text-align: center;
  border-radius: 100px;
  font-size: 1.25em;
  font-weight: bold;
  cursor: pointer;
  color: white;
`

const Content = styled.div`
  font-size: 1.25em;
  margin-top: 25px;
`

const Sidebar = styled.div`
  flex: 0 0 400px;
  margin-top: 25px;
  margin-left: 0;
  @media(min-width: 1024px) {
    margin-left: 50px;
  }
`

const Owner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0 0px 10px rgba(0,0,0,0.19);
  height: fit-content;
`

const Information = styled.div`
  padding: 0 25px 25px 25px;
  box-sizing: border-box;
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  flex-direction: column;
  @media(min-width: 1024px) {
    flex-direction: row;
  }
`

const Donator = styled(Avatar)`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid lightgray;
`
export {
  Section,
  Banner,
  OrgInfo,
  Goal,
  Hr,
  Title,
  Description,
  ButtonDonate,
  Content,
  Sidebar,
  Owner,
  Information,
  Donator,
}
