import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Users = () => {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  console.log(data);
  if (error) {
    return <h1>Error...</h1>;
  }
  if (!data) return <h1>Loading...</h1>;
  //   const [users, setUsers] = useState([]);
  //   console.log("Users", users);
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const data = await fetch("https://dummyjson.com/users");
  //       setUsers(await data.json());
  //     };
  //     fetchUsers();
  //   }, []);

  return (
    <div>
      <h1>Users</h1>
      {data &&
        data.users &&
        data.users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <h3>{user.firstName}</h3>
          </Link>
        ))}
    </div>
  );
};

export default Users;
