import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const SingleNews = ({ data }) => {
    return (
        <div className="border border-gray-100 w-full rounded-lg overflow-hidden shadow-md">
            <div className="bg-gray-100 flex justify-between p-5 rounded-t-lg">
                <div className="flex items-center">
                    <div style={{ backgroundImage: `url(${data.author.img})` }} className="bgImg w-10 h-10 bg-red-500 rounded-full"></div>
                    <div className="ml-4">
                        <p className=" text-base font-semibold">Awlad Hossain</p>
                        <span className="text-gray-400 text-sm">2022-08-21</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </div>
            <div className="px-5">
                <h1 className="py-4 text-[20px] font-semibold">{data.title}</h1>
                <img className="w-full" src={data.image_url} alt="" />
                <p className="text-base mt-8 text-gray-400 text-justify">{data.details.split(" ").slice(0,45).join(' ')}...</p>
                <Link to={`/news/${data._id}`}>
                    <span className="block font-semibold mt-3 cursor-pointer text-orange-500">Read More</span>
                </Link>
                <hr className="block my-3" />
                <div className="flex  items-center justify-between mb-5">
                    <div className="flex  items-center ">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <span className="block mt-1 text-gray-400 ml-2 ">{data.rating.number}</span>
                    </div>
                    <div className="text-gray-400 flex items-center space-x-2">
                        <FaEye />
                        <span>{data.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleNews