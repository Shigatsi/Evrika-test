import React from "react";

import "./ModalBody.css";

function ModalBody({ type, data, handleChange }) {
  return (
    <>
      {type === "deleteUser" ? (
        <div>Удалить выбранного пользователя?</div>
      ) : (
        <ul className="form__items ">
          <li className="form__item">
            <label className="form__label">Фамилия</label>
            <input
              type="text"
              id="form_surname"
              name="surname"
              placeholder="Введите фамилию"
              minLength="2"
              maxLength="40"
              pattern="[а-яёА-ЯЁA-Za-z \-]*"
              required
              className="form__input"
              value={data.surname || ""}
              onChange={handleChange}
            />
          </li>
          <li className="form__item">
            <label className="form__label">Имя</label>
            <input
              type="text"
              id="form_name"
              placeholder="Введите имя"
              name="name"
              minLength="2"
              maxLength="40"
              pattern="[а-яёА-ЯЁA-Za-z \-]*"
              required
              className="form__input"
              value={data.name || ""}
              onChange={handleChange}
            />
          </li>
          <li className="form__item">
            <label className="form__label">Отчество</label>
            <input
              type="text"
              id="form_patronymic"
              placeholder="Введите отчество"
              name="patronymic"
              minLength="2"
              maxLength="40"
              pattern="[а-яёА-ЯЁA-Za-z \-]*"
              required
              className="form__input"
              value={data.patronymic || ""}
              onChange={handleChange}
            />
          </li>
          <li className="form__item">
            <label className="form__label">E-mail</label>
            <input
              type="email"
              id="form_email"
              placeholder="Введите электронную почту"
              name="email"
              minLength="3"
              maxLength="40"
              required
              className="form__input"
              value={data.email || ""}
              onChange={handleChange}
            />
          </li>
          <li className="form__item">
            <label className="form__label">Логин</label>
            <input
              type="text"
              id="form_login"
              placeholder="Введите логин"
              name="login"
              minLength="1"
              maxLength="40"
              required
              className="form__input"
              value={data.login || ""}
              onChange={handleChange}
            />
          </li>
        </ul>
      )}
    </>
  );
}

export default ModalBody;
