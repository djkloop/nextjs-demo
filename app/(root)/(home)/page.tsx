import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section>
      <Button>Default</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary Outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"secondaryOutline"}>secondary Outline</Button>
      <Button variant={"danger"}>danger</Button>
      <Button variant={"dangerOutline"}>danger Outline</Button>
      <Button variant={"super"}>Super</Button>
      <Button variant={"superOutline"}>Super Outline</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"sidebar"}>Sidebar</Button>
      <Button variant={"sidebarOutline"}>Sidebar Outline</Button>
    </section>
  );
};

export default Home;
