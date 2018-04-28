import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  background-color: red;
  height: 250px;
  width: 100%;
  background-image: url(${props => props.src});
  display: flex;
`

const PhotoMain = styled.div`
  height: 100%;
  width: 50%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  &::after {
    content: " ";
    height: 100%;
    width: 100%;
    border: 5px solid white;
    position: absolute;
  }
`

const PhotoMiniGrid = styled.div`
  background-image: url(${props => props.src});
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`

const PhotoGrid = styled.div`
  background-color: yellow;
  background-image: url(${props => props.src});
  height: 50%;
  width: 50%;
  flex: 0 0 50%;
  background-size: cover;
  background-position: center;
  position: relative;
  &::after {
    content: " ";
    height: 100%;
    width: 100%;
    border: 5px solid white;
    position: absolute;
  }
`

const PhotoGallery = ({ photos }) => {
  return (
    <Wrapper>
      <PhotoMain src={photos[0]} />
      <PhotoMiniGrid>
        <PhotoGrid src={photos[1]} />
        <PhotoGrid src={photos[2]} />
        <PhotoGrid src={photos[3]} />
        <PhotoGrid src={photos[4]} />
      </PhotoMiniGrid>
    </Wrapper>
  )
}

PhotoGallery.propTypes = {
  photos: PropTypes.array.isRequired,
}

export default PhotoGallery
