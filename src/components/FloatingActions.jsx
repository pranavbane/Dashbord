import React from "react";

const FloatingActions = () => {
  return (
    <div
      className="abc-fab"
      data-testid="floating-actions"
    >
      <button
        aria-label="WhatsApp"
        data-testid="fab-whatsapp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </button>

      <button
        className="fab-search"
        aria-label="Search"
        data-testid="fab-search"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <button
        className="fab-menu"
        aria-label="Menu"
        data-testid="fab-menu"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
};

export default FloatingActions;