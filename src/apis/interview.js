import { Client } from "./client";
export const get_recruit_info = async () => {
    try {
        const response = await Client.get('/apply/interview');
        console.log(response.data);
        return response.data;
        
    } catch (e) {
        console.log(e);
    }
    
}