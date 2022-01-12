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

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  const handleAddUserClick = () => {
    setIsModalOpen(true);
    setModalType("addUser");
  };

  const handleAddUserSubmit = (data) => {
    setUsers([data, ...users]);
    closeModal();
  };

  return (
    <div className="page">
      <Header />
      <Nav />
      <Table onAddUser={handleAddUserClick} users={users} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        type={modalType}
        onAddUser={handleAddUserSubmit}
      />
    </div>
  );
}
