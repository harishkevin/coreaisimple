import Frontbanner from "./Frontbanner"
import Courses from "./Courses"
import Mentors from "./Mentor"
import Studentfeedback from "./Studentfeedback"
import Joinwithus from "./Joinwithus"
import Aboutus from "./Aboutus"
import Companies from "./Companies"

function Home() {
    return <>
    <Frontbanner/>
    <Aboutus/>
    <Companies/>
    <Courses/>
    <Mentors/>
    <Studentfeedback/>
    <Joinwithus/>
    </>
}

export default Home