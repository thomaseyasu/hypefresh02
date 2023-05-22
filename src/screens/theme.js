/*
export const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
}

*/


import Allstyle from './allstyle';

const theme = {

    light: {
        theme: "DefaultTheme",
        IconColor: "black",
        bottomTabBG: "white",
        color: "black",
        background: Allstyle.container.backgroundColor
    },
    dark: {
        theme: "DarkTheme",
        color: "white",
        IconColor: "white",
        bottomTabBG: "black",
        background: "black"
    },

}

export default theme;