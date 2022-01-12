import React from "react";

import "./App.css";

import { initialUsers } from "../../utils/mockup";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Table from "../Table/Table";
import Modal from "../Modal/Modal";

export default function App() {
  const [users, setUsers] = React.useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("");

  const [editUser, setEditUser] = React.useState({});

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddUserClick = () => {
    setIsModalOpen(true);
    setModalType("addUser");
  };

  const handleDeleteUserClick = (user) => {
    setIsModalOpen(true);
    setModalType("deleteUser");
    setEditUser(user);
  };

  const handleEditUSerClick = (user) => {
    setIsModalOpen(true);
    setModalType("editUser");
    setEditUser(user);
  };

  const handleAddUserSubmit = (data) => {
    setUsers([data, ...users]);
    closeModal();
  };

  const handleDeleteUserSubmit = (user) => {
    const newUsers = users.filter((u) => {
      return u !== user;
    });
    setUsers(newUsers);
    closeModal();
  };

  const handleEditUserSubmit = (userInfo) => {
    const newUsers = users.map((u) => (u === editUser ? userInfo : u));
    console.log("NEWUSERS FROM APP", newUsers);
    setUsers(newUsers);
    closeModal();
  };

  return (
    <div className="page">
      <Header />
      <Nav />
      <Table
        onAddUser={handleAddUserClick}
        users={users}
        onDeleteUser={handleDeleteUserClick}
        onEditUser={handleEditUSerClick}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        type={modalType}
        onAddUser={handleAddUserSubmit}
        onDeleteUser={handleDeleteUserSubmit}
        onEditUser={handleEditUserSubmit}
        editUser={editUser}
      />
    </div>
  );
}
