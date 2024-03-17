import discord from '../assets/discord.png';
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

const DiscordComponent = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/intel');
  }
  const handleBack = () => {
    navigate('/paypal');
  }
  return (
    <div className='grid grid-cols-3'>
      <img className='col-span-1 h-screen' src={discord} alt="discord" />
      <div className='col-span-2 bg-cyan-900'>
        <a href='https://discord.com/jobs/7183130002' target='_blank' className='text-center underline italic decoration-white flex justify-center font-kodchasan-semi text-4xl text-white pb-2 hover:text-blue-600 hover:decoration-blue-600 py-20'>Discord Software Engineer, Design Foundation</a>
        <p className='text-center font-kodchasan-semi text-2xl text-white'>San Franscisco or Remote</p>
        <div className='flex justify-center px-5'>

        <Accordion collapseAll className='bg-indigo-300 my-10 ' style={{ width: '800px' }}>
          <AccordionPanel>
            <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Reason</AccordionTitle>
            <AccordionContent>
              <p className="!font-kodchasan-semi !text-lg">
              I use discord almost everyday, so I think it would be interesting and fun working on the face of Discord. Design Foundations fosters a unified and delightful Discord experience for all users, thus participating in the development of users’ experience seems appealing to me.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Benefits</AccordionTitle>
            <AccordionContent>
              <ul className="list-disc pl-5 !font-kodchasan-semi !text-lg">
                <li>Offers flexible health plans covering physical and mental health</li>
                <li>4 weeks of PTO, 14+ paid holidays and flexible sick time</li>
                <li>Gender-affirming care: Use up to $20,000 for transition-related procedures</li>
                <li>Quarterly stipend for gym membership + virtual yoga every week!</li>
                <li>Offers and advantage of $1000/year in donation matching to charitable donation</li>
              </ul>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Goals</AccordionTitle>
            <AccordionContent>
              <ul className="list-disc pl-5 !font-kodchasan-semi !text-lg">
                <li>
                This position partners closely with the Marketing and Brand teams, so I would also gain a subset of skills about those subjects.
                </li>
                <li>
                I would also learn/ stay updated with the latest industry technologies.
                </li>
              </ul>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel >
            <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Skill Sets/ Requirements</AccordionTitle>
            <AccordionContent className='!font-kodchasan-semi'>
              <p className="text-xl">Requirements I know:</p>
              <ul className='list-disc pl-5'>
                <li> TypeScript/JavaScript, CSS, HTML, and React</li>
              </ul>
              <p className="text-xl">Need to Learn:</p>
              <ul className='list-disc pl-5'>
                <li>
                Need to learn/ gain the skill to be comfortable with integrating new third party tools, as well as, learning how to be comfortable with bundlers and their understanding
                </li>
              </ul>
              <p className="text-xl">Do I currently have to skillset for this job?</p>
              <ul className='list-disc pl-5'>
                <li>From the stack that we learned from the course, I think I would have the skill sets for the job.</li>
              </ul>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
      <div className='grid grid-cols-2 px-20 py-2'>
        <div className='col-span-1'>
          <button onClick={handleBack} className='font-kodchasan-semi text-2xl px-6 py-1 rounded-xl text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800'>
            Back
          </button>
        </div>
        <div className='col-span-1 flex justify-end'>
          <button onClick={handleNext} className='font-kodchasan-semi text-2xl px-6 py-1 rounded-xl text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800'>
            Next
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DiscordComponent
