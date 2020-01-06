import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, data, sortColumn, onSort, onLike, onDelete }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        data={data}
        columns={columns}
        onLike={onLike}
        onDelete={onDelete}
      />
    </table>
  );
};

export default Table;
