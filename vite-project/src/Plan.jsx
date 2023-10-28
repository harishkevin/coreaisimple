import { Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"


function Plan() {

    const navigate = useNavigate()

    return <>
    <div className="paddingLR priceCard mobileTopBottomSpace" style={{
        background: '#0f0c20',
    }}>
        <div>
            <br />
            <div style={{
                    background: 'linear-gradient(to right, #7549F2, #DF58D2, #ED787C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
            <Typography variant='h4' style={{fontFamily: 'Regular', textAlign: 'center'}}>Choose your plan</Typography>
            <br />
            </div>
        </div>
        <div className="flexSwitch priceCardFlexCont" style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <div className="changeWidth width30 priceCardFlexItem" style={{
                background: 'white',
                borderRadius: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: 10,
                color: '#6837f5'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: '50%'
                }}>
                        <Typography variant="h4" style={{
                            fontFamily: 'LufgaR',
                            textAlign: 'center'
                        }}>Basic</Typography>
                    <Typography variant="h3" style={{
                            fontFamily: 'Bold'
                        }}><sup>₹</sup>1000</Typography>
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>2 Months</Typography>
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>(1 Month Training + 1 Month Internship)</Typography>
                
                <Button variant='contained' style={{
                        textTransform : 'none',
                        borderRadius : '50px',
                        background: '#fe7f21',
                        fontFamily: 'LufgaR',
                        boxShadow: 'none',
                        }} onClick={() => {
                            navigate('/register')
                        }}>Join now</Button>
                </div>
                <div style={{
                    height: '50%',
                    textAlign: 'center'
                }}>
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>&#x2713; Live Sessions and Recorded Sessions</Typography>
                    <br />
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>&#x2713; 2 Major Projects</Typography>
                    <br />
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>&#x2713; Certificate of completion</Typography>
                </div>
                <Typography></Typography>
            </div>
            <div className="changeWidth width30 priceCardFlexItem" style={{
                background: 'white',
                borderRadius: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: 10,
                color: '#6837f5'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: '50%'
                }}>
                        <Typography variant="h4" style={{
                            fontFamily: 'LufgaR',
                            textAlign: 'center'
                        }}>Standard</Typography>
                    <Typography variant="h3" style={{
                            fontFamily: 'LufgaSB'
                        }}><sup>₹</sup>1500</Typography>
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>3 Months</Typography>
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>(1 Month Training + 2 Month Internship)</Typography>
                    <Button variant='contained' style={{
                            textTransform : 'none',
                            borderRadius : '50px',
                            background: '#fe7f21',
                            fontFamily: 'LufgaR',
                            boxShadow: 'none',
                            }} onClick={() => {
                                navigate('/register')
                            }}>Join now</Button>
                </div>
                <div style={{
                    height: '50%',
                    textAlign: 'center'
                }}>
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>&#x2713; Live Sessions and Recorded Sessions</Typography>
                    <br />
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>&#x2713; 1 Major Projects + 1 coreai's Real World Project</Typography>
                    <br />
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>&#x2713; Certificate of completion</Typography>
                    <br />
                    <Typography style={{fontFamily: 'LufgaR', color: 'black'}}>&#x2713; Professional Portfolio Building</Typography>
                </div>
            </div>
            <div className="changeWidth width30 priceCardFlexItem" style={{
                background: '#6837f5',
                borderRadius: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: 10,
                color: 'white'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: '50%'
                }}>
                        <Typography variant="h4" style={{
                            fontFamily: 'LufgaR',
                            textAlign: 'center'
                        }}>Premium</Typography>
                    <Typography variant="h3" style={{
                            fontFamily: 'LufgaSB'
                        }}><sup>₹</sup>3000</Typography>
                    <Typography>3 Months</Typography>
                    <Typography>(1 Month Training + 2 Month Internship)</Typography>
                    <Button variant='contained' style={{
                            textTransform : 'none',
                            borderRadius : '50px',
                            background: '#fe7f21',
                            fontFamily: 'LufgaR',
                            boxShadow: 'none',
                            }} onClick={() => {
                                navigate('/register')
                            }}>Join now</Button>
                </div>
                <div style={{
                    height: '50%',
                    textAlign: 'center'
                }}>
                    <Typography style={{fontFamily: 'LufgaR'}}>&#x2713; Live Sessions and Recorded Sessions</Typography>
                    <br />
                    <Typography style={{fontFamily: 'LufgaR'}}>&#x2713; 2 coreai's Real World Project</Typography>
                    <br />
                    <Typography style={{fontFamily: 'LufgaR'}}>&#x2713; Certificate of completion</Typography>
                    <br />
                    <Typography style={{fontFamily: 'LufgaR'}}>&#x2713; Professional Portfolio Building</Typography>
                    <br />
                    <Typography style={{fontFamily: 'LufgaR'}}>&#x2713; Placaemnt masterclass with 4 Step Framework to land a Job</Typography>
                    <br />
                    <Typography style={{fontFamily: 'LufgaR'}}>&#x2713; 100% Placement Assistance Sessions</Typography>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Plan