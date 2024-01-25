import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { Switch } from "antd";
import { addNewProject } from "../features/projectSlice";
import { addProject } from "../api";
import { useDispatch } from "react-redux";
const AddProjectModal = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function onchangeName(e) {
    setProjectName(e.target.value);
    console.log(projectName);
  }
  function onsumbit() {
    addProject(projectName).then((res) => dispatch(addNewProject(res)));
    setIsModalOpen(false);
  }
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (checked) => {
    setIsToggled(checked);
  };
  const toggleStyle = {
    display: "flex",
  };
  return (
    <>
      <div
        onClick={showModal}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <div style={{ color: "#666", fontSize: "1.6rem" }}>+</div>{" "}
        <div style={{ fontSize: ".8rem", paddingLeft: ".5rem" }}>
          Add project
        </div>
      </div>
      <Modal
        title="Add project"
        open={isModalOpen}
        onOk={onsumbit}
        okText="add"
        onCancel={handleCancel}
        style={{ width: "10rem" }}
      >
        <p>Name</p>
        <Input value={projectName} onChange={onchangeName} />
        <div>
          <p>Color</p>
        </div>
        <div style={toggleStyle}>
          <Switch checked={isToggled} onChange={handleToggle} />
          <div>add to favorites</div>
        </div>
      </Modal>
    </>
  );
};

export default AddProjectModal;