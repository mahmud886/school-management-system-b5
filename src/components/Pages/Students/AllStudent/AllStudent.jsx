import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";

import "./AllStudent.css";

const AllStudent = () => {
  const [data, setData] = useState([]);

  const columns = [
    { title: "Roll", field: "roll" },
    // {
    //   title: "Photo",
    //   field: "photo",
    //   render: (rowData) => (
    //     <img
    //       src={rowData.photo}
    //       style={{ width: 50, borderRadius: "50%" }}
    //       alt={rowData.name}
    //     />
    //   ),
    // },
    { title: "Name", field: "firstName" },
    { title: "Gender", field: "gender" },
    { title: "Class", field: "className" },

    { title: "Address", field: "address" },
    { title: "Birth Date", field: "dob" },
    { title: "Phone", field: "phone" },
    { title: "Email", field: "email" },
  ];

  useEffect(() => {
    fetch("http://localhost:3005/studentDetails/")
      .then((response) => response.json())
      .then((sdata) => setData(sdata));
  }, []);

  return (
    <div>
      <div className="top-header py-5">
        <h3>Students</h3>
      </div>

      <MaterialTable
        title={"All Students List"}
        data={data}
        columns={columns}
        localization={{
          toolbar: {
            searchPlaceholder: "Filter",
            searchTooltip: "filters the given text",
          },
          header: {
            actions: "Actions",
          },
        }}
        actions={[
          {
            icon: "save",
            tooltip: "Save User",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
          selection: true,
          exportButton: true,
          showFirstLastPageButtons: true,
          pageSize: 10,
          padding: "dense",
          pageSizeOptions: [10, 20, 50],
        }}
      />
    </div>
  );
};

export default AllStudent;
