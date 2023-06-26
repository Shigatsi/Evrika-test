import React from "react";

import "./App.css";

import { initialUsers } from "../../utils/mockup";

import { search } from "../../utils/api";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import Spinner from "../Spinner/Spinner";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("");

  const [editUser, setEditUser] = React.useState({});
  const [searchData, setSearchData] = React.useState({});
  const [setUpdatePage, setSetUpdatePage] = React.useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setEditUser({});
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
    setUsers(newUsers);
    closeModal();
  };

  const handleSearchClick = () => {
    setIsModalOpen(true);
    setModalType("search");
  };

  const handleSearchSubmit = (searchData) => {
    const { categoryId, regionId } = searchData;
    setIsLoading(true);
    search(categoryId, regionId)
      .then((res) => {
        isLoading(false);
        setUpdatePage(true);
      })
      .catch((err) => {
        isLoading(false);
        console.error(err); //выведем ошибку;
      })
      .finally(() => {
        isLoading(false);
        setUpdatePage(false);
      });
  };

  return (
    <div className="page">
      {isLoading && <Spinner />}
      <Header onSearch={handleSearchClick} />
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
        onSearchSubmit={handleSearchSubmit}
        onAddUser={handleAddUserSubmit}
        onDeleteUser={handleDeleteUserSubmit}
        onEditUser={handleEditUserSubmit}
        editUser={editUser}
      />
    </div>
  );
}
