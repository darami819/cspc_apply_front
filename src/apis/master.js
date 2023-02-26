import { Client } from "./client";
export const get_master_info = async () => {
    try {
        const response = await Client.get('/user/master');
        console.log(response.data);
        return response.data;
        
    } catch (e) {
        console.log(e);
    }
    
}