import dynamic from 'next/dynamic'
import { useState } from 'react'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const playerStyle = {
    visibility: 'hidden',
}

const MusicComponent = ({musicUrl ,isMusicPlaying, playMusicCallback}) => {

    const handlePlayMusic = () => {
        playMusicCallback(!isMusicPlaying)
    }

    
    return (
        <>
            <div className="z-40 fixed">
                <div className="relative flex items-end h-full min-h-screen left-2 bottom-16 text-[2.50rem] rounded-full text-gray-400">
                    <label className="swap">

                        <input type="checkbox" onChange={handlePlayMusic}/>

                        <div className="swap-on">
                            <AiFillPlayCircle />
                        </div>

                        <div className="swap-off">
                            <AiFillPauseCircle />
                        </div>

                    </label>
                    <ReactPlayer playing={isMusicPlaying} style={playerStyle} url={musicUrl} />
                </div>
            </div>
        </>
    )
}


export default MusicComponent