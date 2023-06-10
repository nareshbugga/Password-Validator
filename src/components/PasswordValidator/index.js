import {useState} from 'react'
import {
  MainContainer,
  Container,
  Heading,
  TextLine,
  ErrorMsg,
  Input,
} from './styledComponents'

const PasswordValidator = () => {
  const [res, setRes] = useState('')
  const onChangeValue = event => {
    setRes(event.target.value)
  }

  return (
    <MainContainer>
      <Container>
        <Heading>Password Validator</Heading>
        <TextLine>Check how strong and secure is your password</TextLine>
        <Input onChange={onChangeValue} type="password" />
        <>
          {res.length <= 8 && (
            <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
          )}
        </>
      </Container>
    </MainContainer>
  )
}

export default PasswordValidator
