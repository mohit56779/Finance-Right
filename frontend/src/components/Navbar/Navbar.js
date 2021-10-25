import Image from 'next/image';
import Button from '../Button';
import styles from './Navbar.module.css';
import { useState } from 'react';

import {breakpoints} from '../../styles/breakpoints';

import {useTransition, animated} from 'react-spring'

import useDeviceSize from '../../hooks/useDeviceSize';

export default function Navbar() {
  const deviceSize = useDeviceSize();
  const isMobile = deviceSize.width <= breakpoints.medium;

  const [mobileMenu, setMobileMenu] = useState(false);

  // for mobile menu nav animation
	const menuTransitions = useTransition(mobileMenu, null, {
		// settings for sliding menu
		from: {  opacity: 0, transform: 'translateX(-100%)' },
		enter: { opacity: 1, transform: 'translateX(0%)' },
		leave: { opacity: 0,  transform: 'translateX(-100%)' },
  })

  // for mobile menu nav left mask animation 
  const maskTransitions = useTransition(mobileMenu, null, {
		from: { position: 'absolute', opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
  })

  if(isMobile){
    return(
      <main className={styles.navMobile}>
        <div className="row">

          <div className="col-10">
            <Image src="/icons/logo.png" alt="Logo" height={90} width={100} priority={true} quality={100} />
          </div>
        
          <div className="col-2">

            <i className="fal fa-bars fa-2x" onClick={() => setMobileMenu(!mobileMenu)} style={{paddingTop:'0.5rem'}}></i>

            {maskTransitions.map(({ item, key, props }) =>
              item &&
              <animated.div
                key={key} 
                style={props}
                className = {styles.menuMask}
                onClick = {() => setMobileMenu(false)}>

              </animated.div>
            )}

            {menuTransitions.map(({ item, key, props }) =>
              item &&
              <animated.div
                key={key} 
                style={props}
                className = {styles.menuMobile}
                >
                  <h5 style={{marginLeft:'0.2rem'}}>About</h5>
                  <h5 style={{marginLeft:'0.2rem'}}>Contact Us</h5>
                  <h5 style={{marginLeft:'0.2rem', marginBottom:'2rem'}}>Log-in</h5>
                  <Button className="auth"> Sign-up </Button>
                
              </animated.div>
            )}

          </div>
        </div>

      </main>
    )
  }

  return (
    <main className={styles.navDesktop}>
        <div className="row">
          <div className="col-4">
            <Image src="/icons/logo.png" alt="Logo" height={100} width={100} priority={true} quality={100} />
          </div>

          <div className="col-4 d-inline-flex justify-content-center" style={{paddingTop:'0.6rem'}}>
            <h5 style={{paddingRight:'2rem'}}>About</h5>
            <h5>Contact Us</h5>
          </div>

          <div className="col-4 d-inline-flex justify-content-end" style={{paddingTop:'0.6rem'}}>
            <h5 style={{paddingRight:'2rem'}}>Log-in</h5>
            <Button className="auth"> Sign-up </Button>
          </div>
      </div>

    </main>
  )
}
