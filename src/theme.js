import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#000",
  textColor: "#fff",
  headingColor: "lightblue",
  colorButton: "#26a69a",
  backgroundButton: "transparent",
  backgroundModal: "rgba(255, 255, 255, 0.3)",
};

export const lightTheme = {
  body: "#fff",
  textColor: "#000",
  headingColor: "#d23669",
  colorButton: "#fff",
  backgroundButton: "#26a69a",
  backgroundModal: "rgba(0, 0, 0, 0.3)",
};

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textColor};
  transition: .3s ease;
 }
 h2{
   color: ${(props) => props.theme.headingColor};
 }
 button{
   background-color: ${(props) => props.theme.backgroundButton};
   color: ${(props) => props.theme.colorButton};
 }
input{
  color: ${(props) => props.theme.textColor};
}
 .modal{
   background-color: ${(props) => props.theme.backgroundModal};
 }
 .content{
   background-color: ${(props) => props.theme.body};
 }
`;
