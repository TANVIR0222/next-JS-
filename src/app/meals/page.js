import Melas from "@/components/Melas";

export const metadata = {
    title: "Meal home | next js",
    description: "supper power next js website",
  };
const Mealsage = () => {
    return (
        <div className='flex min-h-screen flex-col items-center leading-9 p-24'>
            <h1 className="">choose your male</h1>
            <p className="">choose male of your choices by searching.......... </p>
            <Melas/>
        </div>
    );
};

export default Mealsage;