import { useState, useEffect } from 'react';

const useDeviceSize = () => {
    const [deviceSize, setDeviceSize ] = useState(
        {
            width: null,
            height: null
        }
    );

    useEffect(() => {
        function resizeWindow(){
            setDeviceSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('reize', resizeWindow());

        resizeWindow();

        return () => window.removeEventListener('resize', resizeWindow());
    }, []);

    return deviceSize;
};

export default useDeviceSize;


