/* eslint-disable react/prop-types */
import React from "react";
import UserBody from "./UserBody";
import control_double_left from "../../assets/Control_double_left.svg";
import Control_single_left from "../../assets/Control_single_left.svg";
import Control_single_right from "../../assets/Control_single_right.svg";
import Control_double_right from "../../assets/Control_double_right.svg";
import Pagination from "../../components/utils/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../RTK/features/pagination/paginationSlice";
import UserNavbar from "./UserNavbar";
import { FaUserPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import AddUserModal from "./AddUserModal";

export default function User() {
  const userReducerData = useSelector((state) => state?.users?.allUserData);
  const { currentPage, pagiInfo } =
    useSelector((state) => state.pagination) || {};
  const [paginatinUserData, setPaginatinUserData] = useState([]);
  const [opened, setOpened] = useState(false);
  // const { total_pages } = pagiInfo || {};
  const total_pages = userReducerData?.length;
  const rightBtn = total_pages / 6;
  const dispatch = useDispatch();

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };
  const handleAdd = () => {
    controlModal();
  };

  useEffect(() => {
    setPaginatinUserData(
      userReducerData?.slice(currentPage * 6 - 6, currentPage * 6)
    );
    // console.log((currentPage * 6) - 6,"starting item")
  }, [currentPage, userReducerData]);

  return (
    <>
      <UserNavbar />
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between ptSerif font-semibold">
          <h2 className="tableTitle">Users List</h2>
          <p
            className="flex items-center space-x-1 mr-4 bg-sky-300 rounded-lg p-3 cursor-pointer"
            onClick={() => handleAdd()}
          >
            <FaUserPlus /> <span>Add User</span>
          </p>
        </div>
        <table className="table">
          {/* head */}
          <thead className="bg-gray-200 rounded-md">
            <tr>
              <th>#ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {paginatinUserData?.map((user) => (
              <UserBody key={user.id} user={user} />
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="join space-x-2 mt-12 mb-8">
          <kbd
            className={`kbd ${
              currentPage > 1
                ? "cursor-pointer bg-green-500"
                : "cursor-not-allowed"
            }`}
            onClick={() =>
              currentPage > 1 && dispatch(setPage(currentPage - 1))
            }
          >
            <img src={control_double_left} alt="<<" />
          </kbd>

          <kbd className="kbd">
            <img src={Control_single_left} alt="<" />
          </kbd>
          <Pagination />
          <kbd className="kbd">
            <img src={Control_single_right} alt=">" />
          </kbd>

          <kbd
            className={`kbd ${
              currentPage < total_pages / 6
                ? "cursor-pointer bg-green-500"
                : "cursor-not-allowed"
            }`}
            onClick={() =>
              currentPage < rightBtn && dispatch(setPage(currentPage + 1))
            }
          >
            <img src={Control_double_right} alt=">>" />
          </kbd>
        </div>
      </div>
      <AddUserModal
        open={opened}
        setOpened={setOpened}
        control={controlModal}
      />
    </>
  );
}
