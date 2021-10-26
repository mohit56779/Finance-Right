import Image from 'next/image';

// import logo image
import logo from '../../../../public/icons/logo.png';

import styles from './SideNav.module.css'


export default function SideNav() {
  return (
    <main className={styles.navContainer}>

        <div className="text-center">
            <Image src={logo} alt="Logo" placeholder='blur' height={80} width={80} priority={true} quality={100} />
        </div>

        <div className={styles.navLinks}>
            <div className="d-flex">
                <i className="fad fa-chart-line" ></i>
                 <h5> Dashboard</h5>
            </div>

            <div className="d-flex">
                <i className="fas fa-coins" ></i>
                 <h5> Transactions</h5>
            </div>

            <div className="d-flex">
                <i className="fas fa-bullseye-arrow" ></i>
                 <h5> Goals</h5>
            </div>

            <div className="d-flex">
                <i className="fas fa-divide" ></i>
                 <h5> Splits</h5>
            </div>

            <div className="d-flex">
                <i className="fas fa-cog" ></i>
                 <h5>Settings</h5>
            </div>

        </div>

        
    </main>
  )
}
