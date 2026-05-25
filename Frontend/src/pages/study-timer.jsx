import Card from "../components/Card";
import timer from "../components/timer";
export default function StudyTimer() {
    return (
        <>
        <div className="container d-flex flex-column gap-4 mt-4" style={{position:"relative",top:59}}>
        <h2>Study Timer</h2>
        <div className="d-flex gap-4 flex-wrap justify-content-center">
        <Card width="1250px" content={
            <div className="text-center">
            <h1>{timer.activeSession.time}</h1> <br />
            <button type="submit" className="btn btn-primary me-3">Pause Session</button>
            <button type="submit" className="btn btn-warning me-3">Log Distraction</button> <br />
            <button type="reset" className="btn btn-outline-dark m-3">Reset</button><br />
            <input type="text" placeholder="Task Description" className="w-25 rounded-1"></input>
            </div>
        }/>

        <Card width="1250px"  title="Session Details" content={
            <div className="text-center">
                <table className="table">
                    {timer.sessionDetails.map((detail,index)=>{
                        return(<tbody key={index}>
                        <tr className="align-item-center justify-content-center">
                            <td><b>Goal:</b> {detail.goal} hr</td>
                            <td><b>Current Distraction:</b> {detail.distraction}</td>
                            <td><b>Total Sessions Today:</b> {detail.total}</td>
                        </tr>
                    </tbody>
                        );
                    })}
                </table>
            </div>
        }/>
        </div>
        </div>

        </>
    )
}