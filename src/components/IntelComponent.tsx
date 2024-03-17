import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';


const IntelComponent = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/');
    }
    const handleBack = () => {
        navigate('/discord');
    }
    return (
        <div className="intelBG">
            <a href='https://jobs.intel.com/en/job/folsom/software-engineer/41147/62517610592' target='_blank' className='text-center underline italic decoration-white flex justify-center font-kodchasan-bold text-5xl text-white stroke-black font-outline-1 pt-14 pb-2 hover:text-black hover:decoration-blue-700'>Intel, Software Engineer</a>
            <p className='text-center font-kodchasan-bold text-3xl text-white stroke-black font-outline-1 '>Folsom or Santa Clara, California/ Hybrid</p>
            <div className='flex justify-center'>

                <Accordion collapseAll className='bg-blue-300 my-10 ' style={{ width: '800px' }}>
                    <AccordionPanel>
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Reason</AccordionTitle>
                        <AccordionContent>
                            <p className="!font-kodchasan-semi !text-lg">
                                Intel is a heavy technological and popular company. I am interested because I wonder what it would be like to work along/with a lot of electrical design.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Benefits</AccordionTitle>
                        <AccordionContent>
                        <ul className="list-disc pl-5 !font-kodchasan-semi !text-lg">
                                <li>Health, Physical Wellness, Holistic Wellness Plans/Services</li>
                                <li>Two Bonuses Packages</li>
                                <li>Sabbatical Program</li>
                                <li>Flexible Workplace</li>
                                <li>Life-Long Learning and Tuition Assistance</li>
                                <li>Retirement Plans</li>
                                <li>Stock Programs</li>
                                <li>Relocation Services</li>
                                <li>Job Rotations</li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Goals</AccordionTitle>
                        <AccordionContent>
                            <ul className="list-disc pl-5 !font-kodchasan-semi !text-lg">
                                <li>
                                    Ensures experience with AI supported technologies.
                                </li>
                                <li>
                                    Enhance my skills with working with users and developing custom, complex solutions.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel >
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Skill Sets/ Requirements</AccordionTitle>
                        <AccordionContent className='!font-kodchasan-semi'>
                            <p>Requirements I know:</p>
                            <ul className='list-disc pl-5'>
                                <li>Knowledge in CI/CD like GitHub, .NET, #C</li>
                            </ul>
                            <p>Need to Learn:</p>
                            <ul className='list-disc pl-5'>
                                <li>
                                    Familiarize more with Git, computer architecture, Tensorflow, PyTorch, etc. Learn Phyton, C++, machine learning and data mining
                                </li>
                            </ul>
                            <p>Do I currently have to skillset for this job?</p>
                            <ul className='list-disc pl-5'>
                                <li>Absolutely not. This would be a job and new experience, but I don't know much about computer architecture to be employed for this job.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <div className='grid grid-cols-2 px-32 py-6'>
                    <div className='col-span-1'>
                        <button onClick={handleBack} className='font-kodchasan-semi text-2xl px-6 py-1 rounded-xl text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800'>
                            Back
                        </button>
                    </div>
                    <div className='col-span-1 flex justify-end'>
                        <button onClick={handleNext} className='font-kodchasan-semi text-2xl px-6 py-1 rounded-xl text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800'>
                            Home
                        </button>
                    </div>
                </div>
        </div>


    )
}

export default IntelComponent
