import Hero from "../components/Hero";
import HomeCards from "../components/Homecards";
import JobListing from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
function HomePage() {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      ></Hero>
      <HomeCards></HomeCards>
      <JobListing isHome={true}></JobListing>
      <ViewAllJobs />
    </>
  );
}

export default HomePage;
