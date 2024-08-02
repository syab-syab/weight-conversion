import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  background: #E90074;
  color: white;
`

const Title = styled.a`
  color: white;
  margin: 0;
  text-decoration: none;
  font-size: 4rem;
`


const Header = () => {
  return (
    <Wrapper>
      <Title href='https://homemade-apps.vercel.app/' target='_blank'>
        重さ変換
      </Title>
    </Wrapper>
  )
}

export default Header