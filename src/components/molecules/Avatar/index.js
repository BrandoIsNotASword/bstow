import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.div`
  background-image: url(${props => props.src});
  border-radius: 100%;
  height: 60px;
  width: 60px;
  background-position: center;
  background-size: cover;
`

const Name = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-weight: bold;
  font-size: 1.25em;
  span {
    font-weight: normal;
  }
`

const Avatar = ({ className, src, name, description }) => {
  return (
    <Wrapper className={className}>
      <Image src={src} />
      <Name>{name} <span>{description}</span></Name>
    </Wrapper>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Avatar
