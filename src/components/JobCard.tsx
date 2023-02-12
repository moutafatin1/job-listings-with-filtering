import { companies } from "../data";

type JobCardProps = {
  job: (typeof companies)[number];
};

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <article className="relative flex w-full max-w-5xl flex-col rounded-md border-l-4 border-l-primary bg-white px-6 py-8 font-spartan shadow-lg md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <img
          src={job.logo}
          alt={job.company}
          className="absolute top-0 h-12 w-12 -translate-y-1/2 md:static md:h-20 md:w-20 md:translate-y-0"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <p className="font-bold text-primary">{job.company}</p>
            <div className="flex items-center gap-2 ">
              {job.new && (
                <span className="rounded-full bg-primary px-2 pt-1   text-sm  uppercase text-white">
                  new!
                </span>
              )}
              {job.featured && (
                <span className="rounded-full bg-neutral-veryDarkGrayishCyan px-2 pt-1   text-sm  uppercase text-white">
                  featured
                </span>
              )}
            </div>
          </div>
          <p className="cursor-pointer font-bold text-neutral-veryDarkGrayishCyan transition hover:text-primary md:text-xl">
            {job.position}
          </p>
          <p className="flex  items-center gap-2 font-medium text-neutral-darkGrayishCyan">
            <span className="shrink-0">{job.postedAt}</span>
            <div className="h-1 w-1 shrink-0 rounded-full bg-gray-300"></div>
            <span className="shrink-0">{job.contract}</span>
            <div className="h-1 w-1 shrink-0 rounded-full bg-gray-300"></div>
            <span className="shrink-0"> {job.location}</span>
          </p>
        </div>
      </div>
      <hr className="my-4 border-gray-300 md:hidden" />
      <ul className="flex flex-wrap gap-4 md:justify-end">
        {[...job.languages, ...job.tools, job.level, job.role].map((tag) => (
          <li key={tag}>
            <button
              onClick={() => alert(tag)}
              className="rounded-md bg-neutral-background px-2 pt-1  text-sm font-bold text-primary transition hover:bg-primary hover:text-white md:text-base"
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};
