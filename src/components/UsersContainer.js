import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../redux/users/usersActions";

const UserContainer = () => {
   const { loading, users, error } = useSelector((state) => state.users);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchUsersRequest());
   }, []);

   return (
      <div>
         <h2>users container</h2>
         <div>
            {loading ? (
               <p>loading...</p>
            ) : error ? (
               <p>{error}</p>
            ) : users && users.length ? (
               users.map((u) => <li key={u.id}>{u.name}</li>)
            ) : (
               <p>fetching data failed</p>
            )}
         </div>
      </div>
   );
};

export default UserContainer;
