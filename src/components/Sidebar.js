import React, {useState } from "react";
import Modal from "react-modal";
import {IoClose} from 'react-icons/io5';


function Sidebar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand<b>Colors</b>
          </a>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa
          quam, efficitur vitae aliquam ut, tempus quis magna.
        </div>
        <nav className="menu">
          <ul>
            <a onClick={toggleModal}>
              About <b>BrandColors</b>
            </a>
          </ul>
        </nav>
      </aside>
      <Modal
        isOpen={modalIsOpen}
        className="modalClass"
        overlayClassName="modalOverlay"
        contentLabel="Example Modal"
        appElement={document.getElementById("modalOverlay")} 
      >
        <a onClick={toggleModal}> <IoClose/> </a>
        <div >
    <h1>Brand Colors</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

      </Modal>
    </>
  );
}

export default Sidebar;
