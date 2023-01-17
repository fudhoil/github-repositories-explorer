import React from "react";
import { Octokit } from "octokit";
import Accordions from "./components/Accordions";

function App() {
  const [username, setUsername] = React.useState("");
  const [data, setData] = React.useState(null);
  const sort = "followers";
  const order = "desc";
  const per_page = 5;
  const page = 1;

  const octokit = new Octokit();

  const seacrh = async () => {
    const { data } = await octokit.request("GET /search/users{?q,sort,order,per_page,page}", {
      q: `${username} in:login`,
      sort,
      order,
      per_page,
      page,
    });
    setData(data);
  };

  return (
    <div style={{
      maxWidth: "36rem",
      fontSize: "calc(10px + 2vmin)",
      backgroundColor: "white",
      padding: "1rem",
      margin: "1rem auto",
      overflowY: "auto",
      overflowX: "hidden",
      height: "calc(100vh - 4rem)",
    }}>
      <form style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        gap: "1rem",
        backgroundColor: "white",
      }} onSubmit={(e) => {
        e.preventDefault();
        seacrh();
      }}>
        <div style={Styles.box}>
          <input type="text" placeholder="Enter username" style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            height: "2rem",
            padding: "0 0.5rem",
            border: "1px solid #e5e5e5",
            backgroundColor: "#f2f2f2",
          }}
            value={username}
            onChange={(e) => setUsername(e.target.value.replace(" ", ""))}
          />
        </div>
        <button style={{
          width: "100%",
          height: "2.5rem",
          padding: "0 0.5rem",
          border: "none",
          backgroundColor: "#2d9cdb",
          color: "white",
        }}
          type="submit">
          Search
        </button>
      </form>
      <div style={Styles.data}>
        <Accordions data={data} username={username} />
      </div>
    </div>
  );
}

export default App;

const Styles = {
  box: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    height: "2rem",
    padding: "0 0.5rem",
  },
  data: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
  }
}