import styled from 'styled-components'
import '../../styles/SCSSVariables.module.scss';

export const H1 = styled.h1`
  font-family: 'Clash Display', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 150px;
  line-height: 120%;
  color: #fff;
`
export const H2 = styled.h2`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Clash Display',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 120%;
  max-width: 650px;
  text-align: center;
  
`
export const H3 = styled.h3`
  font-family: 'Clash Display',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  text-align: center;
  color: #FFFFFF;
`
export const H4 = styled.h4`
  font-family: 'Clash Display',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  color: #FFFFFF;
`
export const P = styled.p`
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #FFF;
  font-size: 16px;
  line-height: 140%;
`

export const P1 = styled.p`
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */


  /* Clean */

  color: #FFFFFF;
`
export const Ellipse = styled.div`
  position: absolute;
  display: block;
  width: 356px;
  height: 356px;
  pointer-events: none;
  z-index: 5;
  background: #2A3E84;
  filter:blur(175px)
`

export const Button = styled.button`
  background: linear-gradient(145deg,rgba(31, 242, 255, 1),
  rgba(39, 249, 229, 1),
  rgba(47, 255, 205, 1)) ;
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #0A1482;
`