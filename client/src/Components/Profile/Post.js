import React from 'react'
import { 
    RiChat3Fill, RiHeart3Line, 
    RiChat3Line, RiHeart3Fill 
} from 'react-icons/ri';

const Post = () => {
    return (
        <>
            <div className="w-1/3 p-px md:px-3">
                {/* <!-- post 1--> */}
                <a href="/">
                    <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                        {/* <!-- post image--> */}
                        <img className="w-full h-full absolute left-0 top-0 object-cover" src={`https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`} alt="posters" />

                        <i className="fas fa-square absolute right-0 top-0 m-1"></i>
                        {/* <!-- overlay--> */}
                        <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                              left-0 top-0 hidden">
                            <div className="flex justify-center items-center 
                                  space-x-4 h-full">
                                <span className="p-2">
                                    <i className="fas fa-heart"><RiChat3Fill /></i>
                                    412K
                                </span>

                                <span className="p-2">
                                    <i className="fas fa-comment"><RiHeart3Line /> </i>
                                    2,909
                                </span>
                            </div>
                        </div>

                    </article>
                </a>
            </div>
        </>
    )
}

export default Post