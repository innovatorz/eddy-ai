import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const useCurrentUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      await Auth.currentUserInfo().then((user) => {
        setUser({ id: user.attributes.sub, username: user.username });
      });
    } catch (err) {
      console.log("useCurrentUser Errors:", err);
      setUser({});
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { user: { id: id, userName: userName } };
};

export default useCurrentUser;
