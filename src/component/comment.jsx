import React,{useState,useEffect} from "react"
import axios from "axios"
const Comment = () => {
    const [inputs,setInput] = useState({
        title:"",

    })
    const [err, setErr] = useState(null)


    const handleChange = e =>{
        setInput(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    console.log(inputs)

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8080/pcs/comment/setComment",inputs)
            window.location.reload()
        }catch(err){
            setErr(err.response.data)
        }

    }
    return (

        <div className="cmt_home">
            <div className="comment_home">
                <h1>Tell us </h1><h2>about what you need</h2>
                <form>
                    <textarea name="title" id="" cols="30" rows="10" onChange={handleChange} placeholder="Type your comment..."></textarea>
                    <button onClick={handleSubmit}>Submit</button>
                </form>

            </div>
            <div className="bg_home"></div>

        </div>

    )
}
export default Comment

