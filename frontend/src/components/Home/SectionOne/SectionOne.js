import Image from 'next/image';
import Button from '../../Button';

// import breakpoint and device size hook
import {breakpoints} from '../../../styles/breakpoints';
import useDeviceSize from '../../../hooks/useDeviceSize';

// import banner image
import bannerImg from '../../../../public/landing/homeBanner.png';

import styles from './SectionOne.module.css';


export default function SectionOne() {
    const deviceSize = useDeviceSize();
    const isDesktop = deviceSize.width >= breakpoints.medium;
    return (
        <main className="container">
            <div className="row">
                
                {/* banner content */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                    <section className={styles.headerContainer}>
                        <h1>Do your Personal Finances Right with Finance Right!</h1>
                        <h3 style={{ marginTop: '1rem', marginBottom: '2rem' }}> Built for couples and groups with interwined shared finances. </h3>
                        <Button className="getStarted"> Get Started </Button>
                    </section>
                </div>

				{/* image rendered and fetched only in desktop */}
				{
                    isDesktop ?
                    	// banner image for desktop
						<section className="col-6">
                            <Image src={bannerImg} alt="Banner" placeholder='blur' height={890} width={1225} priority={true} quality={100} />
                         </section>
						:
						<div />
				}
                    
            </div>
        </main>
    )
}
