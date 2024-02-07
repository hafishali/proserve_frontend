// import axios
import axios from "axios"

export const commonApi=async(httprequest,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httprequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{'Content-Type':'application/json'}/* in our project there are two type of content to upload */
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })

}