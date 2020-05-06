import User from './User'
class Exception{
    handleError(error){
        this.isExpired(error.response.data)
    }

    isExpired(error){
        if(error == 'Token is Invalid' || error == 'Token expired'){
            User.logout();
        }
    }
}

export default Exception = new Exception();
