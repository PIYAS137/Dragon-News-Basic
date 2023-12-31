import { FaFacebook, FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Swal from 'sweetalert2'
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'
import BackPart from '../../assets/bg1.png'
import { useContext } from "react";
import { AuthContext } from "../../export/Auth/AuthContextProvider";


const RightNavbar = ({ createStaus }) => {
    const {GoogleLogIn,user}=useContext(AuthContext)

    const handleGoogleLogIn=()=>{
        if(!user){
            GoogleLogIn()
        .then(res=>{
            console.log(res);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Logged In !',
                showConfirmButton: false,
                timer: 2000
              })
        }).catch(err=>{
            console.log(err)
        })
        }else{
            Swal.fire("You Already Logged In !")
        }
    }


    return (
        <div>
            <div className="space-y-2 ">
                <h1 className="font-bold text-lg">Login With</h1>
                <button onClick={handleGoogleLogIn} className="btn dark:border-gray-700 dark:text-gray-300 border-gray-200 w-full btn-outline">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn dark:border-gray-700 dark:text-gray-300 border-gray-200 w-full btn-outline">
                    <FaFacebook />
                    Facebook
                </button>
                <button className="btn dark:border-gray-700 dark:text-gray-300 border-gray-200 w-full btn-outline">
                    <FaGithub />
                    Github
                </button>
            </div>

            <div className=" mt-8">
                <h1 className="font-bold text-lg mb-2">Find Us On</h1>
                <div  className="border dark:border-gray-700 dark:text-gray-300 border-gray-200 p-3 rounded-t-lg space-x-1 items-center w-full btn-outline flex justify-start cursor-pointer">
                    <FaFacebookF/>
                    <a>Facebook</a>
                </div>
                <div className="border-x dark:border-gray-700 dark:text-gray-300 p-3 border-gray-200 space-x-2 items-center w-full btn-outline flex justify-start cursor-pointer">
                    <FaTwitter />
                    <a>Facebook</a>
                </div>
                <div className="border p-3 dark:border-gray-700 dark:text-gray-300 border-gray-200 space-x-2 items-center rounded-b-lg w-full btn-outline flex justify-start cursor-pointer">
                    <FaInstagram />
                    <a>Instagram</a>
                </div>
            </div>

            <div className="bg-zinc-100 dark:bg-transparent dark:border dark:border-gray-700 mt-8 p-2 flex justify-center rounded-lg flex-col items-center">
                <h1 className="font-bold text-lg mb-2 w-full p-3">Q-Zone</h1>
                <img className="py-2" src={Qzone1} alt="" />
                <img className="py-2" src={Qzone2} alt="" />
                <img className="py-2" src={Qzone3} alt="" />
            </div>
            {createStaus && <div className=" dark:border dark:border-gray-700 my-8 overflow-hidden flex flex-col items-center justify-center text-center rounded-lg" style={{ backgroundImage: `url(${BackPart})` }}>
                <div className="bgx p-10 py-16 text-white ">
                    <h1 className="font-bold text-2xl">Create an Amazing Newspaper</h1>
                    <p className="my-10">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className=" bg-[#D72050] text-white px-3 py-2 text-[20px] rounded-sm py-1">Learn More</button>
                </div>
            </div>}
        </div>
    )
}

export default RightNavbar