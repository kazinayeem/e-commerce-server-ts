export interface User{
    username : string,
    email : string,
    password : string,
}

export interface LoginUser{

    email : string,
    password : string,
} 

export interface payloadTypes {
    _id : string,
    username : string,
    email : string,
    isAdmin : boolean
}
