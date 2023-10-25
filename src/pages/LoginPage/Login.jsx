import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../export/Auth/AuthContextProvider"


const Login = () => {
  const {LoginUser,GoogleLogIn}=useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('')



  const handleSubmit=(event)=>{
    event.preventDefault();

    LoginUser(email,pass)
      .then(res=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Logged In !',
          showConfirmButton: false,
          timer: 2000
        })
        navigate(location?.state ? location.state : '/')
        setEmail('')
        setPass('')
      }).catch(err=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`
        })
        return 
      })
  }
  const handleClickGoogle=()=>{
    GoogleLogIn()
    .then(res=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully Logged In',
        showConfirmButton: false,
        timer: 2000
      })
      navigate(location?.state ? location.state : '/')
    }).catch(err=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Something Went Wrong !',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }


  return (
    <div className="h-screen max-w-6xl mt-10 text-[#706F6F]">
      {/* <SimpleNavbar /> */}
      <form onSubmit={handleSubmit} className=" max-w-xl mx-auto md:py-20 p-8 md:px-20 rounded-lg dark:bg-gray-800 bg-gray-100">
        <h1 className="font-semibold text-3xl text-center">Login your account</h1>
        <hr className=" my-10" />
        <div className="">
        <label htmlFor="" className="mb-6 block">
          <h1 className=" text-md font-semibold">Email Address</h1>
          <input required autoFocus onChange={e=>setEmail(e.target.value)} value={email} type="email" name="email" placeholder="Enter your email address" className="bg-white p-5 mt-2 w-full rounded-md" />
        </label>
        <label htmlFor="">
          <h1 className=" text-md font-semibold">Password</h1>
          <input required onChange={e=>setPass(e.target.value)}value={pass} type="password" placeholder="Enter your password" className="bg-white p-5 mt-2 w-full rounded-md" />
        </label>
        <button className="bg-[#403F3F] text-white p-3 w-full mt-5 rounded-md">Login</button>
        <button onClick={handleClickGoogle} className="bg-[#403F3F] text-white p-3 w-full mt-2 rounded-md">Login With Google</button>
        <p className="text-sm text-center font-semibold mt-5">Dont’t Have An Account ? <Link state={location.state} to='/registration'><span className="text-red-500">Register</span></Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login