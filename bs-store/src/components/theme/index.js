import { createTheme } from "@mui/material";

// const theme1 = createTheme({
//   palette: {
//     primary: blue,
//   },
// });

// const theme2 = createTheme({
//   palette: {
//     primary: green,
//   },
// });

// const theme3 = createTheme({
//   palette: {
//     primary: red,
//   },
// });

const darkTheme = createTheme({
  palette: {
    mode:'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode:'light'
  },
});

export {darkTheme, lightTheme } 