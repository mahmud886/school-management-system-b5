import React, {useState} from 'react';
import './AllTeachers.css';
import MaterialTable from "material-table";


const columns = [
    {title: 'Roll', field: 'id'},
    {
        title: 'Photo',
        field: 'photo',
        render: rowData => <img src={rowData.photo} style={{width: 50, borderRadius: '50%'}} alt={rowData.name}/>
    },
    {title: 'Name', field: 'name'},
    {title: 'Gender', field: 'gender'},
    {title: 'Class', field: 'classField'},
    {title: 'Subject', field: 'subject'},
    {title: 'Section', field: 'section'},
    {title: 'Address', field: 'address'},
    {title: 'Phone', field: 'phone'},
    {title: 'Email', field: 'email'},

];

const teachersData = [
    {
        id: '1',
        photo: 'https://randomuser.me/api/portraits/men/17.jpg',
        name: 'Mark Willy',
        gender: 'Male',
        classField: '1',
        subject: 'English',
        section: 'A',
        address: 'TA-107 Newyork',
        phone: '+ 123 9988568',
        email: 'mark@gmail.com'
    },
    {
        id: '2',
        photo: 'https://randomuser.me/api/portraits/men/16.jpg',
        name: 'MaxWell',
        gender: 'Male',
        classField: '1',
        subject: 'Bangla',
        section: 'A',
        address: 'TA-107 Newyork',
        phone: '+ 123 9988568',
        email: 'mark@gmail.com'
    },
    {
        id: '3',
        photo: 'https://randomuser.me/api/portraits/men/15.jpg',
        name: 'ABD Deviliars',
        gender: 'Male',
        classField: '1',
        subject: 'Math',
        section: 'A',
        address: 'TA-107 Newyork',
        phone: '+ 123 9988568',
        email: 'mark@gmail.com'
    },
    {
        id: '4',
        photo: 'https://randomuser.me/api/portraits/men/14.jpg',
        name: 'Prity Zinta',
        gender: 'Female',
        classField: '1',
        subject: 'Biology',
        section: 'A',
        address: 'TA-107 Newyork',
        phone: '+ 123 9988568',
        email: 'mark@gmail.com'
    },
    {
        id: '5',
        photo: 'https://randomuser.me/api/portraits/men/13.jpg',
        name: 'SRK Willy',
        gender: 'Male',
        classField: '1',
        subject: 'Physics',
        section: 'A',
        address: 'TA-107 Newyork',
        phone: '+ 123 9988568',
        email: 'mark@gmail.com'
    },
    {
        id: '6',
        photo: 'https://randomuser.me/api/portraits/men/12.jpg',
        name: 'Mahela Roy',
        gender: 'Male',
        classField: '1',
        subject: 'Higher Math',
        section: 'A',
        address: 'TA-107 Newyork',
        phone: '+ 123 9988568',
        email: 'mark@gmail.com'
    },
    {
        id: '7',
        photo: 'https://randomuser.me/api/portraits/men/11.jpg',
        name: 'Sam Curran',
        gender: 'Male',
        classField: '1',
        subject: 'Religion',
        section: 'A',
        address: 'TA-107 Newyork',
        phone: '+ 123 9988568',
        email: 'mark@gmail.com'
    },
    {
        id: '8',
        photo: 'https://randomuser.me/api/portraits/men/10.jpg',
        name: 'Json Roy',
        gender: 'Male',
        classField: '1',
        subject: '1',
        section: 'A',
        address: 'TA-107 Newyork',
        phone: '+ 123 9988568',
        email: 'mark@gmail.com'
    },

];


const AllTeachers = () => {
    const [data, setData] = useState(teachersData)


    return (
        <div>
            <div className='top-header py-5'>
                <h3>Teachers</h3>

            </div>

            <MaterialTable
                title={'All Students List'}
                data={data}
                columns={columns}
                options={{
                    search: true,
                    selection: true,
                    sorting: true,
                    actionsColumnIndex: -1
                }}

                actions={[
                    {
                        tooltip: 'Remove All Selected Users',
                        icon: 'delete',
                        onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
                    }
                ]}
                detailPanel={[
                    {
                        tooltip: 'Show Name',
                        render: rowData => {
                            return (
                                <div className='container'>
                                    <div className='detail-panel'>
                                        <div className="row">
                                            <div className="col-3">
                                                <img src={rowData.photo} alt=""/>
                                            </div>
                                            <div className="col-9">
                                                <div>
                                                    <h2>{rowData.name}</h2>
                                                </div>
                                                <div>
                                                    <p>Name: {rowData.name}</p>
                                                    <p>Gender: {rowData.gender}</p>
                                                    <p>Class: {rowData.classField}</p>
                                                    <p>Subject: {rowData.subject}</p>
                                                    <p>Section: {rowData.section}</p>
                                                    <p>Phone: {rowData.phone}</p>
                                                    <p>Email: {rowData.email}</p>
                                                    <p>Address{rowData.address}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        },
                    },
                    {
                        icon: 'account_circle',
                        tooltip: 'Show Surname',
                        render: rowData => {
                            return (
                                <div
                                    style={{
                                        fontSize: 100,
                                        textAlign: 'center',
                                        color: 'black',
                                        backgroundColor: 'white',
                                    }}
                                >
                                    {rowData.name}
                                </div>
                            )
                        },
                    }

                ]}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData]);

                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);

                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);

                                resolve();
                            }, 1000)
                        }),
                }}


            />
        </div>
    );
};

export default AllTeachers;

