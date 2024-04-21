export function useToken() {
    const getToken = () =>{
        const tokenString = sessionStorage.getItem("token");
        
        if(tokenString !== undefined && tokenString !== null){
            return true;
        }
         return false
    };

    
    const saveToken = (email: string, username: string, token: string) =>{
    
        sessionStorage.setItem(
            "username",
            JSON.stringify(username)
        )

        sessionStorage.setItem(
            "email",
            JSON.stringify(email)
        )

        sessionStorage.setItem(
            "token",
            JSON.stringify(token)
        );
    
    };

    return {
       getToken,
       saveToken
    };
}