// hooks
import ThumbsDownSvg from '@/assets/icons/cards/thumbs-down.svg?react';
import ThumbsUpSvg from '@/assets/icons/cards/thumbs-up.svg?react';
import { useState, useEffect } from 'react';

const Card = ({ title }) => {
    // useState
    const [likeStatus, setLikeStatus] = useState(false);
    const [viewCount, setviewCount] = useState(0);

    // useEffect
    useEffect(() => {
        console.log("CARD RENDERED");
    }, [viewCount]);

    // functions
    // const toggleLike = (value) => setLikeStatus(likeStatus === value ? false : value);

    return (
        <div 
            className="space-y-6 bg-white p-4 rounded shadow text-black" 
            onClick={() => setviewCount((prevState) => prevState + 1)}
            >
            <h1 className="text-2xl text-black font-medium">{title}</h1>

            {/* <picture className="block"> */}
                {/* <source srcSet="" type="image/webp" /> */}
                <img src="src/assets/react.svg" alt="svg" />
            {/* </picture> */}

            <div className="flex items-center gap-3">
                <button className="cursor-pointer p-1" onClick={() => toggleLike("like")} >
                    <ThumbsUpSvg className={`w-5 h-fit ${likeStatus === "like" ? 'fill-blue-500!' : 'fill-black!'}`}/>
                </button>
                <button className="cursor-pointer" onClick={() => toggleLike("dislike")} >
                    <ThumbsDownSvg className={`w-5 h-fit ${likeStatus === "dislike" ? 'fill-blue-500!' : 'fill-black!'}`}/>
                </button>
                <p>
                    Views: {viewCount}
                </p>
            </div>
        </div>
    )
}

export default Card