import Logo from "./Logo";
import IconLogo from "./IconLogo";
import PlaneIcon from "./PlaneIcon";
import HeartIcon from "./HeartIcon";
import PersonIcon from "./PersonIcon";

export default function Navbar() {
    return (
      <div class="navbar">
        <div class="container">
          <div class="logo">
            <IconLogo />
            <div class="separator"></div>
            <Logo />
          </div>

          <div class="logo-mobile">
            <IconLogo />
          </div>

          <div class="instagram-mobile">
            <Logo />
          </div>
  
          <div class="search">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icons">
            <PlaneIcon />
            <ion-icon name="compass-outline"></ion-icon>
            <HeartIcon name="heart-outline"/>
            <PersonIcon />
          </div>

          <div class="icons-mobile">
            <PlaneIcon />
          </div>
        </div>
      </div>
    );
}