import axios from "axios"

const handler= async(req, res)=>{
    try{
        const {data}=await axios.get('https://jsonkeeper.com/b/85I9')
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
}
export  default handler;