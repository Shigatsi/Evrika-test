import React from "react";
import "./Modal.css";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";

function Modal({
  isOpen,
  onClose,
  type,
  onAddUser,
  // onDeleteUser,
  onEditUser,
  editUser,
  onSearchSubmit
}) {
  const [data, setUserData] = React.useState({
    surname: "",
    name: "",
    patronymic: "",
    email: "",
    login: "",
  });

  const [searchData, setSearchData] = React.useState({
    searchInput: '',
    category: '',
    region: ''

  })


  React.useEffect(() => {
    setUserData(data);
  }, [data]);

  React.useEffect(() => {
    setUserData(editUser);
  }, [editUser]);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setUserData({ ...data, [name]: value });
  };
  const handleSearch = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setSearchData({ ...searchData, [name]: value });
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

  function handleSearchSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    onSearchSubmit(searchData);
  }

  function handleEditUserSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    console.log("handleEditUserSubmit, editUser: ", editUser);
    onEditUser({
      surname: data.surname,
      name: data.name,
      patronymic: data.patronymic,
      email: data.email,
      login: data.login,
      
    });
  }

  return (
    <section className={`modal ${isOpen ? "" : "modal_type_hidden"}`}>
      <form className="form">
        <ModalHeader type={type} onClose={onClose} />

        <ModalBody type={type} searchData={searchData} data={data} handleSearch = {handleSearch} handleChange={handleChange} />
        <ModalFooter
          userData={data}
          type={type}
          addUserSubmit={handleAddUserSubmit}
          // deleteUserSubmit={handleDeleteUserSubmit}
          editUserSubmit={handleEditUserSubmit}
          searchSubmit={handleSearchSubmit}
          onClose={onClose}
        />
      </form>
    </section>
  );
}

export default Modal;
