import React from "react";

interface AllTheHisProps {
  username: string;
  message: string;
  createdAt: Date;
}

const AllTheHis = ({ data }: AllTheHisProps) => {
  return (
    <main className="flex w-full flex-col items-center justify-center ">
      <div className="w-full cursor-pointer rounded-xl border border-black bg-white p-5">
        <div className="flex items-center justify-between">
          <div>{data?.username}</div>
        </div>
        <div>{data?.message}</div>
      </div>
    </main>
  );
};

export default AllTheHis;
