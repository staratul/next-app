const UserPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>User Page SSR</h1>
      {props.data.users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  console.log("A task is going on in server");
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
