import { IAuth } from "../interface/authInterface";

export const SignupValidation = (formData:IAuth) : any => {
    const newErrors = {
        email: '',
        name:'',
        password: '',
        conformPassword:'',
    };
    if (!formData.email?.trim()) {
        newErrors.email = 'Email is required *';
    }else if (!/^[\w-.]+@[\w-]+\.+[\w-]{2,4}$/.test(formData.email)) {
        newErrors.email = 'Invalid email format *';
    }
    if(!formData.name?.trim()){
        newErrors.name = "Name is required *"
    }
    if (!formData.password?.trim()) {
        newErrors.password = 'Password is required *';
    }else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters *';
    }
    if (formData.password !== formData.conformPassword) {
    newErrors.conformPassword = 'Password do not match *';
    } 
      
    return newErrors;        
}