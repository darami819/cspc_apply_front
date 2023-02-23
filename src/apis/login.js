import { Client } from "./client";

export const login = async (id, password) => {
    const response = await Client.post('/user/check-id',{ 'student_id': id, 'password': password } )
    console.log(response.status)
    return [response.status, response.data]
}

