import React from "react";

const Navigation = ({ onRouteChange, isSigned }) => {
  if (isSigned) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        >
          Déconnexion
        </p>
      </nav>
    );
  } else {
    return (
      <div>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Se connecter
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            S'enregistrer
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
