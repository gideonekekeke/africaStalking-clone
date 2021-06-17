import Sider from "antd/lib/layout/Sider";
import React from "react";
import { Button } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../AppState/GlobalContext";
import { app } from "../../Base";
import { useState } from "react";
import { useEffect } from "react";

const db = app.firestore().collection("africa");
const post = app.firestore().collection("Task1");
function DashBoard() {
  const { currentUser, currentData } = useContext(GlobalContext);
  const [task, setTask] = useState("");
  const [getTask, setGetTask] = useState([]);

  const addTask = async () => {
    const newAddTask = await app.auth().currentUser;

    if (newAddTask) {
      db.doc(newAddTask.uid).collection("Task1").doc().set({
        task,
      });
    }
  };

  const removeTask = async () => {
    const newDeleteTask = await app.auth().currentUser;

    if (newDeleteTask) {
      await db.doc(newDeleteTask.uid).collection("Task1").doc().delete();

      console.log(removeTask);
    }
  };

  const getingTask = async () => {
    const gotTask = await app.auth().currentUser;

    if (gotTask) {
      await db
        .doc(gotTask.uid)
        .collection("Task1")
        .onSnapshot((snap) => {
          const item = [];
          snap.forEach((doc) => {
            item.push(doc.data());
          });
          setGetTask(item);
        });
    }
  };

  useEffect(() => {
    getingTask();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sider
        style={{ backgroundColor: "#DE6316", height: "100vh", color: "white" }}
      >
        <center
          style={{
            marginTop: "50px",
            display: "flex",
            height: "60%",
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div>Dashboard</div>
          <br />
          <br />
          <br />
          <div style={{ fontSize: "20px" }}>PROFILE</div>
          <br />
          <div>MEDIA</div>
          <br />
          <div>PROJECTS</div>
          <br />
          <div>DEVELOPER</div>
        </center>
      </Sider>

      <center
        style={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "100%", height: "400px" }}>
          <img
            src={currentData && currentData.avatar}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>

        <h1 style={{ color: "black" }}>WELCOME </h1>
        <h3 style={{ color: "black" }}>{currentData && currentData.name}</h3>

        <br />
        <div>Add A TASK TODO</div>
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          style={{ width: "60%", height: "70px" }}
        />

        <Button
          onClick={addTask}
          style={{
            width: "100px",
            height: "40px",
            borderRadius: "5px",
            backgroundColor: "#DE6316",
            color: "white",
            border: "1px solid gray",
            fontFamily: "poppins",
            outline: "none",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Add Task
        </Button>

        <div
          style={{
            marginTop: "100px",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "black",
            flexWrap: "wrap",
          }}
        >
          {getTask.map(({ id, task }) => (
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "white",
                display: "flex",
                boxShadow: "0px 5px 7px 2px  rgba(0, 0, 0, 0.35)",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "10px",
                margin: "10px",
              }}
            >
              <div style={{ width: "90%" }}>{task}</div>
              <div style={{ display: "flex" }}>
                <Button
                  style={{
                    marginTop: "30px",
                    height: "30px",
                    width: "100px",
                    backgroundColor: "lightblue",
                    border: "1px solid silver",
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    removeTask(id);
                  }}
                  style={{
                    marginTop: "30px",
                    height: "30px",
                    width: "100px",
                    marginLeft: "5px",
                    backgroundColor: "red",
                    border: "1px solid silver",
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}

export default DashBoard;
