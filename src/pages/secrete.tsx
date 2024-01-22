import rick from "@/assets/rick.webp"
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player"
import { useEffect } from "react";

export default function(){
    const navigator = useNavigate()
    function handleSingout(){
        localStorage.clear()
        navigator("/")
    }

    useEffect(() => {
        if(!localStorage.getItem("token") && !localStorage.getItem("email")){
            navigator("/")
        }
    }, [])

    return(
        <>
        <div className="absolute top-6 left-6 text-4xl cursor-pointer z-10" onClick={handleSingout}><CiLogout /></div>
        <img className="w-screen h-screen object-cover" onDragStart={(e) => e.preventDefault()} src={rick} alt="" />
        <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
            <div className="w-3/4 h-4/5 bg-slate-50">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    controls={false}
                    playing={false}
                    width="100%"
                    height="100%"
                />

            </div>
        </div>

        </>

    );
}