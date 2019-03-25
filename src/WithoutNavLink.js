import React, { useState } from 'react';
import { NavLink, withRouter, Switch, Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Home, Sweet, Home2 } from './Pages';

export default withRouter(({ match, location: { pathname = '' } }) => {
  const paths = {
    home: `${match.url}`,
    sweet: `${match.url}/sweet`,
    home2: `${match.url}/home2`,
  };

  return (
    <div>
      <p>
        {`With <NavLink>, much easier.`}
        <a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md">
          https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md
        </a>
      </p>
      <Menu pointing secondary>
        <Menu.Item
          as={NavLink}
          to={paths.home}
          activeClassName={'active'}
          exact // this exact is import
        >
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} to={paths.sweet} activeClassName={'active'}>
          Sweet
        </Menu.Item>
        <Menu.Item as={NavLink} to={paths.home2} activeClassName={'active'}>
          Home2
        </Menu.Item>
      </Menu>
      <Switch>
        <Route exact path={paths.home} component={Home} />
        <Route path={paths.sweet} component={Sweet} />
        <Route path={paths.home2} component={Home2} />
      </Switch>
    </div>
  );
});
