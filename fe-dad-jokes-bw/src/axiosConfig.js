const axiosConfig = {
    headers: {
        autorization: localStorage.getItem('token')
    }
}

export default axiosConfig;