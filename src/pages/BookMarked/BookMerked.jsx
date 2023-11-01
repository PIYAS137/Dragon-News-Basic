import { useEffect, useState } from "react"
import { getDataFromLS } from '../../LocalStorage/LocalStorage'
import SingleCard from "./SingleCard"
import { removeIdFromLS } from '../../LocalStorage/LocalStorage'
import { newsDatasx } from "../../../news"


const BookMerked = () => {

    const [datas, setDatas] = useState(newsDatasx)
    const ids = getDataFromLS()
    useEffect(() => {

            setDatas(newsDatasx)
            console.log(ids);

            const temp = []
            ids.forEach(element => {
                // console.log(element);
                console.log(datas);
                const tempx = datas.filter(one =>one._id===element)
                console.log(tempx[0]);
                temp.push(tempx[0])
            });
            setDatas(temp)
    }, [])


    const handleDeleteBookmard = (_id) => {
        removeIdFromLS(_id)
        const temp = datas.filter(one => one._id !== _id)
        setDatas(temp)
    }


    return (
        <div className=" h-screen overflow-y-scroll">
            {
                ids.length == 0 && <h1 className=" text-red-400 text-center my-2">No Bookmark Found !</h1>
            }
            {
                datas?.map((one, i) => <SingleCard handleDeleteBookmard={handleDeleteBookmard} key={i} data={one} />)
            }
        </div>
    )
}

export default BookMerked