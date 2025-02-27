import axios from "axios";

const BASE_URL = "https://blood-bank-project-8lri.onrender.com/api/v1/";

export const publicRequest = axios.create({
    baseURL: BASE_URL
}
)