import React from 'react';

const Layout = props => 
  <div className="memo">
    <div className="memo__container">
      <header className="memo__header header">
        <h1 className="header__title">Memo Game</h1>
      </header>
      <div className="memo__main">
        {props.children}
      </div>
    </div>
  </div>;

export default Layout;
