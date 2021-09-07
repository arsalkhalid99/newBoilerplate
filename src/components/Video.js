import React from 'react'

let videoData = [
    {
        index: 0,
        src: "video1.mp4",
        img: 'subsrcibe.jpg',
        title: "video name"
    },
    {
        index: 1,
        src: "video1.mp4",
        img: 'subsrcibe.jpg',
        title: "video name"
    },
    {
        index: 2,
        src: "video1.mp4",
        img: 'subsrcibe.jpg',
        title: "video name"
    },
    {
        index: 3,
        src: "video1.mp4",
        img: 'subsrcibe.jpg',
        title: "video name"
    }
]

export default function Video({ showSideBar })
{
    return (
        <>
            <div className={`grid ${ showSideBar ? 'open' : '' }`}>
                {videoData.map((item, i) => (
                    <div className='video' key={i}>
                        <div className='video__wrapper'>
                            <video controls >
                                <source src={`assets/videos/${ item.src }`} type="video/mp4" />
                            </video>
                            <div className='lower-content'>
                                <div className='logo'>
                                    <img src={`images/img/${ item.img }`} alt='' />
                                </div>
                                <div className='title'>
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
