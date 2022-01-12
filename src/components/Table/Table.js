import React from "react";

import "./Table.css";
import PageHeader from "../PageHeader/PageHeader";
import { usersTableHeaders } from "../../utils/mockup"; // initialUsers,
import RemoveBtn from "../../images/btn_remove.png";
import EditBtn from "../../images/btn_edit.png";

export default function Table({ onAddUser, onDeleteUser, users, onEditUser }) {
  return (
    <div className="table-container">
      <PageHeader onClick={onAddUser} />
      <table className="table">
        <tbody>
          <tr className="table__row">
            {usersTableHeaders.map((header, i) => (
              <th className="table__header" key={i}>
                {header}
              </th>
            ))}
            <th className="table__header"></th>
          </tr>
          {users.map((user, i) => (
            <tr className="table__row" key={i}>
              <td className="table__cell" id="surname">
                {user.surname}
              </td>
              <td className="table__cell" id="name">
                {user.name}
              </td>
              <td className="table__cell" id="patronymic">
                {user.patronymic}
              </td>
              <td className="table__cell" id="email">
                {user.email}
              </td>
              <td className="table__cell" id="login">
                {user.login}
              </td>
              <td className="table__cell table__cell_type_btn">
                <button
                  className="table__btn table__btn_type_edit"
                  onClick={(_) => onEditUser(user)}
                >
                  <img src={EditBtn} alt="edit" />
                </button>
                <button
                  className="table__btn table__btn_type_remove"
                  onClick={(_) => onDeleteUser(user)}
                >
                  <img src={RemoveBtn} alt="trashBin" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
