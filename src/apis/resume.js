import { Client } from "./client";
import { get_auth_header } from "hooks/check_login";
export const get_resume = async () => {
    const response = await Client.get('/apply/resume',get_auth_header())
    console.log(response.status)
    return response.data
}

export const post_resume = async (data) => {
    const response = await Client.post('/apply/resume',get_auth_header(),data)
    console.log(response.status)
    return response.data
}

export const update_resume = async (data) => {
    const response = await Client.patch('/apply/resume',get_auth_header(),data)
    console.log(response.status)
    return response.data
}

