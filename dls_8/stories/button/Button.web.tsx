import React, { useState } from "react";
import type { ButtonProps } from "./button.types";

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  style,
  onPress, // unify API
}: ButtonProps) => {
  const [open, setOpen] = useState(false);
  const base: React.CSSProperties = {
    border: "none",
    borderRadius: 48,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  };

  const mode = primary
    ? { backgroundColor: "#1ea7fd", color: "white" }
    : {
        backgroundColor: "transparent",
        border: "1px solid #ccc",
        color: "#333",
      };

  const sizes: Record<string, React.CSSProperties> = {
    small: { padding: "10px 16px", fontSize: 12 },
    medium: { padding: "11px 20px", fontSize: 14 },
    large: { padding: "12px 24px", fontSize: 16 },
  };

  return (
    <>
      <button
        style={{
          ...base,
          ...mode,
          ...sizes[size],
          ...(backgroundColor ? { backgroundColor } : {}),
          ...style,
        }}
        onClick={() => setOpen(true)} // map onClick -> onPress
      >
        {label}
      </button>
      <WebDialog open={open} onClose={() => setOpen(false)}>
        <p>Hey there</p>
      </WebDialog>
    </>
  );
};

const WebDialog = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 8,
          minWidth: 300,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button style={{ marginTop: 16 }} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
