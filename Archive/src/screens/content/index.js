import React from "react";
import { Routes, Route } from "react-router-dom";
import ManufactureDetail from "../manufactureDetail";
import { Manufactorslist } from "../manufacturesList";

export const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Manufactorslist />} />
      <Route path="/manufacturedetail/:id" element={<ManufactureDetail />} />
    </Routes>
  );
};
