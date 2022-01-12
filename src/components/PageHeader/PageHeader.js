import "./PageHeader.css";
import plusBtn from "../../images/cross.png";

export default function PageHeader({ onClick }) {
  return (
    <div className="page-header">
      <h2 className="page-header__title">Пользователи</h2>
      <button className="page-header__button" onClick={onClick}>
        <img src={plusBtn} alt="plus" /> Добавить
      </button>
    </div>
  );
}
