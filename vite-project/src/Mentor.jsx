import {Typography, Button, TextField} from '@mui/material'


function Mentors() {
    return <>
        <div className='paddingLR flexSwitch' style={{
            display: 'flex',
            background: '#f7f8f9',
            paddingBottom: '5%'
        }}>
            <div className='changeWidth mobileTopBottomSpace'>
                <Typography variant='h4' style={{
                    fontFamily: 'Regular'
                }}>Mentors</Typography>
                <br />
                <Typography variant='h4' style={{
                    fontFamily: 'Regular'
                }}>We have experienced quality instructors to ensure that best learning opportunities</Typography>
                <br />
                <p style={{
                    fontFamily: 'Regular',
                    color: '#86868B'
                }}>Our mentors are industry experts with extensive experience, providing invaluable guidance and support to our students and helping them navigate their educational and career journeys. They offer personalized insights, fostering a collaborative and nurturing learning environment where students can flourish and reach their full potential.</p>
            </div>
            <div className='changeWidth mobileTopBottomSpace'>
                <img style={{
                    width: '100%'
                }} src="./images/mentor.jpg" alt="" />
            </div>
        </div>
    </>
}

export default Mentors