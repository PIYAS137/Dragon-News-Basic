

import Marquee from "react-fast-marquee";




const BreakingNews = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-between rounded-md mb-8">
            <button className=" bg-[#663399] text-white px-5 text-md m-3 rounded-md py-2">Latest</button>
            <Marquee pauseOnHover={true}>
                <h1 className="font-bold dark:text-white flex-1 text-center text-lg">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h1>
            </Marquee>
        </div>
    )
}

export default BreakingNews