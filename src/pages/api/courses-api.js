import axios from "axios"

const handler= async(req, res)=>{
    try{
        const {data}=await axios.get('http://localhost:3000/assets/data.json')
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
}
export  default handler;