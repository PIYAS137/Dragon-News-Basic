import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import RightNavbar from "../../components/Rightnavbar/RightNavbar"
import { useEffect, useState } from "react"
import { FaCalendar, FaChevronLeft } from "react-icons/fa"
import Pic1 from '../../assets/1.png'
import Pic2 from '../../assets/2.png'
import Pic3 from '../../assets/3.png'
import SimpleNavbar from "../../components/SimpleNavbar/SimpleNavbar"


const ViewDetails = () => {

    const sid = useParams()

    const [datas, setDatas] = useState([])
    const [data, setData] = useState()

    useEffect(() => {
        fetch('/src/export/data/news.json')
            .then(res => res.json())
            .then(res => setDatas(res))

        if (sid.sid) {
            const temp = datas.filter((one) => one._id === sid.sid);
            setData(temp[0]);
        }
    }, [datas])





    return (
        <>
            <div className="mb-10">
            <Header />
            <SimpleNavbar/>
            </div>
            {data && <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="col-span-3 rounded-lg overflow-hidden mt-7">
                    <h1 className="font-bold text-xl mb-3">Dragon News</h1>
                    <div className="px-5 border rounded-lg">
                        <h1 className="py-4 text-[20px] font-semibold">{data?.title}</h1>
                        <img className="w-full" src={data.image_url} alt="" />
                        <p className="text-base mt-8 text-gray-400">{data.details}</p>
                        <div>
                            <Link to="/" className="my-5 text-white inline-block">
                                <div className="flex space-x-2 px-3 items-center rounded-sm overflow-hidden bg-red-500 p-2">
                                    <FaChevronLeft />
                                    <span className="block font-semibold cursor-pointer ">All news in this category</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h1 className="mt-8 mb-5 font-bold text-xl">Editors Insight</h1>
                        <div className="bg-red-60 gap-3 mt-3 grid grid-cols-3">
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
                <div className="mt-8">
                    <RightNavbar createStaus={false}/>
                </div>
            </div>}
        </>
    )
}

export default ViewDetails