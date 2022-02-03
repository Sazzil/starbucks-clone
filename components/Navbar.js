import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
  return (
  <nav className='bg-gray-50 shadow shadow-gray-200'>
      <div className='grid grid-cols-3 gap-4 place-items-center p-5 mx-auto'>

        <div className={`${styles.menuWrap}`}>
            <input type='checkbox' className={`${styles.toggler}`} />
            <div className={styles.hamburger}><div></div></div>

            <div className={styles.menu}>
              <div className='bg-star-brown max-w-screen-md'>
              <div className=''>
                  <Image 
                      priority
                      src='/images/logoWhite.webp'
                      className=''
                      height={180}
                      width={150}
                      alt='Startbucks'
                  />
              </div>
                  <div>
                      <ul className='uppercase tracking-widest'>
                          <li><a href='#'>Home</a></li>
                          <li><a href='#'>Visit</a></li>
                          <li><a href='#'>Coffee</a></li>
                          <li><a href='#'>U.s. menus</a></li>
                          <li><a href='#'>About</a></li>
                      </ul>
                  </div>
                  
              </div>
          </div>
        </div>
        <div>
            <h3 className='font-bold text-Zinc-800 uppercase tracking-widest text-star-brown'>starbucks reserve</h3>
        </div>

        <div>
            <p className='font-medium text-grey-800'>Find a location</p>
        </div>
      </div>
  </nav>
  )
}
