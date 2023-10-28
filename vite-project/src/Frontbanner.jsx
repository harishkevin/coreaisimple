import {Typography, Button, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

function Frontbanner() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate()

    const sendEmail = (e) => {
    
        e.preventDefault();

        // Your Email.js service ID, template ID, and user ID
        const serviceID = 'service_cd77sil';
        const templateID = 'template_kf1unc3';
        const userID = '8yfksu4z0DA2_KPvJ';

        emailjs.send(serviceID, templateID, {
            user_name: name,
            message: message,
            user_email: email,
            user_phone: phone
        }, userID)
            .then((response) => {
            console.log('Email sent successfully:', response);
            }, (error) => {
            console.error('Email could not be sent:', error);
            });

        // Clear the form fields after sending the email
        setName('');
        setEmail('');
        setMessage('');

    }

    return <>
    <div className='paddingLR flexSwitch' style={{
        display: 'flex',
        background: '#0f0c20',
        paddingTop: '5%',
        paddingBottom: '10%'
    }}>
        <div className='changeWidth width60 mobileTopBottomSpace'>
            <div>
                <div className='mainHeadingWeb' style={{
                    background: 'linear-gradient(to right, #7549F2, #DE53F7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    <Typography variant='h2' style={{fontFamily: 'Bold'}}>Learn to Code Generative AI like ChatGPT from Experienced AI Developers</Typography>
                </div>
                <div className='mainHeadingMobile' style={{
                    background: 'linear-gradient(to right, #7549F2, #DE53F7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    <Typography variant='h3' style={{fontFamily: 'Bold'}}>Learn to Code Generative AI like ChatGPT from Experienced AI Developers</Typography>
                </div>
                <br />
                <br />
                <Typography style={{
                    color: '#676e83 ',
                    fontFamily: 'Regular'
                }}>Provide you with latest online learning system and material that helps your knowledge and growing</Typography>
                <br />
                <br />
                <Button variant='contained' style={{
                    borderRadius: '50px',
                    background: '#0f0c20',
                    border: '1.5px solid #fe7f21',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/courses')
                }}>Join Now <div style={{color: '#fe7f21', marginLeft: 5}}>&gt;</div></Button>
            </div>
        </div>
        <div className='changeWidth width40 mobileTopBottomSpace' style={{
            display: 'flex',
            justifyContent: 'center',
            height: 'auto'
        }}>
            {/* <img style={{width: '60%'}} src="./src/assets/images/student4.png" alt="student pic" /> */}
            {/* <img style={{width: '60%'}} src="./src/assets/images/student5.png" alt="student pic" /> */}
            <div style={{
            background: '#6837f5',
            width: '90%',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '5%',
            paddingBottom: '5%',
            height: 500
        }}>
            {/* <img style={{width: '30%'}} src="./src/assets/images/student3.png" alt="" /> */}
            <br />
            <Typography variant='h5' style={{
                color: 'white',
                fontFamily: 'LufgaR'
            }}>Contact us now</Typography>
            <br />
                    <TextField label="name" variant='outlined' size='small' type="text" name="user_name" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}  onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    <br />
                    <TextField label="phone" variant='outlined' size='small' type="text" name="user_phone" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}  onChange={(e) => {
                            setPhone(e.target.value)
                        }}/>
                    <br />
                    <TextField label="email" variant='outlined' size='small' type="text" name="user_email" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}  onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                    <br />
                    <TextField label="Your message" multiline rows={4} defaultValue=""  size='small' type="text" name="user_name" style={{
                        width: '85%'
                        }} InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}  onChange={(e) => {
                            setMessage(e.target.value)
                        }}/>
                    <br />
                    <Button variant='contained' style={{
                    textTransform : 'none',
                    borderRadius : '50px',
                    background: '#fe7f21',
                    fontFamily: 'LufgaR',
                    boxShadow: 'none',
                    width: '85%'
                        }} value='Send' type='submit' onClick={sendEmail}>Send your message</Button>
                    <Typography style={{
                    color: '#86868B',
                    fontFamily: 'LufgaR',
                    paddingTop: 6
                }}>or</Typography>
                <Typography style={{
                    color: 'white',
                    fontFamily: 'LufgaR',
                    paddingTop: 6
                }}>write us here: <a style={{color: '#fe7f21'}} href="mailto:michael@coreai.in?subject=course%20enquiry" target='_blank'>michael@coreai.in</a></Typography>
        </div>
        </div>
    </div>
    </>
}

export default Frontbanner