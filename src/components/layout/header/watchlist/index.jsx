import React, { memo } from "react";
// redux
import { useSelector } from "react-redux";
import { getItems } from "../../../../providers/redux/slices/watchlist-slice";
// react icons 
import { FaBookmark } from "react-icons/fa";

// component to add movies to watchlist
function WatchList() {
    // getting itemsfrom watchlist
    const watchList = useSelector(getItems);

    return (
        <div className="flex relative items-center mr-5 h-18 ">
            <FaBookmark className="w-10 h-10 md:h-8 md:w-8 text-yellow mt-2 sm:h-6 sm:w-6" />
            <div>
                {watchList.items.length ? (
                    <div className="bg-black absolute top-1 rounded-full -right-1 w-6 h-6 flex justify-center items-center text-white sm:w-4 sm:h-4 sm:text-xs">
                        {watchList.items.length}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default memo(WatchList);   