const UserPage = (props) => {
  return (
    <div>
      <h1>User: {props.data.firstName}</h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json();
  const allUsersIds = data.users.map((user) => user.id);
  return {
    paths: allUsersIds.map((id) => ({ params: { id: `${id}` } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  return {
    props: { data },
  };
};

export default UserPage;
