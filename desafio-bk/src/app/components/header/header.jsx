import React from "react";
import { Container, Logo, UserProfile } from "./style";
import BKlogo from '../../../../public/Vector.svg'

const Header = () => {
  return (
    <Container>
      <img src={BKlogo} alt="logo BK" />
      <UserProfile>
        <span>AbraaoDev</span>
        <img src="/profile.jpg" alt="User Profile" />
      </UserProfile>
    </Container>
  );
};

export default Header;
