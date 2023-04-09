import React from "react";

interface AllTheHisProps {
  username: string;
  message: string;
  createdAt: Date;
}

const AllTheHis = ({ data }: AllTheHisProps) => {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="cursor-pointer rounded-xl border border-black p-5">
        <div>{data?.username}</div>
        <div>{data?.message}</div>
      </div>
    </main>
  );
};

export default AllTheHis;
