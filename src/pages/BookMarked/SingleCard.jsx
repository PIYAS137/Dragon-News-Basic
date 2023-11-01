import { Link } from "react-router-dom";



const SingleCard = ({handleDeleteBookmard,data}) => {

    const handleDeleteDataFromLs=(_id)=>{
        handleDeleteBookmard(_id)
    }
  return (
    <div className=" border justify-center overflow-hidden items-center md:justify-between flex-col md:flex-row flex m-5 rounded-xl">

        <div >
            <img className="pt-3 md:pt-0 max-w-xs" src={data.image_url} alt="" />
        </div>
           <div className=" flex items-center font-semibold max-w-sm">
           <h1 className="text-xs text-center my-3 md:my-0 md:text-lg">{data.title}</h1>
           </div>


        <div className=" flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 justify-center mr-5 mb-3 md:mb-0">
            <button className="btn btn-error border-none text-white" onClick={()=>{handleDeleteDataFromLs(data._id)}}>delete</button>
            <Link to={`/news/${data._id}`}>
            <button className="btn btn-primary border-none">View Details</button>
            </Link>
        </div>
    </div>
  )
}

export default SingleCard