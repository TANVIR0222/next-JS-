import Image from "next/image";

const getTime = async () =>{
  const res = await fetch('http://localhost:3000/time')
  const data = await res.json()
  console.log(data);
  return data.currentTime;

}

export default async function Home() {
  const currentTime = await getTime();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Tanvir islam 
      <h1 className="">time </h1>
      <h1 className="">time </h1>
    </main>
  );
}
