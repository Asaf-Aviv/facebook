import React, { useRef } from 'react'
import styled from 'styled-components'

interface Toggler {
  checked: boolean
  onChange: () => void
}

const Toggler: React.FC<Toggler> = ({ checked, onChange }) => {
  const checkboxRef = useRef<HTMLInputElement>(null)

  const forwardClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.click()
    }
  }

  return (
    <>
      <Input
        ref={checkboxRef}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <StyledToggler onClick={forwardClick} />
    </>
  )
}


const StyledToggler = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.75rem / 50%;
  content: "";
  cursor: pointer;
  display: inline-block;
  height: 1.5rem;
  position: relative;
  transition: background 500ms ease;
  width: 3rem;
  &::before {
    content: "";
    display: block;
    height: .3rem;
    left: 0.75rem;
    position: absolute;
    top: .7rem;
    transform: translate3d(-50%,-50%,0) rotate(-45deg);
    width: .7rem;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
  }
  &::after {
    bottom: .15rem;
    content: "";
    display: block;
    left: .3rem;
    position: absolute;
    top: .15rem;
    transition: left 250ms ease;
    width: 1.15rem;
    background: #FFF;
    border-radius: 50%;
  }
`

const Input = styled.input`
  display: none;
  &:checked + ${StyledToggler} {
    background: #517bd3;
    &::after {
      left: 1.575rem;
    }
  }
`

export default Toggler
