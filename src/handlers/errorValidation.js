
const errorValidation = (err) => {

    const answer = Object.keys(err.errors).map((key) => {
        return {[key]: err.errors[key].message}
    })
    
    return answer;
}

export default errorValidation;