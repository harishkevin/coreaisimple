import {Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Courses from './assets/courses';


function Courseslist() {
    const navigate = useNavigate()

    let courses = Courses.slice(0,4)

    return <>
    <div className='flexSwitch increaseHeightCourseList' style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
            {courses.map(course =>{
                return <div className='courseList'>
                <div style={{width: '100%'}}>
                    <img style={{
                        width: '80%',
                        borderRadius: 50,
                        height: 60,
                        objectFit: 'cover',
                        objectPosition: '0 1%'
                    }} src={"/images/cover/" + course.title + '.jpeg'} alt="" />
                    <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>{course.title}</Typography>
                </div>
                {/* <Typography style={{fontFamily: 'LufgaR', color:'#86868B'}}>{course.description}</Typography> */}
                <div>
                    <Typography style={{fontFamily: 'Regular', color:'#86868B'}}>&#x2713; Training + Internship</Typography>
                    <Button variant='contained' style={{
                        textTransform : 'none',
                        borderRadius : '50px',
                        background: '#fe7f21',
                        fontFamily: 'LufgaR',
                        boxShadow: 'none',
                        }} onClick={() => {
                            navigate(`/course/${course.id}`)
                            window.scrollTo(0, 0)
                        }}>Join now</Button>
                </div>
                </div>
            })}
        </div>
    </>
}

export default Courseslist