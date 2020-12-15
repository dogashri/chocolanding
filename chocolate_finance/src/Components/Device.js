const size = {
    mobileS: '320px',
    // i_phone: '375px',
    // mobileL: '425px',
    // i_pad: '768px',
    // laptop: '1024px',
    // laptopL: '1440px',
    desktop: '2560px',
    // new
    i_phone:'425px',
    i_pad:'768px',
    laptop:'1024px',
    laptopL:'2526px'
  }
  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    i_phone: `(max-width: ${size.i_phone})`,
    mobileL: `(min-width: ${size.mobileL})`,
    i_pad: `(max-width: ${size.i_pad})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };