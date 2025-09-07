import React from "react";

const TickBadge = ({ label, type = "success" }) => {
  // Define colors and icons based on type
  const config = {
    success: {
      backgroundColor: "rgba(127, 221, 83, 0.13)",
      color: "#7FDD53",
      icon: (
        <path
          d="M20 6L9 17L4 12"
          stroke="#7FDD53"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )
    },
    error: {
      backgroundColor: "rgba(239, 68, 68, 0.13)",
      color: "#EF4444",
      icon: (
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )
    }
  };

  const currentConfig = config[type];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%", // makes it vertically centered inside table cell
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: currentConfig.backgroundColor,
          borderRadius: "9999px",
          padding: "2px 8px",
          gap: "5px",
        }}
      >
        {/* Icon */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {currentConfig.icon}
        </svg>

        {/* Optional label */}
        {label && (
          <span style={{ color: currentConfig.color, fontSize: "12px", fontWeight: 500 }}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
};

export default TickBadge;
