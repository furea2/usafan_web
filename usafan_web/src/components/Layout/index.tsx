import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

import HomePage from '../Home';

const Layout = (props: any) => {
  console.log(props);

  return (<>
    <HomePage/>
  </>);
};

export default hot(module)(Layout);
