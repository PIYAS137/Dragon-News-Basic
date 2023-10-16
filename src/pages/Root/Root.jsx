import { Outlet } from "react-router-dom"



const Root = () => {

    return (
        <div className=" font-poppins dark:bg-black">
            <div className=" max-w-6xl mx-auto dark:bg-black dark:text-white">
                <Outlet />
            </div>
        </div>
    )
}

export default Root