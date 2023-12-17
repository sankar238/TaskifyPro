
export const validateForm = (email,password,confirmPassword)=>{
    // console.log(confirmPassword)
    // Email validation
        const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
        const isEmailValid = emailRegex.test(email);
        if(!isEmailValid) return "Please enter a valid email address" 
    // Password validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        const isPasswordValid = passwordRegex.test(password);
        if(!isPasswordValid) return("Password must contain at least 8 characters including upper and lower case letters and a number")
    // Confirm password validation
        if (confirmPassword && (password !== confirmPassword)){
            return( "Passwords do not match")
        }
    return null ;
}

 
// export const validateData = (email,password)=>{
//     const isEmailValid = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
//     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
//     if(!isEmailValid) return( "email is not valid");
//     if(!isPasswordValid) return ("password includes numbers and letters(capital,small)");
//     return null
// }
// export const validateSignUpForm = (formData)=>{
//     // Email validation
//         const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
//         const isEmailValid = emailRegex.test(formData.email);
//         if(!isEmailValid) return "Please enter a valid email address" 
//     // Password validation
//         const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//         const isPasswordValid = passwordRegex.test(formData.password);
//         if(!isPasswordValid) return("Password must contain at least 8 characters including upper and lower case letters and a number")
//     // Confirm password validation
//         if (formData.password !== formData.confirmPassword){
//             return( "Passwords do not match")
//         }
//     return null ;
// }
