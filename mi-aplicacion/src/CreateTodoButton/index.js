
import './index.css';
import { MdAddCircle } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";

export const CreateTodoButton = ({openModal, onClickButton}) => {
  
  return (
    <>
        <button
          className="CreateTodoButton"
          onClick={onClickButton}
        >
          {openModal ? <HiMinusCircle /> : <MdAddCircle />}
        </button>
    </>
  )
}
