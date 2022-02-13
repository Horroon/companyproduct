import React from "react";
import { Select } from "antd";

const { Option } = Select;

export const Search = ({
  placeholder,
  options = [],
  label,
  value,
  onChange,
}) => {
  return (
    <Select
      style={{ width: "100%" }}
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
      onChange={onChange}
      showSearch
    >
      <Option value="">All</Option>
      {options.map((option) => (
        <Option value={option[value]}>{option[label]}</Option>
      ))}
    </Select>
  );
};
