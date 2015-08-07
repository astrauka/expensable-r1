import React from 'react';

var loadImage = function(path, client) {
  if (client) {
    return require(path);
  } else {
    return requireServerImage(path);
  }
}

if (__CLIENT__) {
  require('./Home.scss');
}

const logoImage = loadImage('../images/logo.gif', __CLIENT__);

export default class Home {
  render() {
    return (
      <div className='home'>
        <h4>Share expenses with friends</h4>
        <img className='expensable-icon' src={logoImage}/>
      </div>
    );
  }
}
