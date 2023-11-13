
const errorSearch = (err) => {

    const errorArray = err.message.split(' ');
    const errorModel = errorArray[errorArray.length - 1].replace(/\W/g, '');

    const answer = {
        [errorModel]: 'element not found'
    };

    return answer;
}

export default errorSearch; 