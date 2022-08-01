import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ArtFlow } from './artflow';
import { CommunityFlow } from './communityflow';
import { StreamingFlow } from './streamingflow';
import { WritingFlow } from './writingflow';
import { AnimatePresence, motion } from "framer-motion"


export const Flow = () => {
    return (
        <div className="flex flex-col items-center h-[2488px] bg-[url('/background/flowBg.png')]">
            <div className='px-[120px]'>
                <div className="flex flex-row justify-center pt-[100px]  space-x-[70px]">
                    <h3 className="w-[540px] uppercase">
                        Tiny Colony is not just a game, it’s a community! Together, we can push the boundaries and propel this space to the moon!
                        <br />
                        <br />
                        We are searching for Colonists to go out into the digital world and spread a positive message about blockchain gaming and
                        the awesomeness of YOU owning your game assets.
                    </h3>
                    <h3 className="w-[540px] uppercase">
                        How can this be done? Amazing question!
                        <br />
                        <br />
                        We need lots of content…and I mean lots! Memes, videos, gameplay, live streams, PFP, headers, write about it! Go crazy!
                        <br />
                        <br />
                        This guide has been created to help you spread the word. Use it! Grow your colony!
                    </h3>
                </div>
                <div className='w-[1200px] pt-[140px]'>
                    <Tabs>
                        <TabList className={"uppercase flex flex-row"}>
                            <Tab className={"flex h-[70px] w-[265px] mr-[30px] bg-[#242426] bg-opacity-80 rounded-t-[10px] justify-center items-center hover:border hover:border-b-transparent hover:h-[90px] hover:-mt-5"} selectedClassName={"border border-b-transparent h-[90px] -mt-5 outline-none"}>
                                <h3>Writing</h3>
                            </Tab>
                            <Tab className={"flex h-[70px] w-[265px] mr-[30px] bg-[#242426] bg-opacity-80 rounded-t-[10px] justify-center items-center hover:border hover:border-b-transparent hover:h-[90px] hover:-mt-5"} selectedClassName={"border border-b-transparent h-[90px] -mt-5 outline-none"}>
                                <h3>Streaming</h3>
                            </Tab>
                            <Tab className={"flex h-[70px] w-[265px] mr-[30px] bg-[#242426] bg-opacity-80 rounded-t-[10px] justify-center items-center hover:border hover:border-b-transparent hover:h-[90px] hover:-mt-5"} selectedClassName={"border border-b-transparent h-[90px] -mt-5 outline-none"}>
                                <h3>Art</h3>
                            </Tab>
                            <Tab className={"flex h-[70px] w-[265px] bg-[#242426] bg-opacity-80 rounded-t-[10px] justify-center items-center hover:border hover:border-b-transparent hover:h-[90px] hover:-mt-5"} selectedClassName={"border border-b-transparent h-[90px] -mt-5 outline-none"}>
                                <h3>Community</h3>
                            </Tab>
                        </TabList>
                        <div className='bg-[#242426] bg-opacity-80 rounded-r-[20px] rounded-b-[20px]'>
                            <TabPanel>
                                <motion.div
                                    exit={{ opacity: 0 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <WritingFlow />
                                </motion.div>
                            </TabPanel>
                            <TabPanel>
                                <motion.div
                                    exit={{ opacity: 0 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <StreamingFlow />
                                </motion.div>
                            </TabPanel>
                            <TabPanel>
                                <motion.div
                                    exit={{ opacity: 0 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <ArtFlow />
                                </motion.div>
                            </TabPanel>
                            <TabPanel>
                                <motion.div
                                    exit={{ opacity: 0 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <CommunityFlow />
                                </motion.div>
                            </TabPanel>
                        </div>

                    </Tabs>
                </div>
            </div>


        </div>
    )
}