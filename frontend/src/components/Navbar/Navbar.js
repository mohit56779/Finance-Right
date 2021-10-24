import Image from 'next/image'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className="container">
        <div className="row">
          <div className="col-4">
            {/* <Image src="/icons/logo.png" alt="Logo" height={50} width={250} priority={true} quality={100} /> */}
            <h2> Finance Right </h2>
          </div>

          <div className="col-4 d-inline-flex">
            <h3>About</h3>
            <h3>Contact Us</h3>
          </div>

          <div className="col-4">
            Hi 3
          </div>
        </div>
    </div>
  )
}
