// eslint-disable-next-line react/prop-types
const TodoItem = ({text, onComplete}) => {
    return (
        <li className={}>
            <input onChange={onComplete(0)} type={"checkbox"}  />
            {text}
            <button>Edit</button>
            <button>Delete</button>
        </li>
    )
}

export default TodoItem