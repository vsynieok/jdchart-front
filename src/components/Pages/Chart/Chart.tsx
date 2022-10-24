import { useParams } from "react-router-dom";
import "./Chart.css";

const Chart: React.FC = () => {
  let tableData = [
    {
      song: "About That Bass",
      artist: "Meghan Trainor",
      pos: 1,
      peak: 1,
      plays: 1337,
      img: "https://jdnow-api-contentapistoragest.justdancenow.com/songs/AboutThatBass_1597235411959/assets/web/aboutthatbass_small.jpg",
    },
    {
      song: "I Knew You Were Trouble (Taylor's Version)",
      artist: "Meghan Trainor",
      pos: 2,
      peak: 1,
      plays: 1337,
      img: "https://jdnow-api-contentapistoragest.justdancenow.com/songs/AboutThatBass_1597235411959/assets/web/aboutthatbass_small.jpg",
    },
    {
      song: "About That Bass",
      artist: "Meghan Trainor",
      pos: 3,
      peak: 1,
      plays: 1337,
      img: "https://jdnow-api-contentapistoragest.justdancenow.com/songs/AboutThatBass_1597235411959/assets/web/aboutthatbass_small.jpg",
    },
    {
      song: "About That Bass",
      artist: "Meghan Trainor",
      pos: 4,
      peak: 1,
      plays: 1337,
      img: "https://jdnow-api-contentapistoragest.justdancenow.com/songs/AboutThatBass_1597235411959/assets/web/aboutthatbass_small.jpg",
    },
  ];

  const { id } = useParams();
  return (
    <div>
      <table className="chartTable">
        <tr>
          <th>
            <span className="chartHeader chartHeader__pos">#</span>
          </th>
          <th>
            <span className="chartHeader">Song</span>
          </th>
          <th>
            <span className="chartHeader chartHeader__plays">Plays</span>
          </th>
          <th>
            <span className="chartHeader chartHeader__peak">Peak</span>
          </th>
        </tr>
        {tableData.map((e, idx) => {
          return (
            <>
              <tr>
                <td>
                  <div className="chartEntryPosition">{e.pos}</div>
                </td>
                <td>
                  <div className="chartEntryDesc">
                    <img src={e.img} />
                    <div className="chartEntryDesc__songInfo">
                      <h1>{e.song}</h1>
                      <h2>{e.artist}</h2>
                    </div>
                  </div>
                </td>
                <td>{e.plays}</td>
                <td>
                  <div className="chart-entry__peak">{e.peak}</div>
                </td>
              </tr>
              {idx !== tableData.length - 1 ? (
                <tr className="spacer"></tr>
              ) : null}
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Chart;
