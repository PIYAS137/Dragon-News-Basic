import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Pic1 from '../../assets/1.png'
import Pic2 from '../../assets/2.png'
import Pic3 from '../../assets/3.png'
import { FaCalendar } from "react-icons/fa";


const LeftNavbar = () => {

    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        fetch('/src/export/data/categories.json')
            .then(res => res.json())
            .then(res => setCategorys(res))
    }, [])

    console.log(categorys);


    return (
        <div>
            <div className="space-y-2">
                <h1 className="font-bold text-lg mb-2">All Category</h1>
                <button className="text-lg py-2 font-semibold rounded-lg bg-gray-200 w-full">
                    National News
                </button>
                <div className="text-gray-600  pl-6 space-y-3 py-5">
                    {categorys && categorys.map((one) => <Link className="block" key={one.id}>{one.name}</Link>)}
                </div>
                <div className="bg-red-60 space-y-3">
                    <div>
                        <img className="w-full rounded-lg" src={Pic1} alt="" />
                        <h1 className=" text-[20px] py-5 font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className="flex items-center text-sm space-x-4 text-gray-500">
                            <span className="font-semibold text-black">Sports</span>
                            <span className="flex items-center space-x-2">
                                <FaCalendar />
                                <span>Jan 4, 2023</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <img className="w-full rounded-lg" src={Pic2} alt="" />
                        <h1 className=" text-[20px] py-5 font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className="flex items-center text-sm space-x-4 text-gray-500">
                            <span className="font-semibold text-black">Sports</span>
                            <span className="flex items-center space-x-2">
                                <FaCalendar />
                                <span>Jan 4, 2023</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <img className="w-full rounded-lg" src={Pic3} alt="" />
                        <h1 className=" text-[20px] py-5 font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className="flex items-center text-sm space-x-4 text-gray-500">
                            <span className="font-semibold text-black">Sports</span>
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