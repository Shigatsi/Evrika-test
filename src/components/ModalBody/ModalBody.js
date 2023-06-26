import React from "react";

import "./ModalBody.css";
import { categories, regions } from "../../utils/mockup";

function ModalBody({ type, data, searchData, handleChange, handleSearch }) {
  console.log("searchData", searchData);
  return (
    <>
      {type === "search" ? (
        <ul className="form__items">
          <li className="form__item">
            <label className="form__label">Search</label>
            <input
              type="text"
              id="form_search"
              name="searchInput"
              placeholder="Search with us!"
              minLength="2"
              required
              className="form__input"
              value={searchData.searchInput || ""}
              onChange={handleSearch}
            />
          </li>
          <li className="form__item">
            <label className="form__label">Categories:</label>
            <select
              id="categories"
              className="form__input"
              onChange={handleSearch}
              name="category"
              value={searchData.category ? searchData.category : ""}
            >
              {categories &&
                categories.map((el) => <option key={el.id}>{el.name}</option>)}
            </select>
          </li>
          <li className="form__item">
            <label className="form__label">Regions:</label>
            <select
              name="region"
              id="categories"
              className="form__input"
              onChange={handleSearch}
              value={searchData.region ? searchData.region : ""}
            >
              {regions &&
                regions.map((el) => <option key={el.id}>{el.name}</option>)}
            </select>
          </li>
        </ul>
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
