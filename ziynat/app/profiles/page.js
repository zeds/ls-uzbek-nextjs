"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const page = () => {
  const supabase = createClient();
  const [dataSource, setDataSource] = useState([]);

  const getProfile = useCallback(async () => {
    try {
      //   setLoading(true)

      const { data, error, status } = await supabase
        .from("profiles")
        .select("*");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log("data = ", data);
        setDataSource(data);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      //   setLoading(false)
    }
  }, []);

  useEffect(() => {
    getProfile();
  }, []);

  const onChangeHandler = (event) => {
    setDataSource([...dataSource, { username: event.target.value }]);
    //setUserName(event, target, value);
  };

  return (
    <>
      <div>プロフィール</div>
      <div className="flex bg-gray-300 gap-1 flex-wrap p-2">
        {dataSource.map((item) => (
          <div key={item.id} className="w-[200px} h-[300px] bg-blue-300">
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={item.username}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
