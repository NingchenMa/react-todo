import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const CustomForm = ({addTask}) => {

    const [task, setTask] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }

    return(
        <form
            className="todo"
            onSubmit={handleFormSubmit}
        >

            <div className="wrapper">

                <input 
                    type="text"
                    id="task"
                    className="input"
                    value={task}
                    onChange={(e)=>{ setTask(e.target.value)}}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Enter Task please, this placeholder is not working..."
                />
                <label
                    htmlFor="task"
                    className="label"
                >
                    Enter Task :)
                </label>
            </div>

            <button
                    className="btn"
                    aria-label="Add Task"
                    type="submit"
                >

                <PlusIcon/>

                </button>

        </form>
    )
}

export default CustomForm