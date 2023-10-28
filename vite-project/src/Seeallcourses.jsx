import {Typography, Button, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Courses from './assets/courses'

function Seeallcourses() {
    const navigate = useNavigate()
    console.log(Courses)

    return <>
    <div className='seeAllCoursesMainDiv'>
        <div className='seeAllCoursesDiv'>
            {Courses.map(course =>{
                return <div className='course'>
                    
                        {/* <div style={{width: '100%'}}> */}
                            <img style={{
                                width: '100%',
                                borderRadius: 20,
                                height: '60%',
                                objectFit: 'cover',
                                objectPosition: '0 1%'
                            }} src={"/images/cover/" + course.title + '.jpeg'} alt="" />
                            
                        {/* </div> */}
                        {/* <Typography style={{fontFamily: 'LufgaR', color:'#86868B'}}>{course.description}</Typography> */}
                        <div style={{
                            width: '100%'
                        }}>
                        <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>{course.title}</Typography>
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center'
                            }}>
                                <Typography style={{fontFamily: 'Regular', color:'#86868B'}}>&#x2713; Training + Internship</Typography>
                                <Button variant='contained' style={{
                                    textTransform : 'none',
                                    borderRadius : '50px',
                                    background: '#fe7f21',
                                    fontFamily: 'LufgaR',
                                    boxShadow: 'none',
                                    }} onClick={() => {
                                        navigate(`/course/${course.id}`)
                                    }}>Join now</Button>
                            </div>
                        </div>
                </div>
            })}
        </div>
    </div>
    </>
}

export default Seeallcourses