import { useDispatch, useSelector } from "react-redux";
import { add ,del,edit} from "./redux/state";
import { Button,Form } from "react-bootstrap";

function App() {
  //TODO : called useDispatch for action passing 
  const dispatch = useDispatch();
  //TODO : called useSelector to get the store object
  const { user } = useSelector((state) => state.user);
   
  const adds= (e)=> {
    e.preventDefault();
    const data = e.target.item.value;
    dispatch(add(data));
    e.target.reset()
  }
  function del1(i){
    
    dispatch(del(i))
    
  };
  const edits=(e,i)=>{
    if(e.target?.editval.value){
    dispatch(edit({index:i,data:e.target.editval.value}))
    }else{
      dispatch(edit({open:"open",index:e}))
    }
  }
  return (
    <>
      <h1 className="mt-5 text-center container">Todolist Using Redux</h1>
      <Form action="" onSubmit={adds} className="text-center">
        <input
          type="text"
          id="item"
          className="mb-3 mt-3"
          placeholder="add item"
          />
          </Form>
        {user!=""
          ? user?.map((a, i) => (
              <h1 className="rounded bg-success-subtle container w-25 p-3 shadow mt-3 overflow-auto">
                {a.Edit===true
               ? <form onSubmit={(e)=>edits(e,i)} className="fs-6 container">
                  <input type="text" id="editval"/>
                </form>:
                a.Data }<Button onClick={()=>del1(i)}>delete </Button>{" "}
                <Button onClick={()=>edits(i)}>edit</Button>
              </h1>
            ))
          : <h1 className="rounded bg-danger-subtle container w-25 p-3 shadow mt-3 ">
          Nothing to see here.....
        </h1>}
    </>
  );
}

export default App;
