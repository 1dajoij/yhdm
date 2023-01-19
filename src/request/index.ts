import axios from "axios";

axios.interceptors.request.use(config => {
    return config;
}, err => {
    console.error(err);
    return Promise.reject(err);
})

axios.interceptors.response.use(function (res) {
    const data = res.data;
    if (res.status === 200) {
        return data
    } else {
        console.error(res)
        return Promise.reject(res)
    }
}, function (error) {
    console.error(error)
    return {
        code: 400,
        message: "请稍后重试！"
    }
});

export default axios;