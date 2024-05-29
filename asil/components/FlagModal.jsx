"use client";
import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const FlagModal = ({ setShowModal }) => {
  const supabase = createClient();
  const [dataSource, setDataSource] = useState([]);

  const getCountries = useCallback(async () => {
    const { data, error, status } = await supabase
      .from("countries")
      .select("*")
      .order("id", { ascending: false });

    if (error && status !== 406) {
      alert("Error loading country data!");
    }

    if (data) {
      console.log("country data = ", data);
      setDataSource(data);
    }
  }, [supabase]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <div className="absolute top-[100px] left-[100px] w-[600px] h-[600px] bg-orange-300 p-4">
      <button onClick={() => setShowModal(false)}>閉じる</button>
      <div className="grid grid-cols-4 gap-4 mt-2">
        {dataSource.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img
              className="w-[40px] h-[40px]"
              src={`/flags/${item.iso2.toLowerCase()}.svg`}
              alt={item.name}
            />
            <span className="text-xs">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlagModal;
