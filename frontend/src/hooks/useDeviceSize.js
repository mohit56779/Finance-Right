import { useState, useEffect } from 'react';

const useDeviceSize = () => {
    // state to store device size
    const [deviceSize, setDeviceSize ] = useState(
        {
            width: null,
            height: null
        }
    );

    useEffect(() => {
        // deal with window resize
        function resizeWindow(){
            setDeviceSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        // add event listener 
        window.addEventListener('resize', resizeWindow());

        // set initial value
        resizeWindow();

        // cleanup
        return () => window.removeEventListener('resize', resizeWindow());
    }, []);

    return deviceSize;
};

export default useDeviceSize;


