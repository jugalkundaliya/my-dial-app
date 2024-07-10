import { RootState } from "@/app/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { persistLogin } from "./authSlice";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const persistedLogin = JSON.parse(
      localStorage.getItem("userLoggedIn") ?? "false"
    );
    dispatch(persistLogin({ userLoggedIn: persistedLogin }));
  }, [dispatch]);

  useEffect(() => {
    if (userLoggedIn !== null) {
      localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
    }
    if (userLoggedIn === false) {
      router.replace("/login");
    }
  }, [router, userLoggedIn]);

  if (userLoggedIn === null) {
    return null;
  }
  return <>{children}</>;
};

export default AuthProvider;
