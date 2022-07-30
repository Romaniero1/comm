import Image from "next/image";
import One from "/public/images/flow/streamingflow/one.png"
import Two from "/public/images/flow/streamingflow/two.png"
import Three from "/public/images/flow/streamingflow/three.png"

export const StreamingFlow = () => {
    return (
        <div className="pl-[100px] h-[1628px] w-[1200px]">
            <h2 className="uppercase pt-[100px]">
                streamer guidelines
            </h2>
            <p className="pt-5 w-[450px]">
                Streamers play a vital role in attracting new players to the ecosystem and entertaining
                the current community. Tiny Colony  streamers should always aim to be:
            </p>
            <div className="flex flex-row pt-10 space-x-10 ">
                <div className="h-[320px] w-[320px] bg-no-repeat pl-[60px] pt-[60px] bg-[url('/images/flow/streamingflow/dialogMetal.png')]">
                    <Image src={One} width={40} height={40} alt="image" />
                    <p className="w-[210px] pt-3">Lots of positive energy!</p>
                </div>
                <div className=" h-[320px] w-[320px] bg-no-repeat pl-[60px] pt-[60px] bg-[url('/images/flow/streamingflow/dialogMetal.png')]">
                    <Image src={Two} width={40} height={40} alt="image" />
                    <p className="w-[210px] pt-3">Accepting new players that might not understand blockchain.
                        It’s your opportunity to lead the masses into a new gaming space!</p>
                </div>
                <div className=" h-[320px] w-[320px] bg-no-repeat pl-[60px] pt-[60px] bg-[url('/images/flow/streamingflow/dialogMetal.png')]">
                    <Image src={Three} width={40} height={40} alt="image" />
                    <p className="w-[210px] pt-3">Hook new gamers by showing game play, tips, strategy, and rad art!</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[1011px] h-[327px] bg-[url('/images/flow/writingflow/dialog.png')] mt-[100px]">
                <h3 className="text-center w-[743px] uppercase">
                    Utilize overlays, visual assets, and other items in your streams to show off the Tiny Colony art!
                    We have created a Streaming Pack HERE
                </h3>
                <a href='https://drive.google.com/file/d/1W0-kx1JsXLqEoL3eiSRbW_Mz1nKrtQwq/view?usp=sharing'>
                    <button className='outline outline-0 w-40 h-10 mt-10 rounded-full bg-white text-pink uppercase hover:bg-pink hover:text-white active:outline-pink active:outline-4'>
                        open assets
                    </button>
                </a>
            </div>
            <h2 className="uppercase pt-[100px] w-[710px]">
                Ideas of Video Content & Streams
            </h2>
            <div className="flex flex-row pt-[60px] space-x-20 ">
                <ul className="flex flex-col w-[40%] list-disc list-outside space-y-7">
                    <li>
                        New player on-boarding tutorials
                    </li>
                    <li>
                        Colony set up and walkthroughs
                    </li>
                    <li>
                        Tiny Colony economy analysis
                    </li>
                    <li>
                        Speculation on new features & launches
                    </li>
                    <li>
                        Tiny Colony guides for crypto newbies
                    </li>
                    <li>
                        How to obtain Tiny Colony NFTs
                    </li>
                </ul>
                <ul className="flex flex-col w-[40%] list-disc list-outside space-y-7">
                    <li>
                        How to use a blockchain game wallet
                    </li>
                    <li>
                        Interviews with team members (Just ask, we are all available!)
                    </li>
                    <li>
                        Podcasts
                    </li>
                    <li>
                        Recreating the Tiny Colony Soundtrack
                    </li>
                    <li>
                        Gifs and quick clips
                    </li>
                </ul>
            </div>
        </div>
    )
}