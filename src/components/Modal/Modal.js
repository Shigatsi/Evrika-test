import React from "react";
import "./Modal.css";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";

function Modal({ isOpen, onClose, type, onAddUser, onDeleteUser, editUser }) {
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

  function handleAddUserSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
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

  function handleDeleteUserSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    onDeleteUser(editUser);
  }

  return (
    <section className={`modal ${isOpen ? "" : "modal_type_hidden"}`}>
      <form className="form">
        <ModalHeader type={type} onClose={onClose} />

        <ModalBody type={type} data={data} handleChange={handleChange} />
        <ModalFooter
          userData={data}
          type={type}
          addUserSubmit={handleAddUserSubmit}
          deleteUserSubmit={handleDeleteUserSubmit}
          onClose={onClose}
        />
      </form>
    </section>
  );
}

export default Modal;
