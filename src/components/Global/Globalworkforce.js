import React from 'react';
// import { Row } from 'reactstrap';
import Mainmenu from '../Mainmenu';

import Globalheader from './Globalheader';
import GlobalContent from './GlobalContent';

function Globalworkforce() {
  return (

    <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
  <Globalheader/>
  <GlobalContent/>

</div>

  );
}

export default Globalworkforce;
