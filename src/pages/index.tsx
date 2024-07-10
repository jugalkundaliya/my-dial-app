import { RootState } from "@/app/store";
import AppLayout from "@/components/layout";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useSelector } from "react-redux";

const HomePage = () => {
  return (
    <AppLayout>
      <h1>Home Page</h1>
    </AppLayout>
  );
};

export default HomePage;
