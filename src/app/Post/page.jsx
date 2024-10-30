'use client'
import {useState} from "react";
import { useRouter } from "next/navigation";
const page = () => {
    const [submit, setSubmit] = useState("");
    const [title , setTitle] = useState(null);
    const [desc , setDesc] = useState(null);
    const router = useRouter();

    const check = (e) => {
        setSubmit(e.target.value);
    }

    const menuClick = (e) => {
        e.preventDefault()
        router.push('/')
    }

    const publish = () => {
        if(title && desc) {
            setTitle(true)
            setDesc(true)
        } else {
            if(!title) setTitle("please add your title");
            if(!desc) setDesc("please add your description")
        }
    }  

    return (
            <div>
        <div className="navbar">
            <div className="nav-stuff">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="icon" onClick={menuClick}/>
            <div className="nav-contact">Contact</div>
            <div className="nav-about-us">About Us</div>
            </div>
        </div>
        <div className="empty-box"></div>
        <div className="display-flex">
            <div className="postBlogContainer">
                <div>
                    <input className="title" placeholder="Add your title..." onChange={(e) => check(e)}></input>
                    {title ? <div>{title}</div> : null}
                </div>
                <div>
                    <input className="description" placeholder="Description here..." onChange={(e) => check(e)}></input>
                    {desc ? <div>{desc}</div> : null}
                </div>
                <button onClick = {publish} className="submitButton">Submit</button>
            </div>
        </div>
    </div>
    )
}

export default page;