export default function TodoInput({addTask, initialText}) {
    return (
        <form action="" >
            <input type="text" placeholder="write text.."/>
            <button onClick={addTask}>{initialText? "Add todo": "Update todo"}</button>
        </form>
    )
}