import { useRouter } from "next/router";

const Settings = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>This is a {query.uname} setting page</h1>
    </div>
  );
};

export default Settings;
