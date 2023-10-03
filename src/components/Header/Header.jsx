import moment from 'moment';
import Logo from '../../assets/logo.png'


const Header = () => {
  return (
    <div className=' text-center'>
        <img className='block mx-auto' src={Logo} alt="" />
        <h1 className='text-gray-400 pt-5 pb-3 text-lg'>Journalism Without Fear or Favour</h1>
        <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  )
}

export default Header