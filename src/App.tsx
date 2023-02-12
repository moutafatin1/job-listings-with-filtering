import { Header } from "./components/Header";
import { JobCard } from "./components/JobCard";
import { companies } from "./data";

const App = () => {
  return (
    <>
      <Header />
      <main className="px-8 py-16">
        <section className="flex flex-col items-center gap-12">
          {companies.map((company) => (
            <JobCard key={company.id} job={company} />
          ))}
        </section>
      </main>
    </>
  );
};

export default App;
