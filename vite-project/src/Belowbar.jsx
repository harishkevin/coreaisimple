import {Typography, Button} from '@mui/material'

function Belowbar() {

    return <>
    <div className='paddingLR' style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#0f0c20',
        height: '10vh'
    }}>
        <Typography style={{
            fontFamily: 'Regular',
            color: 'white'
        }}>All rights reserved</Typography>
    </div>
    </>
}

export default Belowbar