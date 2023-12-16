import { Ssection, SflexContainer } from "../../GlobalStyles";
import Button from "../Button";
import styled from "styled-components";
import { ButtonTypeEnum } from "../enums";
import { TaskType } from "../../Providers/GlobalContext";
import { useState } from "react";

const SdivSpacer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  width: 100%;
`;

export function ToDo({
  text,
  task,
  onDelete,
}: {
  text: string;
  task: TaskType;
  onDelete: (taskId: string) => void;
}) {
  const [taskStatus, setTaskStatus] = useState<ButtonTypeEnum>(
    ButtonTypeEnum.PRIMARY
  );
  const handleDelete = () => {
    onDelete(task.id);
  };

  const markAsDone = () => {
    setTaskStatus(ButtonTypeEnum.DONE);
    task.done = true;
  };

  return (
    <Ssection>
      <SdivSpacer>
        <SflexContainer>
          <p>{text}</p>
        </SflexContainer>
        <SflexContainer>
          <Button
            text="delete"
            type={ButtonTypeEnum.DELETE}
            funcOnChlick={() => handleDelete()}
          />
          <Button
            text="done"
            type={taskStatus}
            funcOnChlick={() => markAsDone()}
          />
        </SflexContainer>
      </SdivSpacer>
    </Ssection>
  );
}
