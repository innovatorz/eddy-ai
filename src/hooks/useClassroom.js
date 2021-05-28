import React, { useEffect, useState } from "react";
import { listRooms } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const useClassroom = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const { data } = await API.graphql(graphqlOperation(listRooms));
      setRooms(data.listRooms.items);
    } catch (err) {
      console.log("useRooms Errors:", err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, rooms];
};

export default useClassroom;
