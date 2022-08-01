import Image from "next/image";
import Art from "/public/images/flow/communityflow/art.png"

export const CommunityFlow = () => {
    return (
        <div className="h-[1738px] w-[1200px] pl-[100px]">
            <h2 className="uppercase pt-[100px]">
                Community Building
            </h2>
            <p className="pt-5 w-[550px]">
                Many, amazing, Tiny Colony community members choose to contribute by being very active on social channels such as Twitter and Discord!
                <br /> <br />
                Our most dedicated community members support others and teach newbies.
                <br /> <br />
                Here are some guidelines around how we should communicate about Tiny Colony on world wide webs:
            </p>
            <div className="flex flex-col items-center w-[1011px] h-[352px] bg-no-repeat bg-[url('/images/flow/communityflow/dialog.png')] mt-[80px]">
                <h4 className="uppercase pt-[60px] w-[590px] text-center">
                    Here are some good types of articles for creating written content
                </h4>
                <div className="flex flex-row pt-10 space-x-20 justify-center">
                    <ul className="flex flex-col w-[40%] list-disc list-outside">
                        <li>
                            Stoked and Upbeat
                        </li>
                        <li>
                            Lots of Energy — people are very susceptible to absorbing emotions online
                        </li>
                        <li>
                            We should never be hostile towards our players or outsiders, it just looks bad!
                        </li>
                    </ul>
                    <ul className="flex flex-col w-[40%] list-disc list-outside">
                        <li>
                            We should never talk badly about other people or projects
                        </li>
                        <li>
                            We should aim to create fun/interesting discussions
                        </li>
                        <li>
                            Lead by example, act like the community members we’d like to attract
                        </li>
                        <li>
                            Positive. Always Positive!
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-[100px]">
                <Image src={Art} width={1008} height={760} alt="image" />
            </div>
        </div>
    )
}