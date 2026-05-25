import Card from "../components/Card";
export default function Leaderboard() {
    return (
        <> 
        <div className="container d-flex flex-column gap-4 mt-4" style={{position:"relative",top:59}}>
        <h2>Leaderboard</h2>
        <div className="d-flex gap-4 flex-wrap justify-content-center">
        <Card width="620px" height="300px" title="Productivity Leaderboard (Monthly)" />
        <Card width="600px" height="300px" title="Active Badges" />
        <Card width="1250px" height="200px" title="Community-wide Study Goals" />
        {/* <Card width="1250px" height="200px" title="Subscription & Billing" /> */}
        </div>
        </div>
        </>
    )
}