

import { useState } from 'react'
import styles from './TaskItem.module.css'
import {CheckIcon, PencilSquareIcon, TrashIcon} from '@heroicons/react/24/solid'

const TaskItem = ({task, removeTask, enterEditMode}) => {

    const [isChecked, setIsChecked] = useState(task.checked)

    const handleCheckBoxChange = () => {
        task.checked = !isChecked
        setIsChecked(!isChecked)
    }

    return (
       <li className={styles.task}>
            <div className={styles['task-group']}>
                <input 
                    className={styles.checkbox}
                    type="checkbox"
                    checked={isChecked}
                    name={task.name}
                    id={task.id}
                    onChange={handleCheckBoxChange}
                />
                <label 
                    htmlFor={task.id}
                    className={styles.label}
                >
                    {task.name}

                    <p className={styles.checkmark}>
                        <CheckIcon 
                            strokeWidth={2}
                            width={24}
                            height={24}
                        />
                    </p>

                </label>
            </div>

            <div
                className={styles['task-group']}
            >
                <button
                    className='btn'
                    aria-label={'Update ${task.name} Task'}
                    onClick={ () => enterEditMode(task) }
                >
                    <PencilSquareIcon/>              

                </button>

                <button
                    className={`btn ${styles.delete}`}
                    aria-label={'Update ${task.name} Task'}
                    onClick={ () => {removeTask(task)} }
                >
                    <TrashIcon/>              
                </button>

            </div>
       </li>
    )
}

export default TaskItem