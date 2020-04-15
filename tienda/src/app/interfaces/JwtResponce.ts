export interface JwtResponceI{
    dataU:{
        _id:string,
        name:string,
        email:string,        
        acessToken:string,
        expiresIn:string
    }
}