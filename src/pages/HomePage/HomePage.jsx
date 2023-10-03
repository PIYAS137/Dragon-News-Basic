import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar"
import RightNavbar from "../../components/Rightnavbar/RightNavbar"
import BreakingNews from "../../components/SimpleNavbar/BreakingNews"
import SimpleNavbar from "../../components/SimpleNavbar/SimpleNavbar"
import SingleNews from "../../components/SingleNews/SingleNews"

const HomePage = () => {

    const [nextDatas, setNewsDatas] = useState([])

    useEffect(() => {
        fetch('/src/export/data/news.json')
            .then(res => res.json())
            .then(res => setNewsDatas(res))
    }, [])

    console.log(nextDatas);


    return (
        <div>
            <Header />
            <BreakingNews />
            <SimpleNavbar />
            <div className="font-poppins grid grid-cols-4 gap-4">
                <div className="">
                    <LeftNavbar />
                </div>
                <div className="col-span-2">
                    <h1 className="text-[18px] 500 mb-3 font-bold">Dragon News Home</h1>
                    <div className="space-y-7">
                        {nextDatas.map((one) => {
                            return (
                                <SingleNews key={one._id} data={one} />
                            )
                        })}
                    </div>

                </div>
                <div className="">
                    <RightNavbar createStaus={true} />
                </div>
            </div>
        </div>
    )
}

export default HomePage