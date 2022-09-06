import ReactDOM from 'react-dom';
import './index.css';
export const Modal = ({children}) => {

    return ReactDOM.createPortal( 
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
)}
    
  


  