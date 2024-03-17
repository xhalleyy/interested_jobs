import { useNavigate } from 'react-router-dom'
import { Button } from 'flowbite-react';
import homepic from '../assets/homepic.jpg';

const HomePageComponent = () => {

    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/mpln');
    }

    return (
        <div className='bgImg'>
            <div className='text-center font-kodchasan-semi text-white text-5xl py-10'>
                <h1 className='pb-3 shadow-xl'>Five Jobs that Interest Me!</h1>
                <h2>- Halley Pham</h2>
            </div>
            <div className='flex justify-center'>
                <img src={homepic} alt="image of laptop and high tech" width={'800px'} className='rounded-xl' />
            </div>
            <div className='flex justify-center'>
            <button onClick={handleNext} className='px-5 my-5 font-kodchasan-reg text-3xl text-center rounded-xl text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800'>Next</button>

            </div>
        </div>
    )
}

export default HomePageComponent
