import {Typography} from '@mui/material'


function Aboutpage() {
    return <>
    <div className="Aboutpage paddingLR" style={{
        background: '#f7f8f9',
        paddingTop: '5%',
        paddingBottom: '10%'
    }}>
        <img style={{width: '180px', borderRadius: '50%'}} src='/images/corelogoblack.png' alt="" />
        <br />
        <br />
        <Typography variant='h5' style={{
                fontFamily: 'Regular'
            }}>About CoreAi</Typography>
        <br />
        <br />
        <Typography style={{
                color: '#86868B',
                fontFamily: 'Regular'
            }}>At CoreAI, we are at the forefront of transforming education in the fields of artificial intelligence (AI) and data science. We believe that knowledge and innovation are the driving forces of progress, and that's why our mission is to empower individuals with the skills and expertise needed to excel in these rapidly evolving disciplines.
            <br />
            <br />
            Our team at CoreAI is a carefully curated blend of experienced AI developers and industry-seasoned instructors who share a common passion for education. We take pride in offering a transformative learning experience that equips you with the tools to thrive in the technology-driven world. With a commitment to staying at the cutting edge of AI and data science, we aim to provide you with the latest insights and practical skills that the industry demands.
            <br />
            <br />
            When you choose CoreAI, you choose a partner dedicated to your educational and professional growth. We offer interactive live sessions, internships, and direct access to industry experts. Our one-on-one mentorship program ensures that you're not only learning but also applying your knowledge in real-world scenarios. We prepare you for successful placement in the tech industry, bridging the gap between education and career seamlessly.</Typography>
            <br />
        <br />
        <Typography variant='h5' style={{
                fontFamily: 'Regular'
            }}>Our Vision: Shaping the Future</Typography>
        <br />
        <br />
        <Typography style={{
                color: '#86868B',
                fontFamily: 'Regular'
            }}>At CoreAI, our vision is to lead the charge in shaping the future of AI and data science education. We're passionate about fostering the next generation of innovators and problem-solvers, and we're committed to providing you with the knowledge and resources necessary to drive progress in these ever-evolving fields.
            <br />
            <br />
            Our comprehensive course offerings, including Python, Machine Learning, Data Science, and more, cater to diverse skill levels. Whether you're just starting your journey in tech or you're a seasoned professional looking to expand your skill set, CoreAI is here to guide you. We believe in the power of hands-on experience and real-world applications, which is why our courses are designed to provide you with the practical skills you need to succeed.
            <br />
            <br />
            Join CoreAI, and embark on a transformative educational journey. Our team of mentors, who are industry experts, will provide you with invaluable insights and support as you navigate your educational and career paths. Our commitment to customer satisfaction and the positive feedback we receive from our students underscore our dedication to delivering exceptional educational experiences.
            </Typography>
            <br />
            <br />
            <Typography variant='h5' style={{
                fontFamily: 'Regular'
            }}>Your Success Story Starts Here</Typography>
            <br />
            <br />
            <Typography style={{
                color: '#86868B',
                fontFamily: 'Regular'
            }}>Are you ready to unlock your potential in AI and data science? Join us at CoreAI, where expert guidance, a diverse course catalog, and a supportive community come together to prepare you for success in the dynamic world of technology and innovation. Your success story begins here, with us.</Typography>
            <br />
            <br />
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}><img style={{width: '90px'}} src='/images/corelogotextblack.png' alt="" /></div>
    </div>
    </>
}

export default Aboutpage