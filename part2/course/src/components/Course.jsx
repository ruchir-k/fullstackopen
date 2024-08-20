import Part from "./Part"
import Total from "./Total"

const Course = ({course}) => {

    return(
        <div>
            <h2>{course.name}</h2>
            {course.parts.map(part => 
            <Part key={part.id} part={part.name} exercises={part.exercises} />)}
            <p><strong>total of {<Total parts={course.parts}/>} exercises</strong></p>
        </div>
    )
}

export default Course