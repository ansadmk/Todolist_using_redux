import { useDispatch, useSelector } from "react-redux";
import { add ,del} from "./redux/state";
import { Button } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
   
  const adds= (e)=> {
    e.preventDefault();
    const data = e.target.item.value;
    dispatch(add(data));
  }
  function del1(i){
    
    dispatch(del(i))
    
  };
  return (
    <>
      <h1 className="mt-5 text-center container">Todolist Using Redux</h1>
      <form action="" onSubmit={adds} className="text-center">
        <input
          type="text"
          id="item"
          className="mb-3 mt-3"
          placeholder="add item"
        />
        {user!=""
          ? user?.map((a, i) => (
              <h1 className="rounded bg-success-subtle container w-25 p-3 shadow mt-3 overflow-auto">
                {a} <Button onClick={()=>del1(i)}>delete </Button>{" "}
                <Button>edit</Button>
              </h1>
            ))
          : <h1 className="rounded bg-danger-subtle container w-25 p-3 shadow mt-3 ">
          Nothing to see here.....
        </h1>}
      </form>
    </>
  );
}

export default App;
