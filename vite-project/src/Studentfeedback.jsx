import {Typography, Button, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';

function Studentfeedback() {

    const navigate = useNavigate()

    return <>
    <div className='paddingLR mobileTopBottomSpace' style={{
        background: '#f7f8f9',
        paddingBottom: '5%'
    }}>
        <center>
            <Typography variant='h4' style={{
                fontFamily: 'Regular'
            }}>Student Feedback</Typography>
            <br />
            <Typography variant='h4'>Inspiring Growth, Fostering Excellence</Typography>
            <br />
            <p style={{
                color: '#86868B',
                fontFamily: 'Regular'
            }}>Customer satisfaction is at the heart of our values, and the positive feedback we receive from our clients reflects our unwavering commitment to delivering exceptional services and experiences. Their testimonials are a testament to our dedication to their success.</p>
            <br />
            <div className='flexSwitch increaseHeightFeedback' style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <div className='testimonyCard' style={{
                    background: '#ffffff',
                    padding : 30,
                    borderRadius: 20,
                    height: 300,
                    boxShadow: '0px 0px 30px 4px rgba(230,230,230,1)'
                }}>
                    <Avatar alt="Remy Sharp" src="/images/indianstudent.jpeg" />
                    <br />
                    <Typography style={{
                fontFamily: 'Regular'
            }}>Transformative Data Science Education</Typography>
                    <p style={{
                fontFamily: 'Regular',
                color: '#86868B'
            }}>"CoreAI's courses transformed my understanding of data science. The hands-on approach and the guidance of experienced instructors have been instrumental in my career growth."</p>
                    <Button variant='contained' style={{
                        borderRadius: 50,
                        background: '#6837f5',
                        textTransform: 'capitalize',
                        boxShadow: 'none'
                    }} onClick={() => {
                        navigate('/courses')
                    }}>Get Started</Button>
                </div>
                <div className='testimonyCard' style={{
                    padding : 30,
                    borderRadius: 30,
                    height: 300,
                    boxShadow: '0px 0px 30px 4px rgba(220,220,220,1)'
                }}>
                    <Avatar alt="Remy Sharp" src="/images/indianstudent2.jpeg" />
                    <br />
                    <Typography style={{
                fontFamily: 'Regular'
            }}>Building Confidence in Machine Learning</Typography>
                    <p style={{
                fontFamily: 'Regular',
                color: '#86868B'
            }}>"I was skeptical about switching to a career in Machine Learning, but CoreAI's mentors and practical projects gave me the confidence and skills I needed to succeed."</p>
                    <Button variant='contained' style={{
                        borderRadius: 50,
                        background: '#f7f8f9',
                        color: '#6837f5',
                        border: '1.5px solid #6837f5',
                        textTransform: 'capitalize',
                        boxShadow: 'none'
                    }} onClick={() => {
                        navigate('/courses')
                    }}>Get Started</Button>
                </div>
                <div className='testimonyCard' style={{
                    padding : 30,
                    borderRadius: 30,
                    height: 300,
                    boxShadow: '0px 0px 30px 4px rgba(220,220,220,1)'
                }}>
                    <Avatar alt="Remy Sharp" src="/images/indianstudent3.jpeg" />
                    <br />
                    <Typography style={{
                fontFamily: 'Regular'
            }}>Seamless Transition with Mentor Support</Typography>
                    <p style={{
                fontFamily: 'Regular',
                color: '#86868B'
            }}>"The internship opportunities provided by CoreAI gave me the real-world experience I needed. The guidance and support from mentors made the transition into a new field seamless."</p>
                    <Button variant='contained' style={{
                        borderRadius: 50,
                        background: '#f7f8f9',
                        color: '#6837f5',
                        border: '1.5px solid #6837f5',
                        textTransform: 'capitalize',
                        boxShadow: 'none'
                    }} onClick={() => {
                        navigate('/courses')
                    }}>Get Started</Button>
                </div>
            </div>
        </center>
    </div>
    </>
}

export default Studentfeedback