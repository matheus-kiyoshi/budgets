'use client'
import styled from 'styled-components'

interface MenuProps {
  $isClicked: boolean
}

export const MenuButton = styled.button<MenuProps>`
  background: #fff;
  position: relative;
  display: block;
  width: 30px;
  height: 2px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #fff;
    display: block;
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in-out;
  }

  &::before {
    top: -10px;
    ${({ $isClicked }) =>
      $isClicked &&
      `
      top: 0;
      transform: rotate(45deg);
    `}
  }

  &::after {
    bottom: -10px;
    ${({ $isClicked }) =>
      $isClicked &&
      `
      bottom: 0;
      transform: rotate(-45deg);
    `}
  }

  &:not(:disabled) {
    ${({ $isClicked }) =>
      $isClicked ? 'background: transparent;' : `background: #fff;`}
  }
`
