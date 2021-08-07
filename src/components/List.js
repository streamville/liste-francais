import SingleTask from './SingleTask';

const List = ({ lists, onDelete, onToggle }) => {
  return(
    <div>
      {lists.map((list) => (
        <SingleTask 
          key={list.id} 
          list={list}
          onDelete={onDelete}
          onToggle={onToggle} />
      ))}
    </div>
  );
};

export default List;