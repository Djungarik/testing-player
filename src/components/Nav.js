import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const toggleLibrary = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Flow</h1>
      <button onClick={toggleLibrary}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
