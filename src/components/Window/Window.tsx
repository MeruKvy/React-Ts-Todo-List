import React from "react";
import { Ssection, SflexContainer } from "../../GlobalStyles";
import Button from "../Button";
import { TaskContext } from "../../Providers/GlobalContext";
import { v4 as uuidv4 } from "uuid";
import ToDo from "../ToDo";
import styled from "styled-components";
import { TaskTypeEnum } from "../enums";
import { useState } from "react";
import { ButtonTypeEnum } from "../enums";

const Scontainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin: auto;
  min-height: 50vh;
`;

const Scard = styled.div`
  border: 2px solid black;
  border-radius: 4px;
  width: 100%;
`;

const Sinput = styled.input`
  border: 3px solid gray;
  border-radius: 4px;
  margin: 2px;
`;

const SrowContainer = styled.div`
  width: 50%;
`;

export function Window() {
  const [taskTitle, setTaskTitle] = useState<string>();
  const [taskType, setTaskType] = useState<string>(TaskTypeEnum.SECTION1);
  const { tasks, setTasks } = React.useContext(TaskContext);

  const addNewTask = () => {
    if (taskTitle && taskType && taskTitle.trim()) {
      const id = uuidv4();

      const newTask = {
        text: taskTitle,
        type: taskType as TaskTypeEnum,
        done: false,
        id: id,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle("");
    } else {
      alert("Please fill the input");
    }
  };

  const deleteTask = (id: string) => {
    const updatedList = tasks.filter((task) => task.id !== id);
    setTasks(updatedList);
  };

  return (
    <Scontainer>
      <Scard>
        <SflexContainer>
          <Sinput
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <Sinput
            as="select"
            onChange={(e) => setTaskType(e.target.value as TaskTypeEnum)}
          >
            <option value={TaskTypeEnum.SECTION1}>
              {TaskTypeEnum.SECTION1}
            </option>
            <option value={TaskTypeEnum.SECTION2}>
              {TaskTypeEnum.SECTION2}
            </option>
          </Sinput>
          <Button
            text="Add"
            type={ButtonTypeEnum.PRIMARY}
            funcOnChlick={() => addNewTask()}
          />
        </SflexContainer>
        <SflexContainer>
          <SrowContainer>
            <Ssection>Tasks</Ssection>
            {tasks.map((task) =>
              task.type === TaskTypeEnum.SECTION1 ? (
                <ToDo
                  text={task.text}
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                />
              ) : (
                ""
              )
            )}
          </SrowContainer>
          <SrowContainer>
            <Ssection>Goals</Ssection>
            {tasks.map((task) =>
              task.type === TaskTypeEnum.SECTION2 ? (
                <ToDo
                  text={task.text}
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                />
              ) : (
                ""
              )
            )}
          </SrowContainer>
        </SflexContainer>
      </Scard>
    </Scontainer>
  );
}
