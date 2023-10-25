import { Outlet } from "react-router-dom"
import SimpleNavbar from "../../components/SimpleNavbar/SimpleNavbar"
import Header from "../../components/Header/Header"
import BreakingNews from "../../components/SimpleNavbar/BreakingNews"



const Root = () => {

    return (
        <div className=" font-poppins dark:bg-black">
            <div className=" max-w-6xl mx-auto dark:bg-black dark:text-white p-2 md:p-0">
                <Header/>
                <SimpleNavbar/>
                <BreakingNews/>
                <Outlet />
            </div>
        </div>
    )
}

export default Root