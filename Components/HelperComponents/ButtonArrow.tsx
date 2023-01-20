import React from 'react';
import styled from "styled-components";
import styles from './styles.module.css'
const ButtonSwipe = styled.button`
  position: relative;
  width: 99%;
  height: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0C102D;
  border-radius: 8px;
  &::before {
    position: absolute;
    content: "";
    display: flex;
    border-radius: 8px;
    z-index: -1;
    top: -2px;left: -2px; bottom: -2px; right: -2px;
    background: linear-gradient(rgba(21, 191, 253, 0.7),
    rgba(156, 55, 253, 0.7));
  }
`


interface ButtonInterface {
    children:JSX.Element,
    w?:string
    h?:string
    onClick?: () => void
}
const ButtonArrow = ({children,w,h,onClick}:ButtonInterface) => {
    const width = w ? w : 40
    const height = h ? h : 40
    return (
        <div className={styles.ButtonArrow} style={{width,height}}>
            <ButtonSwipe onClick={onClick}>{children}</ButtonSwipe>
        </div>
    );
};

export default ButtonArrow;