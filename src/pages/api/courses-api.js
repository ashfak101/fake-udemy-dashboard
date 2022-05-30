import axios from "axios"

const handler= async(req, res)=>{
    try{
        const {data}=await axios.get('https://fake-udemy-dashboard.vercel.app/assets/data.json')
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
}
export  default handler;