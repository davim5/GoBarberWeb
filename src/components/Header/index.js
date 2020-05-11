import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Davi</strong>
              <Link to="Profile">Meu perfil</Link>
            </div>
            <img src="" alt="" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
