
const TaskCard = (props) => {
    // console.log(task)
    const {task,taskId ,number,onEdit,onDelete} = props;
    const { title, completed } = task;
    const handleEdit = ()=>{
        onEdit(taskId)
    };
    const handleDelete =()=>{
        onDelete(taskId)
    }
    return (
        <div>
            <div
                className="flex mx-16 w-11/12  text-center py-3 mt-3 text-lg
                 text-black rounded-lg shadow-sm bg-gray-50   "
            >
                <p className="w-1/12">{number}</p>
                <p className="w-5/12">{title}</p>
                <p className="w-2/12">
                 {completed ? "Yes" : "No"}
                </p>
                <p className="w-2/12">
                    <button 
                    className="w-[40%] text-base bg-amber-200
                     text-gray-500 rounded-lg hover:bg-amber-400"
                    onClick={handleEdit}
                    >
                     edit
                    </button>
                </p>
                <p className="w-2/12">
                   <button 
                    className="w-[40%] text-base bg-red-300
                     text-white rounded-lg hover:bg-red-600"
                    onClick={handleDelete}
                   >
                    delete
                   </button>
                </p>
            </div>
        </div>
    )
}

export default TaskCard