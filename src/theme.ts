import {
    makeStaticStyles,
    makeStyles,
    shorthands,
    tokens,
    createDarkTheme,
    createLightTheme,
    BrandVariants,
    Theme,
  } from "@fluentui/react-components";
  
export interface ContentProps {
    lightTheme: Theme;
    darkTheme: Theme;
}
  
export const useStaticStyles = makeStaticStyles({
    body: {
        position: "fixed",
        margin: "0px",
        top: "0px",
        left: "0px",
        height: "100vh"
    }
});

const snoggit: BrandVariants = { 
      10: "#050204",
      20: "#21121F",
      30: "#391B36",
      40: "#4C2149",
      50: "#60275C",
      60: "#752D71",
      70: "#8B3386",
      80: "#A1389B",
      90: "#B73EB1",
      100: "#CD46C6",
      110: "#D560CD",
      120: "#DC77D4",
      130: "#E38DDB",
      140: "#E9A2E2",
      150: "#EFB7E8",
      160: "#F4CBEF"
};
    
export const lightTheme: Theme = createLightTheme(snoggit);
export const darkTheme: Theme = createDarkTheme(snoggit);
 
export const useStyles = makeStyles({
    root: {
      display: "grid",
      gridTemplateRows: "50vh 50vh"
    },
    row: {
      height: "50vh",
      display: "grid",
      alignItems: "start",
      justifyContent: "center",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "auto",
      gridColumnGap: tokens.spacingHorizontalXXXL
    },
    col2: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...shorthands.gap(tokens.spacingVerticalL),
    },
    col3: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'repeat(4, auto)',
      gridRowGap: tokens.spacingVerticalS,
      gridColumnGap: tokens.spacingHorizontalS,
      justifyContent: 'center',
      alignItems: 'center',
    },
    twoCol: {
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    controls: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icons: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gridTemplateRows: 'auto auto',
      gridRowGap: tokens.spacingVerticalS,
      gridColumnGap: tokens.spacingHorizontalS,
      justifyContent: 'center',
    },
    avatar: {
      display: 'flex',
      ...shorthands.gap(tokens.spacingVerticalL),
    },
    avatarText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',
    },
});