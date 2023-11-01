import { useContext, useEffect, useState } from "react"
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar"
import RightNavbar from "../../components/Rightnavbar/RightNavbar"
import SingleNews from "../../components/SingleNews/SingleNews"
import { AuthContext } from "../../export/Auth/AuthContextProvider"

const HomePage = () => {
    const { cate } = useContext(AuthContext)
    const [nextDatas, setNewsDatas] = useState([])
    const [tempDatas, setTempDatas] = useState(nextDatas)

    useEffect(() => {
        fetch('/src/export/data/news.json')
            .then(res => res.json())
            .then(res => {
                setNewsDatas(res)
                setTempDatas(res)
                if (cate > 0) {
                    const rem = nextDatas.filter(one => parseInt(one.category_id) === cate)
                    setTempDatas(rem)
                }
            })
    }, [cate,tempDatas])


    return (
        <div>
            <div className="font-poppins grid md:grid-cols-3 lg:grid-cols-4 gap-4 h-screen overflow-y-hidden">
                <div className="overflow-y-scroll hidden md:block">
                    <LeftNavbar />
                </div>
                <div className=" col-span-2 overflow-y-scroll">
                    <div className="flex justify-between">
                        <h1 className="text-[18px] 500 mb-3 font-bold">Dragon News Home</h1>
                        <h1 className="text-[18px] 500 mb-3 font-bold"><span className=" text-purple-600">{tempDatas.length} </span> News Found</h1>
                    </div>
                    {
                        tempDatas.length == 0 && <div className="bg-red-300 p-3 rounded-lg text-black text-center">
                            <p>No Data found for this category !</p>
                        </div>
                    }
                    <div className="space-y-7">
                        {tempDatas.map((one) => {
                            return (
                                <SingleNews key={one._id} data={one} />
                            )
                        })}
                    </div>
                </div>
                <div className="overflow-y-scroll hidden lg:block">
                    <RightNavbar createStaus={true} />
                </div>
            </div>
        </div>
    )
}

export default HomePage