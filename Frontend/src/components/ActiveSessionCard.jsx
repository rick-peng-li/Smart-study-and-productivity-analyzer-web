import Card from "./Card";

export default function ActiveSessionCard({ sessionTime }) {
  return (
    <Card 
      width="460px" 
      height="200px" 
      title="Active Study Session" 
      content={
        <>
          <h1>{sessionTime}</h1>
          <button type="submit" className="btn btn-primary me-3">
            Start/Stop
          </button>
          <button type="reset" className="btn btn-outline-dark m-3">
            Reset
          </button>
        </>
      }
    />
  );
}
