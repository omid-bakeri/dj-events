import styled from "styled-components";

const Button = styled.button`
  background-color: cornflowerblue;
  color: white;
  border: 2px solid #10b3ef;
  outline: none;
  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 20px;
`

function StyledButton(){
    return <Button/>;
}

export default Button

