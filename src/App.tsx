import React from "react";
import "./App.css";
import teamData from "./CollegeBasketballTeams.json";

interface TeamProps {
  school: string;
  mascot: string;
  location: string;
}

function App() {
  function Welcome() {
    return <h1>2024 March Madness Teams</h1>;
  }

  function TeamList() {
    return (
      <div className="grid-container">
        {teamData.teams.map((team) => (
          <div className="grid-item" key={team.tid}>
            <Team
              school={team.school}
              mascot={team.name}
              location={`${team.city}, ${team.state}`}
            />
          </div>
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
