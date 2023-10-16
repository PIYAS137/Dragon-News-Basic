import { useContext, useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar"
import RightNavbar from "../../components/Rightnavbar/RightNavbar"
import BreakingNews from "../../components/SimpleNavbar/BreakingNews"
import SimpleNavbar from "../../components/SimpleNavbar/SimpleNavbar"
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
                console.log(cate);
                if (cate > 0) {
                    const rem = nextDatas.filter(one => parseInt(one.category_id)===cate)
                    setTempDatas(rem)
                    console.log(tempDatas);
                    
                }
                // if(cate==0){
                //     setTempDatas(nextDatas)
                // }
            })
    }, [cate])



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

                    {
                        tempDatas.length==0 && <div className="bg-red-300 p-3 rounded-lg text-black text-center">
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
                <div className="">
                    <RightNavbar createStaus={true} />
                </div>
            </div>
        </div>
    )
}

export default HomePage