import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Hook1 = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Click Me
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label
                                for="exampleEmail"
                                hidden
                            >
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="Nhap ten khach hang"
                                placeholder="Email"
                                type="email"
                            />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label
                                for="examplePassword"
                                hidden
                            >
                                Password
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Nhap mat khau"
                                type="password"
                            />
                        </FormGroup>
                        {' '}
                        
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Dang ky
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Hook1;
