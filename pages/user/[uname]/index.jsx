import { useRouter } from "next/router";
import { useEffect } from "react";

const useUser = () => ({ user: { name: "Atul Chauhan" }, loading: false });

const UserPage = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user.user) {
      router.replace("/");
    }
  }, [router, user]);

  return (
    <div>
      <h1>This is a dynamic route index page.</h1>
      <button
        onClick={(e) =>
          router.push({
            pathname: "/user/[uname]/settings",
            query: {
              uname: router.query.uname,
            },
          })
        }
      >
        Open User Settings
      </button>
      <button onClick={(e) => router.replace(`/`)}>Go To Home</button>
      <button onClick={(e) => router.reload()}>Reload</button>
    </div>
  );
};

export default UserPage;
