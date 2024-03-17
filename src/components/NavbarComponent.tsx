
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar fluid rounded className='bg-cyan-950/80 !rounded-none'>
      <NavbarBrand as={Link} to={'/'}>
        <span className="font-kodchasan-semi self-center whitespace-nowrap text-4xl ps-5 text-white">5 Jobs!</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className='font-kodchasan-medium'>
        {/* <NavbarLink href="#" active>
          Home
        </NavbarLink> */}
        <NavbarLink as={Link} to={'/mpln'} className='text-lg text-white'>MPLN</NavbarLink>
        <NavbarLink as={Link} to={'/adobe'} className='text-lg text-white'>Adobe</NavbarLink>
        <NavbarLink as={Link} to={'/paypal'} className='text-lg text-white'>PayPal</NavbarLink>
        <NavbarLink as={Link} to={'/discord'} className='text-lg text-white'>Discord</NavbarLink>
        <NavbarLink as={Link} to={'/intel'} className='text-lg text-white'>Intel</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}

export default NavbarComponent
