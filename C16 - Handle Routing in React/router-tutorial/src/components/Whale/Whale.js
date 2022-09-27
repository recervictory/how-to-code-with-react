import React from "react";
import { Outlet } from "react-router-dom";


export default function Whale() {
  return (
    <div>
      <h2>Whale</h2>
      <Outlet/>
    </div>
  );
}
