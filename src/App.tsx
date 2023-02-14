import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { JobCard } from "./components/JobCard";
import { useJobs } from "./hooks/useJobs";

const App = () => {
  const { addFilter, clearFilter, deleteFilter, filteredJobs, filters } =
    useJobs();
  return (
    <>
      <Header />
      <Filter
        tags={filters}
        deleteFilter={deleteFilter}
        clearFilter={clearFilter}
      />
      <main className="px-8 py-16">
        <section className="flex flex-col items-center gap-12">
          {filteredJobs.map((company) => (
            <JobCard key={company.id} job={company} addFilter={addFilter} />
          ))}
        </section>
      </main>
    </>
  );
};

export default App;
