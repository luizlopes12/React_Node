import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}
body{
    background-color: #FAFAFB;
}
`

export default GlobalStyles