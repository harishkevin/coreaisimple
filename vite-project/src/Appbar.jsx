import {Typography, Button} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Appbar() {
    const navigate = useNavigate()
    const [ham,setHam] = useState(false)

    return <>
    <div className='paddingLR appBar mobileTopBottomSpace webBar'>
        <div style={{width: '10%', display: 'flex'}} onClick={() => {
                navigate('/')
            }}>
            <img style={{width: '90px'}} src='/images/corelogotextwhite.png' alt="" />
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
                }} onClick={() => {
                    navigate('/about')
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

    <div className='paddingLR appBar mobileTopBottomSpace mobileBar'>
        <div style={{width: '10%', display: 'flex'}} onClick={() => {
                navigate('/')
            }}>
            <img style={{width: '90px'}} src='/images/corelogotextwhite.png' alt="" />
        </div>
        <div className='flexSwitch' style={{
            display: 'flex',
            alignItems: 'flex-end'
        }}>
            <img onClick={() => {
                setHam(!ham)
            }} style={{width: '30px'}} src='/images/hamburger-menu.png' alt="" />
           {ham && (<div className='flexSwitch' style={{
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
                }} onClick={() => {
                    navigate('/about')
                }}>About</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/register')
                }}>Register</Button>
            </div>)}
        </div>
    </div>
    </>
}

export default Appbar