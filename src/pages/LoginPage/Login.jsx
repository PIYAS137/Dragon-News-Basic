
import { Link, useLocation, useNavigate } from "react-router-dom"
import SimpleNavbar from "../../components/SimpleNavbar/SimpleNavbar"
import { useContext, useState } from "react"
import { AuthContext } from "../../export/Auth/AuthContextProvider"


const Login = () => {
  const {LoginUser}=useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('')



  const handleSubmit=(event)=>{
    event.preventDefault();

    LoginUser(email,pass)
      .then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
      setEmail('')
      setPass('')
      navigate(location?.state ? location.state : '/')
  }



  return (
    <div className="h-screen max-w-6xl text-[#706F6F]">
      <SimpleNavbar />
      <form onSubmit={handleSubmit} className=" max-w-xl mx-auto py-20 px-20 rounded-lg bg-gray-100">
        <h1 className="font-semibold text-3xl text-center">Login your account</h1>
        <hr className=" my-10" />
        <div className="">
        <label htmlFor="" className="mb-6 block">
          <h1 className=" text-md font-semibold">Email Address</h1>
          <input onChange={e=>setEmail(e.target.value)} value={email} type="email" name="email" placeholder="Enter your email address" className="bg-white p-5 mt-2 w-full rounded-md" />
        </label>
        <label htmlFor="">
          <h1 className=" text-md font-semibold">Password</h1>
          <input onChange={e=>setPass(e.target.value)}value={pass} type="password" placeholder="Enter your password" className="bg-white p-5 mt-2 w-full rounded-md" />
        </label>
        <button className="bg-[#403F3F] text-white p-3 w-full mt-5 rounded-md">Login</button>
        <p className="text-sm text-center font-semibold mt-5">Dont’t Have An Account ? <Link state={location.state} to='/registration'><span className="text-red-500">Register</span></Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login