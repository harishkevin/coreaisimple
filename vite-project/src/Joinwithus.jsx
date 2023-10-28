import {Typography, Button, TextField} from '@mui/material'

function Joinwithus() {
    return <>
    <div className='paddingLR flexSwitch' style={{
        display: 'flex',
        background: '#f7f8f9',
        paddingBottom: '7%'
    }}>
        <div className='changeWidth mobileTopBottomSpace'>
            <Typography variant='h4'>Join with us</Typography>
            <br />
            <Typography variant='h4'>Embark on a journey toward achieving your personal and professional aspirations through Creative skills</Typography>
            <br />
            <p style={{fontFamily: 'Regular', color: '#86868B'}}>Join us today to embark on a transformative educational journey with CoreAI. Experience the power of expert guidance, diverse course offerings, and a supportive community, all aimed at equipping you with the skills and knowledge you need to excel in the dynamic world of technology and innovation. Your success story begins here, with us.</p>
        </div>
        <div className='changeWidth mobileTopBottomSpace'>
            <img style={{
                width: '100%'
            }} src="./public/images/join.jpg" alt="" />
        </div>
    </div>
    </>
}

export default Joinwithus