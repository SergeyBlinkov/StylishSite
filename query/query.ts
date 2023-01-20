import axios from "axios";
import db from '../db.json'
import {throws} from "assert";

type Data = {
    id:number
    name:string
    phone:string
    email:string
}

export const putData = (data:Data) => {
     axios.post('http://localhost:3004/feedback',data)
         .then(() => db.feedback.push(data)
         )
         .catch((e) => throws(e.message))
}