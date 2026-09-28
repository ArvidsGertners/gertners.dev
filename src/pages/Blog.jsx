import { Header } from "../components/blog/sections/Header";
import { Featured } from "../components/blog/sections/Featured";

export const Blog = () => {
  return (
    <div className="flex flex-col items-start bg-paper">
      <Header />
      <Featured />
    </div>
  );
};
