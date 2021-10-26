// import components
import TopNav from '../../components/Dashboard/TopNav';
import SideNav from '../../components/Dashboard/SideNav';

import styles from './dashboard.module.css'

export default function Dashboard() {
  return (
    <main className={styles.pageContainer}>
      <div className="row g-0">
        
        {/* side nav */}
        <div className="col-auto">
          <SideNav />
        </div>

        {/* right side content */}
        <div className="col">

          {/* top nav */}
          <div className="row">
            <div className="col g-0">
              <TopNav />
            </div>
          </div>


        </div>
        </div>
 
    </main>
  )
}
