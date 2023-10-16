import style from "./Cabecalho.module.scss";

import menu from "/public/icons/menu-icon.svg";
import logoPorto from "/public/icons/porto-logo.svg";
import profilePicture from "/public/icons/pfp-icon.svg";

export default function Cabecalho() {
  return (
    <>
      <header id={style.cabecalho}>
        <img src={menu} alt="Menu" />
        <img src={logoPorto} alt="Porto" />
        <img src={profilePicture} alt="Usuario" />
      </header>
    </>
  );
}
