// hooks
import likeIcon from '@/assets/icons/cards/thumbs-up.svg';
import { useState } from 'react';

const Card = ({ title, liked }) => {
    // useState
    const [hasLiked, setHasLiked] = useState(false);

    return (    
        <div className="space-y-4 bg-white p-4 rounded shadow text-black">
            <picture className="block">
                <source srcSet={`https://source.unsplash.com/400x400/?${title}`} type="image/webp" />
                <img src={`https://source.unsplash.com/400x400/?${title}`} alt={title} className='w-full h-64 object-cover rounded mb-4' />
            </picture>
            <h1 className="text-2xl font-medium">{title}</h1>
            <div className="flex items-cente gap-3">
                {/* {hasLiked ? 'Unlike' : 'Like'} */}
                <button onClick={() => setHasLiked(!hasLiked)}>
                    <img src={likeIcon} alt="Like" className="w-8" />
                </button>
                <likeIcon className="w-6 text-red-500"/>
                <button onClick={() => setHasLiked(!hasLiked)}>
                    {hasLiked ? 'Unlike' : 'Like'}
                </button>
            </div>

        </div>
    )
}

export default Card