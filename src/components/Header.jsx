import React from "react";
import { IoMdFlashlight } from "react-icons/io";
import "./Header.module.css";

function Header() {
  return (
    <header>
      <h1>
        <IoMdFlashlight />
        ToDoList
      </h1>
    </header>
  );
}

export default Header;
