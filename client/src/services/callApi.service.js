import axios from "axios"


export const apiBack = async (config) => {
    try{
        const response = await axios(config)
        return {
            data: response.data,
            error: null
        }
    } catch(error){
        if(axios.isAxiosError(error)){
            const axiosError = error;
            const {response} = axiosError
            let message = "http request failed"

            if(response.data && response.data.error){
                message = response.data.error
            }

            return {
                data:null,
                error: message
            }

        }
        return {
            data: null,
            error: error.message
        }
    }
}