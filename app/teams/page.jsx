import TeamCard from "@/components/TeamCard";
import teamsData from "../src/json/teamData.json";

export const metadata = {
  title: 'team - page',
  description: 'showing brabus team',
}

const TeamsPage = () => {
  return (
    <div>
      <h1 className="mt-20 text-center xl:text-4xl text-2xl font-semibold">OUR TEAM</h1>
      <p className="text-center xl:text-base text-sm">Upholding the highest standards is not a choice but a way of life.</p>
      <TeamCard teams={teamsData} />
    </div>
  );
};

export default TeamsPage;
