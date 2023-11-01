import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Pic1 from '../../assets/1.png'
import Pic2 from '../../assets/2.png'
import Pic3 from '../../assets/3.png'
import { FaCalendar } from "react-icons/fa";
import { AuthContext } from "../../export/Auth/AuthContextProvider"
import { categorysData } from "../../../categories"


const LeftNavbar = () => {
    const {setDatasByClick}=useContext(AuthContext)
    const [categorys, setCategorys] = useState([])
    const [activeBar,setActiveBar]=useState(null)

    useEffect(() => {
       setCategorys(categorysData)
    }, [])


    const handleClickCategroy=(sid,i)=>{
        setDatasByClick(sid)
        setActiveBar(i)
    }


    return (
        <div>
            <div className="space-y-2">
                <h1 className="font-bold text-lg mb-1">All Category</h1>
                <button className="text-lg py-2 font-semibold rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-white w-full">
                    National News
                </button>
                <div className="text-gray-400 font-semibold pl-6 space-y-3 py-5">
                    {categorys && categorys.map((one,i) => <Link onClick={()=>handleClickCategroy(one.id,i)}
                    className={`block ${i===activeBar?"activeBarx":""}`}
                    key={one.id}>{one.name}</Link>)}
                </div>
                <div className="bg-red-60 space-y-3">
                    <div>
                        <img className="w-full rounded-lg" src={Pic1} alt="" />
                        <h1 className=" text-[20px] py-5 font-semibold dark:text-gray-400">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className="flex items-center text-sm space-x-4 text-gray-500">
                            <span className="font-semibold text-black dark:text-gray-400">Sports</span>
                            <span className="flex items-center space-x-2">
                                <FaCalendar />
                                <span>Jan 4, 2023</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <img className="w-full rounded-lg" src={Pic2} alt="" />
                        <h1 className=" text-[20px] py-5 font-semibold dark:text-gray-400">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className="flex items-center text-sm space-x-4 text-gray-500">
                            <span className="font-semibold text-black dark:text-gray-400">Sports</span>
                            <span className="flex items-center space-x-2">
                                <FaCalendar />
                                <span>Jan 4, 2023</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <img className="w-full rounded-lg" src={Pic3} alt="" />
                        <h1 className=" text-[20px] py-5 font-semibold dark:text-gray-400">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className="flex items-center text-sm space-x-4 text-gray-500">
                            <span className="font-semibold text-black dark:text-gray-400">Sports</span>
                            <span className="flex items-center space-x-2">
                                <FaCalendar />
                                <span>Jan 4, 2023</span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftNavbar