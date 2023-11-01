import { FaRegBookmark, FaBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { addToLocalStorage, removeIdFromLS, getDataFromLS } from '../../LocalStorage/LocalStorage.js'
import { AuthContext } from "../../export/Auth/AuthContextProvider.jsx";


const SingleNews = ({ data }) => {
    const [status, setStatus] = useState(false)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [shareStatus, setShareStatus] = useState(false);

    const handleClickShare = (_id) => {
        setShareStatus(true);
        // share link opt!!!
        navigator.clipboard.writeText(`http://localhost:5173/news/${_id}`)
        // share link opt!!!

        setTimeout(() => {
            setShareStatus(false)
        }, 1000)
    }


    const handleClick = (_id) => {

        if (!user) {
            navigate('/login')
            Swal.fire(
                'You should be Logged In for it!',
            )
            return
        }

        if (!getDataFromLS().includes(_id)) {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then((result) => {
                if (result.isConfirmed) {
                    setStatus(!status)
                    addToLocalStorage(_id)
                    Swal.fire(
                        'Bookmarked !',
                        'Your file has been bookmarked.',
                        'success'
                    )
                }
            })
        } else {
            setStatus(!status)
            removeIdFromLS(_id)
        }

    }


    return (
        <div className="border border-gray-100 dark:border-gray-700 w-full rounded-lg overflow-hidden shadow-md">
            <div className="bg-gray-100 dark:bg-gray-800 flex justify-between p-5 rounded-t-lg">
                <div className="flex items-center">
                    <div style={{ backgroundImage: `url(${data.author.img})` }} className="bgImg w-10 h-10 bg-red-500 rounded-full"></div>
                    <div className="ml-4">
                        <p className=" text-base font-semibold">Awlad Hossain</p>
                        <span className="text-gray-400 text-sm">2022-08-21</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    {
                        getDataFromLS().includes(data._id) ?
                            <FaBookmark className=" cursor-pointer" onClick={() => { handleClick(data._id) }} />
                            :
                            <FaRegBookmark className=" cursor-pointer" onClick={() => { handleClick(data._id) }} />
                    }
                    {
                        shareStatus ?
                            <FaShareAlt onClick={() => handleClickShare(data._id)} className=" cursor-pointer text-blue-400" />
                            :
                            <FaShareAlt className=" cursor-pointer" onClick={() => handleClickShare(data._id)} />
                    }
                </div>
            </div>
            <div className="px-5">
                <h1 className="py-4 text-[20px] font-semibold">{data.title}</h1>
                <img className="w-full" src={data.image_url} alt="" />
                <p className="text-base mt-8 text-gray-400 text-justify">{data.details.split(" ").slice(0, 45).join(' ')}...</p>
                <Link to={`/news/${data._id}`}>
                    <span className="block font-semibold mt-3 cursor-pointer text-orange-500">Read More</span>
                </Link>
                <hr className="block my-3 border-gray-300 dark:border-gray-700" />
                <div className="flex  items-center justify-between mb-5">
                    <div className="flex  items-center ">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
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


SingleNews.propTypes = {
    data: PropTypes.object.isRequired
}
export default SingleNews