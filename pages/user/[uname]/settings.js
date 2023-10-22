import { useRouter } from "next/router";

const settings = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>This is a {query.uname} setting page</h1>
    </div>
  );
};

export default settings;
