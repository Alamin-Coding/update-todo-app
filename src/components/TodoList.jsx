import TodoItem from "./TodoItem.jsx";


const TodoList = ({tasks, isTaskComplete}) => {

    return (
        <ul>
            {
                // eslint-disable-next-line react/prop-types
                tasks.map((task) => (
                    <TodoItem key={task.id} text={task.text} onComplete={isTaskComplete}  />
                ))
            }
        </ul>
    )
}
export default TodoList