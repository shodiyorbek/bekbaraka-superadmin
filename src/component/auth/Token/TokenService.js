const isTokenExpired=(token)=> {
    try {
        const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Decode the token payload
        const expirationTime = tokenPayload.exp * 1000; // Convert the UNIX timestamp to milliseconds


        return Date.now() >= expirationTime;
    } catch (error) {
        return true;
    }
}
export default isTokenExpired;