import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
  const user = useSelector((state) => state.user);

  const rooms = ["room1", "room2", "room3"];
  if (!user) {
    return <></>;
  } else {
    return (
      <>
        <h2>Available room</h2>
        <ListGroup>
          {rooms.map((room, index) => {
            return <ListGroup.Item key={index}>{room}</ListGroup.Item>;
          })}
        </ListGroup>
        <h2>Membrs</h2>
      </>
    );
  }
};
export default Sidebar;
