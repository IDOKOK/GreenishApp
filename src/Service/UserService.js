import ApiService from "../API/route";

export const registerUser = async (data) => {
  try {
    const userService = new ApiService("user");
    const res = await userService.create(data);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const loginUser = async (data) => {
  try {
    const userService = new ApiService("login");
    const res = await userService.auth(data);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const auth = async (data, token) => {
  try {
    const userService = new ApiService("login-otp");
    const res = await userService.validateOtp(data, token);
    return res;
  } catch (e) {
    return e.message;
   }
}

export const authorizeUser = async (token) => {
  try {
    const userService = new ApiService(`auth/${token}`);
    const res = await userService.authorize();
    return res.data;
    
  } catch(e){
   console.log(e.message);
  }
}