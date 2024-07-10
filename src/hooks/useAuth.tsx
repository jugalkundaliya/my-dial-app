import { RootState } from "@/app/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const userLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useRouter();
  useEffect(() => {
    if (!userLoggedIn) {
      navigate.replace("/login");
    }
  }, [navigate, userLoggedIn]);
};

export default useAuth;
