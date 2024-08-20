import Course from "./Course"

const Courses = ({courses}) => {
    return(
        courses.map(course => {
            return(
                <div key={course.id}>
                    <Course course={course}/>
                </div>
            )
        })
    )
}

export default Courses