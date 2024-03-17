import { useNavigate } from "react-router-dom";
import adobe from '../assets/adobe.png';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';


const AdobeComponent = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/paypal');
    }
    const handleBack = () => {
        navigate('/mpln');
    }

  return (
    <div className="grid grid-cols-2">
        <img className="col-span-1 h-screen" src={adobe} alt="" />
        <div className="col-span-1 bg-black">
        <a href='https://careers.adobe.com/us/en/job/R143673/Full-Stack-Software-Engineer' target='_blank' className='text-center underline italic decoration-white flex justify-center font-kodchasan-semi text-4xl text-white pb-2 hover:text-fuchsia-600 hover:decoration-fuchsia-600 py-20'>Adobe, Full Stack Software Engineer</a>
        <p className='text-center font-kodchasan-semi text-2xl text-white'>San Jose, California</p>
        <div className='flex justify-center px-4'>

                <Accordion collapseAll className='bg-fuchsia-200 my-10 ' style={{ width: '800px' }}>
                    <AccordionPanel>
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Reason</AccordionTitle>
                        <AccordionContent>
                            <p className="!font-kodchasan-semi !text-lg">
                            Adobe plays a huge part in digital experiences/ technologies. As someone who has used Photoshop and Premiere Pro, it would be enthralling to work at a place where I enjoy their products. I would love to participate in something that many people use to design/ for creativity.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Benefits</AccordionTitle>
                        <AccordionContent>
                            <ul className="list-disc pl-5 !font-kodchasan-semi !text-lg">
                                <li>Medical, dental, vision benefits</li>
                                <li>Wellness reimbursements</li>
                                <li>Flexible Workplace</li>
                                <li>Paid sabbatical every 5 years</li>
                                <li>401k</li>
                                <li>Employee Stock Purchase Plan</li>
                                <li>Assistance in higher education</li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Goals</AccordionTitle>
                        <AccordionContent>
                            <ul className="list-disc pl-5 !font-kodchasan-semi !text-lg">
                                <li>
                                    Be able to work with AI-supported tools
                                </li>
                                <li>
                                    Enhance skills on with development of React web applications and backend
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel >
                        <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Skill Sets/ Requirements</AccordionTitle>
                        <AccordionContent className='!font-kodchasan-semi'>
                            <p className="text-xl">Requirements I know:</p>
                            <ul className='list-disc pl-5'>
                                <li> React, CSS, TypeScript</li>
                            </ul>
                            <p className="text-xl">Need to Learn:</p>
                            <ul className='list-disc pl-5'>
                                <li>
                                    Need to further familiarize myself more with Node.js, Learn flash, CI/CD pipelines, and python.
                                </li>
                                    </ul>
                            <p className="text-xl">Do I currently have to skillset for this job?</p>
                            <ul className='list-disc pl-5'>
                                <li>No. It's also recommended to be familiar with AWS EC2, S3, and RDS which I'm not.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <div className='grid grid-cols-2 px-20 py-2'>
                    <div className='col-span-1'>
                        <button onClick={handleBack} className='font-kodchasan-semi text-2xl px-6 py-1 rounded-xl text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800'>
                            Back
                        </button>
                    </div>
                    <div className='col-span-1 flex justify-end'>
                        <button onClick={handleNext} className='font-kodchasan-semi text-2xl px-6 py-1 rounded-xl text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800'>
                            Next
                        </button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AdobeComponent
