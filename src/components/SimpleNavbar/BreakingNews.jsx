

import Marquee from "react-fast-marquee";




const BreakingNews = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-between rounded-sm my-8">
            <button className=" bg-[#D72050] text-white px-3 text-[20px] m-3 rounded-sm py-1">Latest</button>
            <Marquee pauseOnHover={true}>
                <h1 className="font-bold flex-1 text-center dark:text-black text-lg">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h1>
            </Marquee>
        </div>
    )
}

export default BreakingNews