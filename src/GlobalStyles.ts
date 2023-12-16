import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Sbutton = styled.button`
  border-radius: 4px;
  background-color: #0766ad;
  color: white;
  padding: 8px 40px;
  border: none;
  margin: 2px;
`;
const Ssection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  border: 2px solid black;
  border-radius: 4px;
  margin: 10px auto;
  padding: 8px 4px;
`;

const SflexContainer = styled.div`
  display: flex;
  margin: 2px;
`;

export { GlobalStyles as default, Sbutton, Ssection, SflexContainer };
