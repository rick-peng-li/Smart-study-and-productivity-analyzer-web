import Card from "../components/Card";
import mockActivity from "../data/mockActivity";
export default function ActivityLog() {
  return (
    <>
      <div
        className="container d-flex flex-column gap-4 mt-4"
        style={{ position: "relative", top: 59 }}
      >
        <h2>Detailed Activity Log</h2>
        <div className="d-flex gap-4 flex-wrap justify-content-center">
          <Card
            width="1250px"
            content={
              <>
                <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap mb-3">

                {/* Calendar */}
                <div className="input-group w-25">
                    <span className="input-group-text"><i className="bi bi-calendar"></i></span>
                    <select className="form-select w-auto">
                        <option>Mar 27 - Mar 31, 2026</option>
                    </select>
                </div>

                {/* Activity Type */}
                <div className="input-group w-auto">
                    <span className="input-group-text">Activity Type</span>
                    <select className="form-select w-25">
                        <option>All</option>
                        <option>Study</option>
                        <option>Distraction</option>
                        <option>LeetCode</option>
                        <option>MERN</option>
                    </select>
                </div>

                {/* Search with icon */}
                <div className="input-group w-25">
                    <span className="input-group-text">
                    <i className="bi bi-search"></i>
                    </span>
                    <input type="search" className="form-control" placeholder="Search..." />
                </div>

                <button className="btn btn-success" type="submit"><i className="bi bi-patch-plus"></i></button>
                <button className="btn btn-warning" type="submit"><i className="bi bi-pencil-square"></i></button>
                <button className="btn btn-danger" type="submit"><i className="bi bi-trash"></i></button>
                </div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Date/Time</th>
                      <th scope="col">Activity Type</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Description</th>
                      <th scope="col">Outcome/Notes</th>
                    </tr>
                  </thead>
                  {mockActivity.activity.map((entry, index) => {
                    return (<tbody key={index}>
                      <tr>
                        <td scope="row">{entry.datetime}</td>
                        <td>{entry.type}</td>
                        <td>{entry.duration}</td>
                        <td>{entry.description}</td>
                        <td>{entry.notes}</td>
                      </tr>
                    </tbody>
                    );
                  })}
                </table>
              </>
            }
          />
        </div>
      </div>
    </>
  );
}
