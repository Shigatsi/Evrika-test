import React from "react";
import "./Modal.css";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";

function Modal({ isOpen, onClose, type, onAddUser }) {
  const [data, setUserData] = React.useState({
    surname: "",
    name: "",
    patronymic: "",
    email: "",
    login: "",
  });

  React.useEffect(() => {
    setUserData(data);
  }, [data]);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setUserData({ ...data, [name]: value });
  };

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddUser({
      surname: data.surname,
      name: data.name,
      patronymic: data.patronymic,
      email: data.email,
      login: data.login,
    });
    setUserData({
      surname: "",
      name: "",
      patronymic: "",
      email: "",
      login: "",
    });
  }

  return (
    <section className={`modal ${isOpen ? "" : "modal_type_hidden"}`}>
      <form className="form" onSubmit={handleSubmit}>
        <ModalHeader
          subtitle={`${
            type === "addUser"
              ? "Создание пользователя"
              : "Редактирование пользователя"
          }`}
          onClose={onClose}
        />

        <ModalBody type={type} data={data} handleChange={handleChange} />
        <ModalFooter
          userData={data}
          btnCaption={`${type === "addUser" ? "Создать" : "Сохранить"}`}
        />
      </form>
    </section>
  );
}

export default Modal;
