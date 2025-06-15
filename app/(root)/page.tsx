import Hero from "@/components/Hero";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  return (
    <>
      <Hero query={query} />
    </>
  );
}
