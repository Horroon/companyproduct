import React, { useCallback, useEffect, useState } from "react";
import { Space, Table, Tag, Input, Button } from "antd";
import "./index.scss";
import { useParams } from "react-router";
import { FetchModal } from "../../asyncs/fetchmodals";
import { Search } from "../../components";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  }
  ,
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Condition",
    key: "condition",
    dataIndex: "condition",
    render: (condition) => {
      let color = condition === "used" ? "geekblue" : "green";
      if (condition === "old") {
        color = "volcano";
      }
      return (
        <Tag color={color} key={condition}>
          {condition.toUpperCase()}
        </Tag>
      );
    },
  },
];

export default function ManufactureDetail() {
  const [modal, setModal] = useState({ modal: "", cars: [] });
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const params = useParams();

  const filtercars = useCallback(() => {
    if (search) {
      const filteredCars = modal.cars.filter((car) =>
        car.name.includes(search)
      );
      setCars(filteredCars);
    } else {
      const dbModals = FetchModal();
      const idModal = dbModals.find((dbModal) => dbModal.key === params.id);
      setModal(idModal);
      setCars(idModal.cars);
    }
  }, [search]);

  useEffect(() => filtercars(), [search]);

  return (
    <div className="detail">
      <h5>{modal.modal}</h5>
      <h6>Available cars</h6>
      <Search
        placeholder="Search car by name"
        label="name"
        value="name"
        options={modal.cars}
        onChange={(e) => {
          debugger;
          setSearch(e);
        }}
      />
      <Table columns={columns} dataSource={cars} />
    </div>
  );
}
