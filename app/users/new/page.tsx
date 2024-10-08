"use client";

import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="btn btn-primary">
      Create
    </button>
  );
};

export default NewUserPage;
