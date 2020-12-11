const handleError = async error => {
    await logError(error);    
    await sendEmailToAdmin(error);  
    return error.isOperation;
}


const logError = error => {
    console.log('🟠 ' + error.message);
    console.log('error is logged');
    return Promise.resolve();
}

const sendEmailToAdmin = error => {
    if(error.isOperation) {
        return Promise.resolve();
    }   

    console.log('email has sended');

    return Promise.resolve();
}

class OperationError extends Error {
    constructor(statusCode, message) {
        super(message)
        this.statusCode = statusCode;
        this.isOperation = true;
    }
}

module.exports = {
    handleError,
    OperationError
}