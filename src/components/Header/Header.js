import "./Header.css";
import searchBtn from "../../images/search_btn.svg";

export default function Header({ onSearch }) {
  return (
    <header className="header">
      <button
        className="header__search-btn page-header__button"
        onClick={onSearch}
      >
        Search
        <img className="header__search-btn-img" src={searchBtn} alt="лупа" />
      </button>
    </header>
  );
}
