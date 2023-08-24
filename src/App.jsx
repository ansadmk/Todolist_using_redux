import { useDispatch, useSelector } from "react-redux"
import { add } from "./redux/state"
import { Button } from "react-bootstrap"


function App() {
  const dispatch=useDispatch()
 const {user}=useSelector(state=>state.user)
 
 function adds(e){
  e.preventDefault()
  const data=e.target.item.value
  dispatch(add(data))  
 }
 const Delete=(i)=>{
   
 }
  return (
    <>
      <h1 className="mt-5 text-center container">Todolist Using Redux</h1>
      <form action="" onSubmit={adds} className="text-center">
        <input type="text" id="item" className="mb-3 mt-3" placeholder="add item"/>
      {user? user?.map((a,i)=><h1 className="rounded bg-success-subtle container w-25 p-3 shadow mt-3">{a} <Button onClick={Delete(i)}>delete </Button> <Button>edit</Button></h1>):null}
      </form>
    </>
  )
}

export default App
