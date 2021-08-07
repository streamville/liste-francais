import { FaTimes } from 'react-icons/fa';


const SingleTask = ({ list, onDelete, onToggle }) => {
  return(
    <div className={`list ${list.reminder ? 'Reminder' : ''}`} onDoubleClick={() => onToggle(list.id)}>
      <h3>{list.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(list.id)} /></h3>
      <p>{list.day}</p>
    </div>
  );
};

export default SingleTask;