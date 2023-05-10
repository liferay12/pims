import React, { useRef } from 'react';
import { useState } from "react";
import { useEffect } from "react";
import DataTable from 'react-data-table-component';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import UserRegistration from './UserRegistration';
//import columns from '../json-data/DataTableColumns.json';
import { Delete } from './Delete';
import { File } from './File';
import { ReactDataTable } from './ReactDataTable';

export const DataTable = (props) => {

    const [show, setShow] = useState(false);
    const [column, setColumn] = useState([]);
    const [editrow, setEditrow] = useState();
    const [events, setEvents] = useState();
    const handleClose = () => setShow(false);

    const handleShow = (name, id) => {
        setShow(true);
        setEvents(name);
        setEditrow(id);
    }
    useEffect(() => {
        let newColumn = [];
        props.formJSON.fields.map((iteam, index) => {
            iteam.fieldGroup.map((field) => {
                if (field.listtable) {
                    let obj = {
                        name: field.name,
                        selector: field.id,
                        sortable: true
                    }
                    newColumn.push(obj)
                }
            })
        });

        let cells = [];
        let tAction = [];
        props.formJSON.actions.map((action, index) => {
            if (action.applyto === "row") {
                let act = {
                    name: action.name,
                    label: action.label,
                    icon: action.icon,
                    class: action.classes
                }
                cells.push(act);
            } else if (action.applyto === "table") {
                let tableAction = {
                    name: action.name,
                    label: action.label,
                    icon: action.icon,
                    class: action.classes
                }
                tAction.push(tableAction);
            }
        });
        newColumn.push({ name: "Actions", cell: cells })
        const fetchedButtons = [];
        newColumn.map((item, index) => {
            if (item.name === "Actions" && item.cell.length !== 0) {
                fetchedButtons.push({
                    "name": "Actions", cell: (row) => (<>
                        <div class="dropdown">
                            <div type="button" data-bs-toggle="dropdown">
                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </div>
                            <ul class="dropdown-menu">
                                {item.cell.map((i) => {
                                    return (
                                        <>
                                            <li onClick={() => (handleShow(i.name, row.id))}><div className={i.class} >&nbsp; &nbsp;<i class={i.icon} aria-hidden="true"></i>&nbsp; {i.label}</div></li>
                                        </>
                                    )
                                })
                                }
                            </ul>
                        </div>

                    </>)
                })
            }

            // else if (item.name === "table"){
            //     {item.cell.map((i) => {

            //             let button=    <button onClick={handleClick} className={i.class}><i class={i.icon} aria-hidden="true"></i> {i.label}</button>

            //     })
            //     }
            // }

            else {
                fetchedButtons.push(item);
            }
        });
        setColumn(fetchedButtons);
    }, []);

    // Check Actions to render component in to the modal

    let modalContent;
    if (events === "edit") {
        modalContent = <File data={editrow} ></File>;
    } else if (events === "delete") {
        modalContent = <Delete data={editrow} url={props.url}></Delete>;
    }
    else if (events === "add") {
        modalContent = <File data={''}></File>;
    }
    else {
        modalContent = <h1 className='text-danger'>Import Component to render in modal</h1>;
    }


    // To export table into excell sheet
    const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })


    // Add Button click method
    const [isShown, setIsShown] = useState("");
    const handleClick = event => {
        //  toggle shown state
        //setIsShown(current => !current);
        setIsShown("add");
        handleShow(isShown, "");
        //  or simply set it to true
        // setIsShown(true);
    };

    return (
        <>
            {/* <ReactDataTable filecolumn={column}></ReactDataTable> */}
            <DataTable
                title={props.formJSON.title}
                columns={column}
                data={props.data}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="25rem"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={(
                    <>
                        <button onClick={onDownload} className="btn btn-sm btn-info">Export</button>
                        <button onClick={handleClick} className="btn btn-sm btn-primary">+ Add User</button>

                    </>
                )}
                subHeader

                subHeaderAlign="left"
            />

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='modal-lg'
            >
                <Modal.Header closeButton style={{ background: "#f0f8ff" }}>
                    <Modal.Title className='text-center'>{events} User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalContent}
                </Modal.Body>
                {/* <Modal.Footer style={{ background: "#f0f8ff" }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}
