import { useContext, useState } from "react";
import SimpleNavbar from "../../components/SimpleNavbar/SimpleNavbar"
import { AuthContext } from "../../export/Auth/AuthContextProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Registration = () => {

    const { createUser, UpdateUserProfile } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [photo, setPhoto] = useState('');
    const [err, setErr] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate()

    const hendleChangeChecked = () => {
        const checked = event.target.checked;
        setIsChecked(checked)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErr('')
        if (isChecked) {
            createUser(email, pass)
                .then(res => {
                    UpdateUserProfile(res.user, name, photo)
                        .then(res => {
                            console.log(res);
                            navigate(location?.state ? location.state : '/')
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Successfully Registered User !',
                                showConfirmButton: false,
                                timer: 2000
                            })
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${err.message}`,
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                })
        } else {
            console.log("NOT SUCCESSFULL");
            setErr("Accept our privacy")
            return;
        }

        setName('');
        setEmail('');
        setPass('');
        setPhoto('');
    }

    return (
        <div className="max-w-6xl  h-screen  text-[#706F6F] mt-10">
            {/* <SimpleNavbar /> */}
            <form onSubmit={handleSubmit} className=" md:max-w-2xl mb-20 mx-auto p-8 md:p-20 rounded-lg dark:bg-gray-800 bg-gray-100">
                <h1 className="font-semibold text-3xl text-center">Register your account</h1>
                <hr className=" my-10" />
                <div className="">
                    <label htmlFor="" className="mb-6 block">
                        <h1 className=" text-md font-semibold">Your Name</h1>
                        <input autoFocus required onChange={e => setName(e.target.value)} value={name} name="name" type="text" placeholder="Enter your email address" className="bg-white p-5 mt-2 w-full rounded-md" />
                    </label>
                    <label htmlFor="" className="mb-6 block">
                        <h1 className=" text-md font-semibold">Photo URL</h1>
                        <input required onChange={e => setPhoto(e.target.value)} value={photo} type="text" placeholder="Enter your email address" className="bg-white p-5 mt-2 w-full rounded-md" />
                    </label>
                    <label htmlFor="" className="mb-6 block">
                        <h1 className=" text-md font-semibold">Email</h1>
                        <input required onChange={e => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="Enter your email address" className="bg-white p-5 mt-2 w-full rounded-md" />
                    </label>
                    <label htmlFor="">
                        <h1 className=" text-md font-semibold">Password</h1>
                        <input required onChange={e => setPass(e.target.value)} value={pass} name="password" type="password" placeholder="Enter your email address" className="bg-white p-5 mt-2 w-full rounded-md" />
                    </label>
                    <label htmlFor="" className="flex mt-6 space-x-2 text-sm">
                        <input required onChange={hendleChangeChecked} type="checkbox" className="checkbox dark:border-gray-500 checkbox-sm" />
                        <p>Accept <span className="font-semibold">Term & Conditions</span></p>
                    </label>
                    <button className="bg-[#403F3F] text-white p-3 w-full mt-5 rounded-md">Register</button>
                </div>
                {err && <p className="text-red-600">{err}</p>}
                <p className=" text-sm mt-2">Already have an account? <Link className=" text-red-500 font-bold" to={'/login'}>Log In</Link></p>
            </form>
        </div>
    )
}

export default Registration