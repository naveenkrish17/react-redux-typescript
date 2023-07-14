import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostRequest } from "./redux/actions/postsAction/postsActions";
import { RootState } from "./redux/reducers/rootReducer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, []);

  return (
    <div className="App">
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        posts?.map((todo, index) => (
          <div key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
