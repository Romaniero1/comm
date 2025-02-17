import Image from "next/image";
import Dog from "/public/images/flow/writingflow/dogIcon.png"
import Home from "/public/images/flow/writingflow/homeIcon.png"
import Heart from "/public/images/flow/writingflow/heartIcon.png"
import Toy from "/public/images/flow/writingflow/toyIcon.png"

const listone = ['New player guides', 'Analysis of the Tiny Colony economy',
    'Analysis of the current game mode, Base Builder (MVP)', 'Fun challenges and customized Colonies'
]
const listtwo = ['"My experience playing Tiny Colony"', 'Partnerships with other projects',
    'Story Lore (Lots of information on the official Discord)',
    'Constructive and well thought proposals for improvement (we value feedback)'
]
const Card = [
    {
        icon: Dog,
        title: 'To create a new type of game that involves the community',
    },
    {
        icon: Home,
        title: 'Give players game property ownership',
    },
    {
        icon: Heart,
        title: 'Building fun and amazing games we have grown to love',
    },
    {
        icon: Toy,
        title: 'Build a healthy and sustainable blockchain gaming ecosystem',
    },
]

export const WritingFlow = () => {
    return (
        <div className="pl-[100px] h-[1678px] w-[1200px]">
            <h2 className="uppercase pt-[100px]">
                Written Content
            </h2>
            <p className="pt-5 w-[436px]">
                When formulating written content about Tiny Colony, we recommend using the following tone or disposition:
            </p>
            <div className="flex flex-row pt-[60px] space-x-20 ">
                <ul className="flex flex-col space-y-7 w-[40%] list-disc list-outside">
                    <li>
                        Excited, Joyous, Stoked, and Positive.
                    </li>
                    <li>
                        Lots of energy! You would be surprised how people  are very susceptible to absorbing emotions online.
                    </li>
                </ul>
                <ul className="flex flex-col space-y-7 w-[40%] list-disc list-outside">
                    <li>
                        Easy to understand, especially for those that have never used Cryptocurrencies
                        and Blockchain before. Be a guide to bring into this amazing space!
                    </li>
                    <li>
                        Minimalist. Don`t get all complicated, write simply to write, not impress!
                    </li>
                </ul>
            </div>
            <div className="flex justify-center w-[1011px] h-[327px] bg-[url('/images/flow/writingflow/dialog.png')] mt-[100px]">
                <p className="pt-20 w-[817px]">
                    Communications related to Tiny Colony should never be confrontational, toxic, or harsh.
                    Criticisms should never contain personal attacks and always be constructive.
                    <br /><br />
                    ‌Never talk badly about other people or projects. We are building an amazing space together!
                    Tiny Colony fully supports other blockchain games, projects, and communities!
                    <br /><br />
                    ‌Lead by example, act like the community members we’d like to bring to the Tiny Colony ecosystem.
                </p>
            </div>
            <h2 className="uppercase pt-[80px] w-[620px]">
                Why are we building Tiny Colony?
            </h2>
            <div className="flex flex-row pt-10 space-x-10 ">
                {Card.map(({ icon, title }, index) => (
                    <div key={index} className="h-[220px] w-[220px] bg-no-repeat pl-9 pt-10 bg-[url('/images/flow/writingflow/dialogMetal.png')]">
                        <Image src={icon} width={40} height={40} alt="image" />
                        <p className="w-[150px] pt-2">{title}</p>
                    </div>
                ))}
            </div>
            <h4 className="uppercase pt-[100px] w-[590px]">
                Here are some good types of articles for creating written content
            </h4>
            <div className="flex flex-row pt-[40px] space-x-20 ">
                <ul className="flex flex-col w-[40%] list-disc list-outside">
                    {listone.map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col w-[40%] list-disc list-outside">
                    {listtwo.map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}