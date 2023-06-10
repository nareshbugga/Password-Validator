// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  background-color: #383a4e;
  background-size: cover;
  width: 50%;
  height: 500px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
`
export const TextLine = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ef4444;
  font-weight: bold;
`
export const Input = styled.input`
  width: 50%;
  height: 40px;
  outline: none;
`
