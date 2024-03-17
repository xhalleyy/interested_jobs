import { useNavigate } from 'react-router-dom';
import paypal from '../assets/image-1637768111715.webp'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';


const PaypalComponent = () => {

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/discord');
  }
  const handleBack = () => {
    navigate('/adobe');
  }
  return (
    <div className='blueBG'>

      <div className='grid grid-cols-3' style={{ minHeight: '100vh' }}>
        <div className='col-span-1 flex flex-col items-center justify-center px-3'>
          <div className='flex items-center justify-center'>
            <img src={paypal} alt="" className='rounded-xl w-36' />
          </div>
          <a href='https://paypal.eightfold.ai/careers?pid=274898859963&Job%20Category=Software%20Development&domain=paypal.com&sort_by=relevance' target='_blank' className='text-center underline italic decoration-white flex justify-center font-kodchasan-bold text-6xl text-white shad pb-5 pt-2 font-outline-1 hover:text-blue-900 hover:decoration-sky-600'><p className='shadow-xl'>PayPal</p></a>
          <p className='text-center font-kodchasan-bold text-4xl '>Software Engineer</p>
          <p className='text-center font-kodchasan-bold text-2xl  '>Remote</p>
        </div>
        <div className='col-span-2 px-3 flex justify-center items-center'>

          <Accordion collapseAll className='bg-blue-300 my-10 ' style={{ width: '950px' }}>
            <AccordionPanel>
              <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Reason</AccordionTitle>
              <AccordionContent>
                <p className="!font-kodchasan-semi !text-lg">
                  PayPal is pretty universal and deals with moving money. I think it would enhance and broaden my skills if I were to work with a company that involved with commerce.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Benefits</AccordionTitle>
              <AccordionContent>
                <ul className="list-disc pl-5 !font-kodchasan-semi !text-lg">
                  <li>Medical, dental, vision benefits</li>
                  <li>Wellness resources</li>
                  <li>Flexible Workplace with time off/ absences, holidays, etc.</li>
                  <li>Paid sabbatical every 5 years</li>
                  <li>401k</li>
                  <li>Employee Stock Purchase Plan</li>
                  <li>Financial wellness</li>
                  <li>Life insurance</li>
                  <li>Family support such as surrogacy and adoption assistance, child developmental assistance, etc.</li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Goals</AccordionTitle>
              <AccordionContent>
                <ul className="list-disc pl-5 !font-kodchasan-semi !text-lg">
                  <li>
                    Enhance the skillset of communicating about complex technical information in a clear and concise manner.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel >
              <AccordionTitle className='!font-kodchasan-semi !text-2xl'>Skill Sets/ Requirements</AccordionTitle>
              <AccordionContent className='!font-kodchasan-semi'>
                <p className="text-xl">Requirements I know:</p>
                <ul className='list-disc pl-5'>
                  <li> React</li>
                </ul>
                <p className="text-xl">Need to Learn:</p>
                <ul className='list-disc pl-5'>
                  <li>
                    NextJS, Java, Have solid grounding of UI Design fundamentals
                  </li>
                </ul>
                <p className="text-xl">Do I currently have to skillset for this job?</p>
                <ul className='list-disc pl-5'>
                  <li>No, I would have to learn Java and I'm not confident in my fundamentals with UI.</li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>

        <div className='col-span-3 grid grid-cols-2 px-20 py-2'>
          <div className='col-span-1'>
            <button onClick={handleBack} className='font-kodchasan-semi text-2xl px-6 py-1 rounded-xl text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800'>
              Back
            </button>
          </div>
          <div className='col-span-1 flex justify-end' style={{ float: 'right' }}>
            <button onClick={handleNext} className='font-kodchasan-semi text-2xl px-6 py-1 rounded-xl text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800' style={{ height: '40px' }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaypalComponent
