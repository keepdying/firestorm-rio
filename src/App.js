import { Container } from '@material-ui/core';

import PlayerListScreen from './screens/playerListScreen';

import lastUpdated from './lastUpdated.json'
import players_json from './players.json'
import currentRuns from './runs.json';
import {timeConverter} from "./utils.js";

import "./App.css";
function App() {

  return (
    <div className="App">
      <div className={"fixedBackground"} />
      <div className="bodyApp">
        <header>
            <Container className="headerContent" maxWidth="lg" component="div">
              <h1>Firestorm RIO (Beta) Shadowlands S2</h1>
              <p>Made by keepdying. Last updated on {timeConverter(lastUpdated)}</p>
              <p>Total Players: {players_json.length}, Total Runs: {currentRuns.length}</p>
              <p> F.A.Q: <a href="https://github.com/keepdying/firestorm-rio">https://github.com/keepdying/firestorm-rio</a></p>
              <p> By using Firestorm RIO, You agree that you read <a href="https://github.com/keepdying/firestorm-rio#how-does-this-work">"How does this work?"</a>.</p>
              <p> Discord Communities: <a href="https://discord.gg/GnZmf6cUNF">Firestorm M+ Gamers</a></p>
            </Container>
          </header>
        <PlayerListScreen />
      </div>
    </div>
  );}



export default App;
