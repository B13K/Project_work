import { apiBack } from "./callApi.service"

const BASE_URL = "http://localhost:3001"
export const loginService = async (email, password) => {
    const config = {
        baseURL: BASE_URL,
        url: "/auth/login",
        method: "POST",
        data: {
            email: email,
            password: password
        }
    }

    const response = await apiBack(config)
    return response;
}

export const signUpService = async(newUser) => {
    const config = {
        baseURL: BASE_URL,
        url: "/auth/signup",
        method: "POST",
        data: newUser
    }

    const response = await apiBack(config)
    return response;
}