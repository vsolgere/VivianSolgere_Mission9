import React from "react";
import "./App.css";
import teamData from "./CollegeBasketballTeams.json";

function App() {
  function Welcome() {
    return <h1>2024 March Madness Teams</h1>;
  }

  interface TeamProps {
    school: string;
    mascot: string;
    location: string;
  }

  function TeamList() {
    return (
      <div>
        {teamData.teams.map((team) => (
          <Team
            key={team.tid}
            school={team.school}
            mascot={team.name}
            location={`${team.city}, ${team.state}`}
          />
        ))}
      </div>
    );
  }

  class Team extends React.Component<TeamProps> {
    render() {
      const { school, mascot, location } = this.props;
      return (
        <div>
          <h2>{school}</h2>
          <p>Mascot: {mascot}</p>
          <p>Location: {location}</p>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
