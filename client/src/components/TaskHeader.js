
const TaskHeader = () => {

  return (
      <div >
          <div
            className="flex w-11/12 ml-16 text-center py-3 mt-4 text-lg text-blue-800 
            rounded-lg shadow-sm bg-zinc-100 font-semibold  "
          >
            <p className="w-1/12">S.NO</p>
            <p className="w-5/12">TITLE</p>
            <p className="w-2/12">COMPLETED</p>
            <p className="w-2/12">EDIT</p>
            <p className="w-2/12">DELETE</p>
          </div>
      </div>
  )
}

export default TaskHeader