import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";
export default function Practice() {
  const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  50%{
    transform: rotate(180deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;
  const RootDiv = styled.div`
    width: 98vw;
    height: 98vh;
    background-color: skyblue;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const AppHeader = styled.header``;

  const AppLogo = styled.img`
    height: auto;
    width: 30vw;
    animation: ${rotate} 5s linear infinite;
  `;

  const MyA = styled.a`
    color: red;
  `;

  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
