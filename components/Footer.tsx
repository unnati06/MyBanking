import { logoutAccount } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({user, type='desktop'}:FooterProps) => {
   
    const router = useRouter();
    const handleLogOut = async() => {
        const loggedOut = await logoutAccount();

        if(loggedOut) router.push('/sign-in');
    } 
  
    return (
    <footer className='footer'>
        <div className={type==='mobile'?'footer_name-mobile':'footer_name'}>
          <p className='text-xl font-bold text-gray-700'>
            {user.firstName[0]}
          </p>
        </div>
    </footer>
  )
}

export default Footer
