// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                },
                containedPrimary: {
                    backgroundColor: 'black',
                    color: 'white',
                },
                containedSecondary: {
                    backgroundColor: '#979797',
                    color: 'white',
                },
            },
        },
    },
});

export default theme;
