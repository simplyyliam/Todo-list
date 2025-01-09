import { FormEvent, useRef, useState } from "react"


export default function App () {

  const [Todo, setTodo] = useState([])

  const todoRef = useRef<HTMLInputElement>()
 
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const value = todoRef.current?.value
    if (!value) 
        return
    setTodo((prev) => [...prev, value])
    if (todoRef.current) {
      todoRef.current.value = ''
    }
  }

  const clear = () => {
    if (Todo) {
      setTodo([])
    }
  }
  
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-8 items-center">
          <h1 className="text-3xl font-bold">Todo List</h1>
          
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
          <form onSubmit={onSubmit}>
          <input ref={todoRef} className="focus:outline-none bg-neutral-100 p-5 rounded-xl text-center" type="text" placeholder="Add Task"/>
          </form>


          <div className="flex gap-2">
            <button onClick={onSubmit} className="p-4 rounded-xl bg-amber-300">
              <img src="./src/assets/arrow-right.svg" alt="" />
            </button>

            <button onClick={clear} className="p-4 bg-orange-400 rounded-xl">
              <img src="./src/assets/xmark.svg" alt="" />
            </button>
          </div>
          </div>

          <div className="flex w-[23em]  flex-col gap-2">
            {Todo.map((Todo, index) => (
              <div key={index} className="flex py-4  justify-center rounded-xl bg-amber-200">
                <h1 className="text-lg font-medium">{Todo}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}