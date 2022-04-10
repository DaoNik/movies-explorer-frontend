import React from "react";
import union from "../../images/Union.svg";
import '../PopupUpdateUser/PopupUpdateUser.css';
import './InfoTooltip.css';

export default function InfoTooltip({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <img
          className="popup__info-image"
          src={union}
          alt="Картинка отражающая успешность изменения имени"
        />
        <h2 className="popup__title popup__title_info">
          Вы успешно изменили данные!
        </h2>
        <button
          onClick={onClose}
          type="button"
          className="popup__btn-closed"
          aria-label="Кнопка закрытия всплывающего окна"
        ></button>
      </div>
    </div>
  );
}
