import React, { useState } from 'react';
import { Link, withRouter, Switch, Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Home, Sweet, Home2 } from './Pages';

export default withRouter(({ match, location: { pathname = '' } }) => {
  const paths = {
    home: `${match.url}`,
    sweet: `${match.url}/sweet`,
    home2: `${match.url}/home2`,
  };
  const initActiveItem = (() => {
    switch (pathname) {
      case paths.home:
        return 'home';
      case paths.sweet:
        return 'sweet';
      case paths.home2:
        return 'home2';
      default:
        return 'home';
    }
  })();
  const [activeItem, setActiveItem] = useState(initActiveItem);
  const handleClick = (_, { name }) => {
    setActiveItem(name);
  };
  return (
    <div>
      <p> In order to manage menu item active state, a lot of code.</p>
      <Menu pointing secondary>
        <Menu.Item
          as={`span`} // prevent Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
          name="home"
          active={activeItem === 'home'}
          onClick={handleClick}
        >
          <Link to={paths.home}>Home</Link>
        </Menu.Item>
        <Menu.Item
          as={`span`} // prevent Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
          name="sweet"
          active={activeItem === 'sweet'}
          onClick={handleClick}
        >
          <Link to={paths.sweet}>Sweet</Link>
        </Menu.Item>
        <Menu.Item
          as={`span`} // prevent Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
          name="home2"
          active={activeItem === 'home2'}
          onClick={handleClick}
        >
          <Link to={paths.home2}>Home2</Link>
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
