export default function Card({ title, content, width, height }) {
  return (
    <div 
      className="card shadow p-4 rounded-4"
      style={{ width: width, height: height }}
    >
      <h6><b>{title}</b></h6>
      <div>{content}</div>
    </div>
  );
}