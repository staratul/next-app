import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const userDetails = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const id = router.query.id;
    const userInfo = async (id) => {
      if (id) {
        const data = await fetch(`https://dummyjson.com/users/${id}`);
        setUser(await data.json());
      }
    };
    userInfo(id);
  }, [router]);

  return (
    <div>
      <h1>This is user details page</h1>
      <div>
        <span>First Name: {user && user.firstName}</span>
      </div>
    </div>
  );
};

export default userDetails;
