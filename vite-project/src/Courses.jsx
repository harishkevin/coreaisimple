import {Typography, Button, TextField} from '@mui/material'
import Courseslist from './Courselist'
import { useNavigate } from 'react-router-dom'

function Courses() {
    const navigate = useNavigate()

    return <>
    <div className='paddingLR flexSwitch mobileTopBottomSpace' style={{
        background: '#f7f8f9',
        paddingTop: '5%',
        paddingBottom: '7%'
    }}>
        <center>
            <Typography variant='h4' style={{
                fontFamily: 'Regular'
            }}>Our Courses</Typography>
            <br />
            <div style={{
                    background: 'linear-gradient(to right, #7549F2, #DF58D2, #ED787C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
            <Typography variant='h4' style={{fontFamily: 'Regular'}}><strong>Develope expertise through online courses, certifications offered by core.ai</strong></Typography>
            <br />
            </div>
            <Typography style={{
                color: '#86868B',
                fontFamily: 'Regular'
            }}>At CoreAI, our courses are meticulously crafted to empower you with the latest industry-relevant skills in Python, Machine Learning, Data Science, and more. Our comprehensive curriculum, designed and taught by seasoned experts, provides you with a solid foundation and practical experience. Whether you're a beginner or a professional looking to upskill, our courses cater to diverse skill levels, ensuring you're well-prepared for a successful career in the technology-driven world. Join our courses to unlock your potential and thrive in the ever-evolving tech landscape.</Typography>
            <br />
            <br />
            <Courseslist></Courseslist>
            <br />
            <br />
            <Button variant='contained' style={{
                textTransform : 'capitalize',
                borderRadius : '50px',
                background: '#6837f5',
                boxShadow: 'none',
                fontFamily: 'LufgaR'
            }} onClick={() => {
                navigate('/courses')
            }}>See all courses</Button>
        </center>

    </div>
    </>
}

export default Courses