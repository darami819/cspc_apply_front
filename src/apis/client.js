import axios from 'axios';
import { get_auth_header } from 'hooks/check_login';
const API_SERVER_URL = 'https://apply.cspc.me/api'

export const Client = axios.create({
    baseURL: API_SERVER_URL,
    headers: get_auth_header().headers

})