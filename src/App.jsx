import React from 'react';

import Header from './components/Header';

import IPInfo from './components/IPInfo';

import Map from './components/Map';


function App() {
    
    // const  [IpInfo, setIpInfo] = useState({
    //     ip: '',
    //     country: '',
    //     region: '',
    //     timeZone: '',
    //     isp: ''
    // });

    return (
        <React.Fragment>
             <Header />
              <IPInfo />
              <Map />
        </React.Fragment>
    )


}

export default App;