import Header from "../../components/Header/Header"
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar"
import RightNavbar from "../../components/Rightnavbar/RightNavbar"
import BreakingNews from "../../components/SimpleNavbar/BreakingNews"
import SimpleNavbar from "../../components/SimpleNavbar/SimpleNavbar"

const HomePage = () => {
  return (
    <div>
        <Header/>
        <BreakingNews/>
        <SimpleNavbar/>
        <div className="font-poppins grid grid-cols-4">
        <div className="">
            <LeftNavbar/>
        </div>
        <div className="col-span-2">

        </div>
        <div className="">
            <RightNavbar/>
        </div>
    </div>
    </div>
  )
}

export default HomePage