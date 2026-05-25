import Card from "../components/Card";
export default function Settings() {
    return (
        <>
        <div className="container d-flex flex-column gap-4 mt-4" style={{position:"relative",top:59}}>
        <h2>Settings</h2>
        <div className="d-flex gap-4 flex-wrap justify-content-center">
        <Card width="720px" height="200px" title="User Profile" />
        <Card width="500px" height="200px" title="Account Security" />
        <Card width="400px" height="200px" title="Add Preferences" />
        <Card width="400px" height="200px" title="Integrations" />
        <Card width="400px" height="200px" title="Danger Zone" />
        </div>
        </div>
        </>
    )
}