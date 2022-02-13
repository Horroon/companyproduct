import React, { useEffect, useState } from "react";
import { Search } from "../../components";
import { Space, Table, Tag, Input, Button } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { FetchModal } from "../../asyncs/fetchmodals";

const columns = [
  {
    title: "Modal",
    dataIndex: "modal",
    key: "modal",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Number of cars",
    dataIndex: "cars",
    key: "cars",
    render:(cars)=><a>{cars.length}</a>
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
];


export const Manufactorslist = (props) => {
  const [selectedModalKey, setModalKey] = useState("");
  const [modals, setModals] = useState([]);
  const navigate = useNavigate();

  const moveToDetailPage = () =>
    selectedModalKey && navigate(`/manufacturedetail/${selectedModalKey}`);

  useEffect(() => {
    const dbModals = FetchModal();
    debugger
    setModals(dbModals);
  }, []);
  console.log("selectedModal ", selectedModalKey);
  return (
    <div className={"list-cotainer"}>
      <div className="search-container">
        <Search
          placeholder="Enter modal name"
          options={modals}
          value="key"
          label="modal"
          onChange={(e) => setModalKey(e)}
        />
        <Button onClick={moveToDetailPage}>Search Modal</Button>
      </div>
      <Table columns={columns} dataSource={modals} />
    </div>
  );
};
