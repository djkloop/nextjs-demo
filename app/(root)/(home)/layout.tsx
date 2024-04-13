import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

type Props = {
  children: React.ReactNode;
};

const RootHomeLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootHomeLayout;
