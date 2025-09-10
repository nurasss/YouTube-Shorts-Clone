import React from "react";
import "./BottomNav.css";
import {
  Home,
  Search,
  PlusCircle,
  Bell,
  User
} from "lucide-react";

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <div className="nav-item"><Home /></div>
      <div className="nav-item"><Search /></div>
      <div className="nav-item center-item"><PlusCircle /></div>
      <div className="nav-item"><Bell /></div>
      <div className="nav-item"><User /></div>
    </div>
  );
}
