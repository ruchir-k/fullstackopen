const Total = ({parts}) => 
    parts.reduce((sum,part) => {
        return sum + part.exercises
    }, 0)
    

export default Total