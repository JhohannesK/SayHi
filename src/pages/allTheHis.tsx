import React from "react";

interface AllTheHisProps {
  metadata: { username: string; message: string; createdAt: Date };
  key: number;
}

const AllTheHis = ({ metadata }: AllTheHisProps) => {
  return (
    <main className="flex w-full flex-col items-center justify-center ">
      <div className="w-full cursor-pointer rounded-xl border border-black bg-white p-5">
        <div className="flex items-center justify-between">
          <div>{metadata?.username}</div>
        </div>
        <div>{metadata?.message}</div>
      </div>
    </main>
  );
};

export default AllTheHis;
