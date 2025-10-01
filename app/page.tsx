import Link from "next/link";

const getDestinations = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  return res.json();
};

export default async function Home() {
  const destinations = await getDestinations();

  return (
    <div>
      <h1>Destinations</h1>
      {destinations.map((d: any) => (
        <Link key={d.id} href={`/destinations/${d.id}`}>
          <div>
            <img
              src={`https://picsum.photos/seed/${d.id}/300/200`}
              alt={d.title}
              className="mb-2 rounded"
            />
            <h2 className="text-xl font-bold">{d.title}</h2>
            <p className="text-gray-600">{d.body.slice(0, 50)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
