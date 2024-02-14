import { createGlobalStyle } from 'styled-components';

import extraWoff2 from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-200.woff2';
import extraWoff from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-200.woff';
import extraSvg from '../assets/fonts//IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-200.svg';

import lightWoff2 from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-300.woff2';
import lightWoff from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-300.woff';
import lightSvg from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-300.svg';

import regWoff2 from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-regular.woff2';
import regWoff from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-regular.woff';

import plexBoldWoff2 from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-500.woff2';
import plexBoldWoff from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-500.woff';

import robotoWoff2 from '../assets/fonts/Roboto_Slab/roboto-slab-v25-cyrillic_latin-regular.woff2';
import robotoWoff from '../assets/fonts/Roboto_Slab/roboto-slab-v25-cyrillic_latin-regular.woff';
import robotoSvg from '../assets/fonts/Roboto_Slab/roboto-slab-v25-cyrillic_latin-regular.svg';

import robotoMediumWoff2 from '../assets/fonts/Roboto_Slab/roboto-slab-v25-cyrillic_latin-500.woff2';
import robotoMediumWoff from '../assets/fonts/Roboto_Slab/roboto-slab-v25-cyrillic_latin-500.woff';
import robotoMediumSvg from '../assets/fonts/Roboto_Slab/roboto-slab-v25-cyrillic_latin-500.svg';

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 18px;
        line-height: 1.75;
    }
    html,
    body {
        width: 100%;
        height: 100%;
    }
    body {
        font-weight: normal;
        margin: 0;
        box-sizing: border-box;
        overflow: auto;
        
    }
    #root {
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 2rem;
        margin-top: 0;
    }
    h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
    }
    h4 {
        margin: 0;
        font-size: 1rem;
    }
    li {
        list-style: none;
    }

    ul {
    padding: 0;
    margin: 0;
    }

    @font-face {
        font-display: swap;
        font-family: 'IbmExtraLight';
        font-style: normal;
        font-weight: 200;
        src:             url(${extraWoff2}) format('woff2'),
            url(${extraWoff}) format('woff'),
            url(${extraSvg}) format('svg');
    }
    @font-face {
    font-display: swap;
    font-family: 'IbmLight';
    font-style: normal;
    font-weight: 300;
    src: url(${lightWoff2}) format('woff2'),
        url(${lightWoff}) format('woff'),
        url(${lightSvg}) format('svg');
}
    @font-face {
        font-display: swap;
        font-family: 'IbmRegular';
        font-style: normal;
        font-weight: 400;
        src: url(${regWoff2}) format('woff2'),
            url(${regWoff}) format('woff'),
    }
    @font-face {
        font-display: swap;
        font-family: 'IbmBold';
        font-style: normal;
        font-weight: 500;
        src: url(${plexBoldWoff2}) format('woff2'),
            url(${plexBoldWoff}) format('woff'),
    }

    @font-face {
        font-display: swap;
        font-family: 'RobotoRegular';
        font-style: normal;
        font-weight: 400;
        src: url(${robotoWoff2}) format('woff2'),
            url(${robotoWoff}) format('woff'),
            url(${robotoSvg}) format('svg');
    }
    @font-face {
    font-display: swap;
    font-family: 'RobotoMedium';
    font-style: normal;
    font-weight: 500;
    src: 
        url(${robotoMediumWoff2}) format('woff2'),
        url(${robotoMediumWoff}) format('woff'),
        url(${robotoMediumSvg}) format('svg');
}
    @media screen and (min-width: 1600px) {
        html {
        font-size: 22px;
        }
    }

    @media screen and (max-width: 1600px) {
        html {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 1400px) {
        html {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1200px) {
        html {
            font-size: 16px;
        }
    }
    @media screen and (max-width: 980px) {
        html {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 900px) {
        html {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 625px) {
        html {
            font-size: 14px;
        }
    }
`;

export default GlobalStyles;
