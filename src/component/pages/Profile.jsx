import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from '../../library/renderer/FormRenderer';
import personalInfoForm from "../../json-data/personalInfo.json"
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { setJsonValue } from '../../library/helper/JsonValue';
import toast from 'react-hot-toast';
export const Profile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const submitForm = (e) => {
        let form = document.getElementById("fileForm")
        console.log(form)
        let formData = new FormData(form)
        console.log(formData)
        console.table(formData.keys())
        // for (const key of formData.keys()) {
        //     console.log(key)
        // }

        console.log(formData.get("firstName"))
        console.log(formData.get("lastName"))
        console.log(formData.get("employeeId"))

        handleClose()
        toast.success("Your Form has been succesfully submitted");

    }
    const test = () => {
        handleClose()
    }


    const allFunc = {
        "submitForm": submitForm, "test": test
    };


    useEffect(() => {
        var obj = {
            "employeeId": "001",
            "nickName": "sweet tooth",
            "firstName": "Ashwani",
            "lastName": "Rao",
        }

        personalInfoForm.fields = setJsonValue(personalInfoForm.fields, obj)

    }, [])



    return (
        <>
            <div >
                <div className='row mb-3'>
                    <div className='col-md-12-col-sm-12'>
                        <Button variant="outline-primary" onClick={handleShow}>
                            Edit
                        </Button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <Card >
                            <Card.Body>
                                <Card.Title>About Me</Card.Title>
                                {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur fugiat dolores consequuntur a sunt. Debitis quidem vitae esse sint magnam qui quos officia, quae provident quia autem, nam velit.
                                </Card.Text> */}

                                <div className='row'>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className='row'>
                                            <div className='col-md-12 col-sm-12'>
                                                Information Technology
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className='row'>
                                            <div className='col-md-12 col-sm-12'>
                                                Associate Software Eng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Body>
                                <Card.Title>Work Information</Card.Title>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Department</td>
                                            <td>Information Technology</td>
                                        </tr>
                                        <tr>
                                            <td>Location</td>
                                            <td>Noida</td>
                                        </tr>
                                        <tr>
                                            <td>Designation</td>
                                            <td>Associate Software Engineer</td>
                                        </tr>
                                        <tr>
                                            <td>Role</td>
                                            <td>Team member</td>
                                        </tr>
                                        <tr>
                                            <td>Employment Type</td>
                                            <td>Permanent</td>
                                        </tr>
                                        <tr>
                                            <td>Employee Status</td>
                                            <td>Active</td>
                                        </tr>
                                        <tr>
                                            <td>Source of Hire</td>
                                            <td>Web</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Joining</td>
                                            <td>14-Mar-2022</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Body>
                                <Card.Title>Identity Information</Card.Title>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>UAN</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>PAN</td>
                                            <td>CXUPR1482G</td>
                                        </tr>
                                        <tr>
                                            <td>Aadhaar</td>
                                            <td>590823769294</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Body>
                                <Card.Title>System Fields</Card.Title>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Added By</td>
                                            <td>E001 - Arjun - Nayak</td>
                                        </tr>
                                        <tr>
                                            <td>Added Time</td>
                                            <td>24-Mar-2023 03:24 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Modified By</td>
                                            <td>E001 - Arjun - Nayak</td>
                                        </tr>
                                        <tr>
                                            <td>Modified Time</td>
                                            <td>27-Mar-2023 04:12 PM</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <Card >
                            <Card.Body>
                                <Card.Title>Tags</Card.Title>

                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Body>
                                <Card.Title>Basic information</Card.Title>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Employee ID</td>
                                            <td>E0070</td>
                                        </tr>
                                        <tr>
                                            <td>First Name</td>
                                            <td>Ashwani</td>
                                        </tr>
                                        <tr>
                                            <td>Last Name</td>
                                            <td>Rao</td>
                                        </tr>
                                        <tr>
                                            <td>Nick Name</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>Email address</td>
                                            <td>ashwani.rao@adjecti.in</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Body>
                                <Card.Title>Hierarchy Information</Card.Title>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Reporting Manager</td>
                                            <td>Jitendra Rathore E0003</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Body>
                                <Card.Title>Personal Details</Card.Title>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td>18-Jul-2000</td>
                                        </tr>
                                        <tr>
                                            <td>Marital Status</td>
                                            <td>Single</td>
                                        </tr>
                                        <tr>
                                            <td>About Me</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>Ask me about/Expertise</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Body>
                                <Card.Title>Contact Details</Card.Title>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Work Phone Number</td>
                                            <td>0000000000</td>
                                        </tr>
                                        <tr>
                                            <td>Extension</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>Seating Location</td>
                                            <td>Noida</td>
                                        </tr>
                                        <tr>
                                            <td>Present Address</td>
                                            <td>Flat no. 101, Block C, </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>

                    </div>
                </div>

            </div>
            <Modal size='xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <Form formObject={personalInfoForm} actions={allFunc}></Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}
