import axios from "../util/request"
export const loginFn=(val)=>{
    return axios({
        url:"/adminapi/login",
        method:"post",
        data:val
    })
}