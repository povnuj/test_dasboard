'use client'
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import { Colors } from "./colors";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', "900"],
    subsets: ['latin'],
    display: 'swap'
});

let theme = createTheme();

declare module '@mui/material/styles' {
    interface TypographyVariants {
        buttonGreenText: React.CSSProperties;
        servicesSliderText1: React.CSSProperties;
        servicesSliderText2: React.CSSProperties;
        title1: React.CSSProperties;
    }
  
    interface TypographyVariantsOptions {
        buttonGreenText?: React.CSSProperties;
        servicesSliderText1?: React.CSSProperties;
        servicesSliderText2?: React.CSSProperties;
        title1?: React.CSSProperties;
  }
} 

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    buttonGreenText: true;
    servicesSliderText1: true;
    servicesSliderText2: true;
    title1: true;
  }
}

declare module '@mui/material/styles'{
    interface Components {
        MNavBar: {},
        MNavMenu: {},
        MNavButton: {},
        MBrandSection: {},
        MNavSearch: {},
        MButtonStartImg: {},
        MCartButton: {},
        MNavMobileMenu: {},
        MFooBar: {},
        MFooList: {},
        MFooSocialBtn: {},
        MGreenSquareButton: {},
        MСContainer: {},
        MGBtnContainer: {},
        MPhoneButton: {},
        MSwitcherContainer: {},
        MSwitcherButton: {},
        MSSlidesContainer: {},
        MPriceButtonBlack: {},
        MPriceButtonGreen: {},
        MSSlide: {},
        MSSliderPromotion: {},
        MASlidesContainer: {},
        MASlide: {},
        MTransperentGreenButton: {},
        MFooterContacts: {},
    }
}

theme = createTheme(theme,{ 
    breakpoints: {
        values: {
          xs: 350,
          sm: 900,
          md: 1000,
          lg: 1340,
          xl: 1748,
        },
    },
    palette:{
        mode: 'light'
    },

    typography:{
        fontFamily: 'Roboto, sans-serif',

        h3:{
            fontSize: 24,
            fontWeight: 700,
            lineHeight: '28px',
        },
        
        
        title1: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 24,
            fontWeight: 700,
            lineHeight: '28px',
            // display: '-webkit-box',
            // overflowY: 'hidden',
            // '-webkit-line-clamp': '1',
            // '-webkit-box-orient': 'vertical',
            // wordBreak: 'break-word',
        },

        servicesSliderText1: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '14px',
            '& span': {
                color: Colors.secondary
            }
        },

        servicesSliderText2: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 15,
            fontWeight: 400,
            lineHeight: '18px',
            color: Colors.grey,
            // display: '-webkit-box',
            // overflowY: 'hidden',
            // '-webkit-line-clamp': '4',
            // '-webkit-box-orient': 'vertical',
            // wordBreak: 'break-word',
        },

        buttonGreenText:{
            fontSize: 27,
            fontWeight: 500,
            lineHeight: '32px',
            color: Colors.light,
            textDecoration: 'none',
            textTransform: 'none',
   
            [theme.breakpoints.down('xl')]: {
                fontSize: 20,
                lineHeight: '20px',
                
            },
            [theme.breakpoints.between('xs' , "lg")]: {
                fontSize: 16,
                lineHeight: '16px',
            },
        },
    },

    components:{

        MFooterContacts: {
            styleOverrides: {
                root: {
                    width: '100%',
                    maxWidth: '380px',
                    '.social_sec': {
                        marginTop: '26px',
                        '.container': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '18px',
                        },
                    },
                    '.foo_contacts': {
                        marginTop:'18px',
                        display: 'flex',
                        '.phone_left': {
                            display: 'flex',
                            flexDirection: 'column',
                            marginRight: '30px',
                        },
                        '.ico_container': {
                            marginRight: '10px',
                        },
                        'a': {
                            textDecoration: 'none', 
                            color: Colors.dark,
                            fontFamily: 'Roboto,Thin, sans-serif',
                        },
                    }
                   
                }
            }
        },

        MFooList: {
            styleOverrides: {
                root: {
                    fontSize: '18px', 
                    fontWeight: '400', 
                    lineHeight: '22px',
                    '& ul': {
                        marginTop: '18px',
                        listStyle: 'none',
                        '& a': {
                            textDecoration: 'none', 
                            color: Colors.dark,
                        }, 
                    },

                }
            }
        },

        MFooBar: {
            styleOverrides: {
                root: {
                    backgroundColor: Colors.primary,
                    padding: '50px 0',
                    '& .foo_container': {
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                    },

                }
            }
        },

        MFooSocialBtn: {
            styleOverrides: {
                root: {
                    width: '100%',
                    minWidth: '40px',
                    height: 40,
                    backgroundColor: Colors.light,
                    borderRadius: '50px',
                    padding: 0,
                    'a': {
                        width: 'fit-content',
                    },
                }
            }
        },  

        MTransperentGreenButton: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 13px',
                    border: `1px solid ${Colors.secondary}`,
                    borderRadius: '83px',
                    fontSize: '15px',
                    color: Colors.secondary,
                    textTransform: 'none',
                }
            }
        },

        MASlide: {
            styleOverrides: {
                root: {
                    maxWidth: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    '& a': {
                        marginTop: '57px', 
                        marginRight: '0',
                        marginLeft: 'auto',
                    },
                    '.primary_img': {
                        borderRadius: '15px',
                        marginBottom: 25,
                    },
                    '.title': {
                        marginBottom: '18px',
                        textTransform: 'uppercase',
                    },
                    '.description': {
                        color: Colors.dark,
                    },
                }
            }
        },
        
        MASlidesContainer: {
            styleOverrides: {
                root: {
                    padding: '41px 0',
                }
            }
        },

        MSSliderPromotion: {
            styleOverrides: {
                root:{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '515px',
                    minHeight: '250px',
                    borderRadius: '25px',
                    backgroundColor: Colors.light,
                    boxShadow: '4px 4px 8px 0px #0000001A',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    '.header': {
                        display: 'flex',
                        justifyContent: 'flex-start', 
                        alignItems: 'center',
                        '.container': {
                            padding: '6px 18px', 
                            marginRight: '15px', 
                            borderRadius: 29, 
                            background: Colors.lightGray, 
                            display: 'flex', 
                            alignItems: 'center', 
                            textAlign: 'center',
                        },
                    },
                    '.s_btn_cont': {
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop:'27px',
                    },
                    [theme.breakpoints.only('xs')]: {
                        '& img': {
                            width: '65px',
                            height: 'auto',
                        },
                        '& .s_btn_cont': {
                            display: 'flex',
                            flexDirection: 'column',
                            '& .s_btn_due_date': {
                                width: '100%',
                            },
                            '& a': {
                                marginTop: '30px',
                                '& .s_green_btn_new_price': {
                                    fontSize: '22px',
                                    '& svg': {
                                        width: 14,
                                        height: 'auto',
                                    },
                                },
                                '& .s_green_btn_old_price': {
                                    fontSize: '18px',
                                },

                            }
                        },
                    },
                }
            }
        },

        MSSlide: {
            styleOverrides: {
                root:{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '515px',
                    minHeight: '250px',
                    borderRadius: '25px',
                    backgroundColor: Colors.light,
                    boxShadow: '4px 4px 8px 0px #0000001A',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    '.header': {
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        '.container': {
                            padding: '6px 18px', 
                            marginRight: '15px', 
                            borderRadius: 29, 
                            background: Colors.lightGray, 
                            display: 'flex', 
                            alignItems: 'center', 
                            textAlign: 'center'
                        },
                    },
                    '.s_btn_cont': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between', 
                        marginTop: '21px',
                    },
                    [theme.breakpoints.only('xs')]: {
                        '.s_btn_cont': {
                            display: 'flex',
                            flexDirection: 'column',
                            '.s_btn_due_date': {
                                width: '100%',
                            },
                            'a': {
                                marginTop: '30px',
                                'button': {
                                    fontSize: '22px',
                                    'svg': {
                                        width: 14,
                                        height: 'auto',
                                    },
                                },
                            }
                        },
                    },
                }
            }
        },

        MPriceButtonGreen: {
            styleOverrides: {
                root:{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: 'Roboto,Thin, sans-serif',
                  fontSize: 30,
                  fontWeight: 700,
                  padding: '0 18px 15px',
                  backgroundColor: Colors.secondary,
                  color: Colors.light,
                  borderRadius: 50,
                  border: `1px solid transparent`,
                  'svg': {
                    marginLeft: 5,
                  },
                  '.s_green_btn_old_price': {
                    fontSize: '22px', 
                    color: Colors.lightGray2, 
                    position: 'absolute', 
                    bottom: 0, 
                    left: '15px', 
                    textDecoration: `line-through ${Colors.light}`, 
                  },
                  '&:hover': {
                    backgroundColor: Colors.light,
                    color: Colors.dark,
                    border: `1px solid ${Colors.dark}`, 
                }
                }
            }
        },

        MPriceButtonBlack: {
            styleOverrides: {
                root:{
                  fontFamily: 'Roboto,Thin, sans-serif',
                  fontSize: 30,
                  fontWeight: 700,
                  padding: '0 18px',
                  backgroundColor: Colors.dark,
                  color: Colors.light,
                  borderRadius: 50,
                  border: `1px solid transparent`,
                  '&:hover': {
                    backgroundColor: Colors.light,
                    color: Colors.dark,
                    border: `1px solid ${Colors.dark}`, 
                }
                }
            }
        },

        MSSlidesContainer: {
            styleOverrides: {
                root:{
                    width: '100%',
                    backgroundColor: Colors.primary,
                    padding: '41px 0 144px 0',
                }
            }
        },

        MSwitcherButton: {
            styleOverrides: {
                root:{
                    height: 60,
                    padding: '0 25px',
                    backgroundColor: Colors.secondary,
                    borderRadius: 83,
                    fontSize: 36,
                    fontWeight: 700,
                    lineHeight: '23px',
                    color: Colors.light,
                    textTransform: 'none', 
                    '&:hover': {
                        backgroundColor: Colors.secondary,
                        color: Colors.light
                    },
                    [theme.breakpoints.down('xl')]: {
                        fontSize: 28,
                        lineHeight: '20px',
                        padding: '0 20px',
                        height: 50,
                        
                    },
                    [theme.breakpoints.down('lg')]: {
                        fontSize: 24,
                        lineHeight: '16px',
                        padding: '0 18px',
                        height: 45,
                        
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 16,
                        lineHeight: '10px',
                        padding: '0 10px',
                        height: 35,
                        
                    },
                }
            }
        },

        MSwitcherContainer: {
            styleOverrides: {
                root:{
                    width: 'fit-content',
                    //maxWidth: 400,
                    //marginRight: '-20px',
                    padding: 0,
                    height: 'auto',
                    backgroundColor: Colors.light,
                    border: `1px solid ${Colors.secondary}`,
                    borderRadius: 83,
                }
            }
        },
        MPhoneButton: {
            styleOverrides: {
                root:{
                    padding: 0,
                    color: Colors.grey,
                    textTransform: 'none',
                    '& img': {
                        marginRight: 5,
                    }
                }
            }
        },

        MGBtnContainer: {
            styleOverrides: {
                root:{
                    display: 'flex',
                    justifyContent: 'space-between',
                    columnGap: '20px',
                    padding: '50px 0 83px 0', 
                    [theme.breakpoints.between('xs' , "md")]: {
                        display: 'none',
                    },
                }
            }
        },
        MGreenSquareButton:{
            styleOverrides: {
                root:{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: 250,
                    width: 250,
                    overflow: 'hidden',
                    padding: 0,
                    backgroundColor: Colors.secondary,
                    borderRadius: 20,
                    '.title': {
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'flex-start',
                        textAlign: 'start',
                        padding: '20px 30px 0 30px',
                    },
                    '.img_container': {
                        width: '100%',
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    },
                    [theme.breakpoints.only('lg')]: {
                        height: 200,
                        width: 200,
                        '& img': {
                            width: '100px',
                            height: '125px',
                        }
                    },
                   [theme.breakpoints.only('md')]: {
                       height: 140,
                       width: 140,
                       '& img': {
                           width: '60px',
                           height: '80px',
                       }
                   },
                    '&:hover': {
                        backgroundColor: Colors.hoverSecondary,
                        color: Colors.light
                    }
                }
            }
        },

        MСContainer: {
            styleOverrides: {
                root:{
                    paddingLeft: '75px !important',
                    paddingRight: '75px !important',
                    [theme.breakpoints.between('xs', 'md')]: {
                       
                        paddingLeft: '25px !important',
                        paddingRight: '25px !important',
                    },
                }
            }
        },

        MNavBar: {
            styleOverrides: {
              root:{
                  width: "100%",
                  height: 250,
                  backgroundColor: Colors.primary,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center', 
                  '.top_container': {
                    display: 'flex', 
                    justifyContent: 'space-between',
                    '.search_container': {
                        width: "100%",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0 15px',
                    },
                    '.btn_container': {
                        display: 'flex',
                        columnGap: '26px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // marginTop: '20px',
                    },
                  },
              }
            }
        },

        MNavMenu: {
          styleOverrides: {
            root:{
                width: '100%',
                minWidth: 790,
                height: 40,
                display: 'flex',
                justifyContent: 'space-between',
            }
          }
        },

        MNavMobileMenu: {
            styleOverrides: {
              root:{
                //   with: "100%",
                  display: 'flex',
                  alignItems: 'center',
                  height: 56,
                  backgroundColor: Colors.secondary,
                  '.container': {
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    '.btn_container': {
                        display: 'flex',
                        marginLeft: '10px',
                        marginTop: '0',
                        justifyContent: 'center', 
                    },
                  },
                 
              }
            }
          },
        
        MNavButton:{
          styleOverrides: {
              root:{
                  height: 40,
                //   padding: '0 20px',
                  //backgroundColor: Colors.secondary,
                //   borderRadius: 20,
                  fontSize: 29,
                  fontWeight: 700,
                  lineHeight: '33px',
                  color: Colors.secondary,
                  textTransform: 'none',
                  [theme.breakpoints.only("md")]: {
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: '18px',
                    padding: '0 10px',
                },
                //   '&:hover': {
                //       backgroundColor: Colors.secondary,
                //       color: Colors.light
                //   }
              }
            }
        },

        MBrandSection: {
            styleOverrides: {
              root:{
                width: "100%",
                maxHeight: 68,
                marginBottom: 38,
                marginTop: 4,
                fontSize: 16,
                color: Colors.grey,
                display: 'flex',
                columnGap: '105px',
                alignContent: "flex-end",
                textTransform: "none",
                '.phone_container': {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'flex-end',
                    minWidth: 140,
                    alignItems: 'flex-start',
                },
                [theme.breakpoints.between('xs', 'sm')]:{
                    marginTop: 20,
                    maxHeight: 140,
                    flexDirection: 'column',
                    '& div': {
                        marginTop: 20,
                        marginBottom: 30,
                    },
                }
               
                  //backgroundColor: Colors.primary
              }
            }
        },
        
        MNavSearch: {
            styleOverrides: {
              root:{
                  width: "100%",
                  maxWidth: 360,
                  height: 40,
                  backgroundColor: Colors.light,
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 5px',
                  columnGap: 10,
                  '.ico_container':{
                    marginLeft: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    'svg': {
                      maxHeight: 18,
                    },
                  },
              }
            }
        },
        MButtonStartImg:{
            styleOverrides: {
                root:{
                    height: 40,
                    padding: '0 35px 0 5px',
                    backgroundColor: Colors.secondary,
                    borderRadius: 20,
                    fontSize: 20,
                    fontWeight: 500,
                    color: Colors.light,
                    textTransform: 'none',
                    '& img': {
                        marginRight: 9,
                        marginLeft: 5,
                    },
                    '&:hover': {
                        backgroundColor: Colors.hoverSecondary,
                        color: Colors.light
                    }
                }
            }
        },
        MCartButton:{
            styleOverrides: {
                root:{
                    height: 40,
                    width: '100%',
                    maxWidth: '50px',
                    minWidth: 'auto',
                    backgroundColor: Colors.secondary,
                    borderRadius: 20,
                    color: Colors.light,
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: Colors.hoverSecondary,
                        color: Colors.light
                    }
                }
            }
        },
        
    },



}); 

export {
    theme
}