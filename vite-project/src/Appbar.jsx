import {Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'


function Appbar() {
    const navigate = useNavigate()

    return <>
    <div className='paddingLR appBar mobileTopBottomSpace webBar'>
        <div style={{width: '10%', display: 'flex'}} onClick={() => {
                navigate('/')
            }}>
            <img style={{width: '90px'}} src='/images/corelogo.png' alt="" />
            <Typography className='logoTypo' variant='h5'>ai</Typography>
        </div>
        <div className='flexSwitch' style={{
            display: 'flex'
        }}>
           <div className='flexSwitch' style={{
                display: 'flex'
            }}>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/courses')
                }}>Courses</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/plan')
                }}>Our Plans</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }}>About</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/register')
                }}>Register</Button>
            </div>
        </div>
    </div>
    </>
}

export default Appbar