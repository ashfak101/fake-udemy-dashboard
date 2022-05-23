import axios from "axios"

const handler= async(req, res)=>{
    try{
        const {data}=await axios.get('https://jsonkeeper.com/b/UFAZ')
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
}
export  default handler;