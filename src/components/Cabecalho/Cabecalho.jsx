import style from "./Cabecalho.module.scss";

import menu from "/public/icons/menu-icon.svg";
import logoPorto from "/public/icons/porto-logo.svg";
import profilePicture from "/public/icons/pfp-icon.svg";

export default function Cabecalho() {
  return (
    <>
      <header id={style.cabecalho}>
        <img src={menu} alt="Menu" id="icon-menu" onClick={
          () => {
            document.body.classList.toggle('modo-escuro');
            console.log('deveria ter alterado o modo');
          }
        }/>
        <img src={logoPorto} alt="Porto" id="icon-porto" />
        <img src={profilePicture} alt="Usuario" id="icon-usuario" />
      </header>
    </>
  );
}
