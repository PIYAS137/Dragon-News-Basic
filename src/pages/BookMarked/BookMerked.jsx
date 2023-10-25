import { useEffect, useState } from "react"
import {getDataFromLS} from '../../LocalStorage/LocalStorage'
import SingleCard from "./SingleCard"
import {removeIdFromLS} from '../../LocalStorage/LocalStorage'


const BookMerked = () => {

    const [datas,setDatas]=useState([])
    const ids = getDataFromLS()
    useEffect(()=>{
        fetch('/src/export/data/news.json')
        .then(res=>res.json())
        .then(data=>{
            const temp = []
            ids.forEach(element => {
                const tempx = data.filter(one=>one._id===element)
                temp.push(tempx[0])
            });
            setDatas(temp)
        }).catch(err=>console.log(err))
    },[])


    const handleDeleteBookmard=(_id)=>{
        removeIdFromLS(_id)
        const temp = datas.filter(one=>one._id!==_id)
        setDatas(temp)
    }


  return (
    <div className=" h-screen overflow-y-scroll">
        {
            ids.length ==0 && <h1 className=" text-red-400 text-center my-2">No Bookmark Found !</h1>
        }
        {
            datas.map((one,i)=><SingleCard handleDeleteBookmard={handleDeleteBookmard} key={i} data={one}/>)
        }
    </div>
  )
}

export default BookMerked