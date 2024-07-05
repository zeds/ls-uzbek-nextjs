"use client";
import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const Page = () => {
  const [dataSource, setDataSource] = useState([]);

  const supabase = createClient();

  const getProfile = useCallback(async () => {
    try {
      const { data, error, status } = await supabase
        .from("articles")
        .select("*")
        .order("id", { ascending: false });

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

  return <div>{JSON.stringify(dataSource)}</div>;
};

export default Page;
