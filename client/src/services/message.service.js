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

export const getService = async (url) => {
    const config = {
        baseURL: BASE_URL,
        url: url,
        method: "GET",
    }

    const response = await apiBack(config)
    return response
}

export const postService = async (url, data) => {
    const config = {
        baseURL: BASE_URL,
        url: url,
        method: "POST",
        data: data
    }

    const response = apiBack(config)
    return response;
}

export const putService = async (url, data) => {
    const config = {
        baseURL: BASE_URL,
        url: url,
        method: "PUT",
        data: data
    }

    const response = apiBack(config)
    return response;
}

export const deleteService = async (url, data) => {
    const config = {
        baseURL: BASE_URL,
        url: url,
        method: "DELETE",
        data: data
    }

    const response = apiBack(config)
    return response;
}