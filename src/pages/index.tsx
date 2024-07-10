import { RootState } from "@/app/store";
import AppLayout from "@/components/layout";
import { useSelector } from "react-redux";

const HomePage = () => {
  const userLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return userLoggedIn ? (
    <AppLayout>
      <h1>Home Page</h1>
    </AppLayout>
  ) : (
    <></>
  );
};

export default HomePage;
