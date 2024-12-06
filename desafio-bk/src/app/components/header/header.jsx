import React from "react";
import { Container, UserProfile, UserInfo } from "./style";
import Image from "next/image";
import BKlogo from "../../../../public/Vector.svg";
import ProfileIMG from "../../../../public/userIMG.svg";

const Header = () => {
  return (
    <Container>
      <Image src={BKlogo} alt="logo BK" width={50} height={50} />
      <UserProfile>
        <UserInfo>
          <span className="username">AbraaoDev</span>
          <span className="email">abraao.dev@gmail.com</span>
        </UserInfo>
        <Image src={ProfileIMG} alt="User Profile" width={50} height={50} />
      </UserProfile>
    </Container>
  );
};

export default Header;
