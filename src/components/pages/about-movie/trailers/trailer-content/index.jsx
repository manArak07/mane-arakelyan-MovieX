import { memo } from "react";
//icons
import { IoIosCloseCircle } from "react-icons/io";

const TrailerContent = memo(({ onClose, videoKey }) => {
    // setting URL for trailers
    const videoUrl = `https://www.youtube.com/embed/${videoKey}`;

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-black opacity-50 inset-0 fixed z-40"></div>
            <div className=" max-w-lg w-full p-6 rounded-lg fixed z-50">
                {/*trailer play icon */}
                <div className="flex justify-end">
                    <button className="block h-10 rounded-md" onClick={onClose}>
                        <IoIosCloseCircle className="text-3xl text-red-500 md:mt-16" />
                    </button>
                </div>
                {/* այտեղ կարդացի,որ react-ի  որոշ տարբերակներում video և source թեգերը կարող են չաշխատել, դրա համար iframe եմ օգտագործել*/}
                <div>
                    <iframe src={videoUrl} className="w-full h-72 md:h-56 md:mt-14" frameBorder="0" allowFullScreen></iframe>
                </div>

            </div>
        </div>
    );
});

export default TrailerContent;
