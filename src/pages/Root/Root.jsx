import { Outlet } from "react-router-dom"
import AppNavbar from "../../layout/AppNavbar"




const Root = () => {


    return (
        <div className=" font-poppins">
            <AppNavbar />
            <div className=" max-w-6xl mx-auto dark:bg-black dark:text-white">
                <Outlet />
            </div>
        </div>
    )
}

export default Root