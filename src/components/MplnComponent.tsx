import { useNavigate } from 'react-router-dom'
import amp from '../assets/amplogo.png'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

const MplnComponent = () => {

    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/adobe');
    }
    const handleBack = () => {
        navigate('/');
    }

    return (
        <div className='labBG'>
            <div className='flex justify-center pt-10'>
                <img src={amp} alt="" width={'250px'} />
            </div>
            <a href='https://www.mplnet.com/about-us/careers/' target='_blank' className='text-center underline italic decoration-white flex justify-center font-kodchasan-semi text-4xl text-white stroke-black font-outline-1 pb-2 hover:text-black hover:decoration-blue-700'>Molecular Pathology Laboratory Networks</a>
            <p className='text-center font-kodchasan-bold text-3xl text-white stroke-black font-outline-1 '>Software Engineer</p>
            <p className='text-center font-kodchasan-bold text-2xl text-white stroke-black font-outline-1 '>Remote</p>
            <div className='flex justify-center'>

                <Accordion collapseAll className='bg-blue-300 my-10 ' style={{ width: '800px' }}>
                    <AccordionPanel>
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Reason</AccordionTitle>
                        <AccordionContent>
                            <p className="!font-kodchasan-semi !text-lg">
                                MPLN is building a laboratory information management system for its growing speciality diagnostic and clinical research divisions and for the customers. Since I obtained a biology degree, though I took a change in career path, I think it would be interesting to assist in something medical/biology related since that was what I was originally interested in.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Benefits</AccordionTitle>
                        <AccordionContent>
                            <p className="!font-kodchasan-semi !text-lg">
                                Offers a flexible benefit package that includes a 401k plan, medical, dental, vision and life insurance, as well as short and long term disability options
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Goals</AccordionTitle>
                        <AccordionContent>
                            <ul className="list-disc pl-5 !font-kodchasan-semi !text-lg">
                                <li>
                                    Would enhance my skillset on backend
                                </li>
                                <li>
                                    Allows me to be able to revisit the biological and clinical sense since I’d be working with data about laboratory equipment, clients, etc.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel >
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Skill Sets/ Requirements</AccordionTitle>
                        <AccordionContent className='!font-kodchasan-semi'>
                            <p>Requirements I know:</p>
                            <ul className='list-disc pl-5'>
                                <li> C#, .NET, JavaScript, React</li>
                            </ul>
                            <p>Need to Learn:</p>
                            <ul className='list-disc pl-5'>
                                <li>
                                    Need to further familiarize myself with Model-View-Controller and Node.js, Learn AngularJS, learn and get accustomed to SQL database design concepts, T-SQL queries, and SQL Server Reporting Services.
                                </li>
                                    </ul>
                            <p>Do I currently have to skillset for this job?</p>
                            <ul className='list-disc pl-5'>
                                <li>I think if we’re not including the required experience, then after the course, probably so. That is, if we cover Angular and get more into SQL.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>

                <div className='grid grid-cols-2 px-32 py-6'>
                    <div className='col-span-1'>
                        <button onClick={handleBack} className='font-kodchasan-semi text-2xl px-6 py-1 rounded-xl text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800'>
                            Home
                        </button>
                    </div>
                    <div className='col-span-1 flex justify-end'>
                        <button onClick={handleNext} className='font-kodchasan-semi text-2xl px-6 py-1 rounded-xl text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800'>
                            Next
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default MplnComponent
