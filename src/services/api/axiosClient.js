import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://685a53d39f6ef9611155e75f.mockapi.io/",
    headers: {
        "Content-Type": "application/json",
    },
})

export default axiosClient;