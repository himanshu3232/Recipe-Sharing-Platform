interface ICard {
  heading?: string;
  body: string;
}

export default function Card({ heading, body }: ICard) {
  return (
    <div
      className="card card-body shadow p-3 mb-5 bg-body-tertiary rounded"
      style={{ width: "18rem" }}
    >
      <h5 className="card-title">{heading}</h5>
      <p className="card-text">{body}</p>
    </div>
  );
}
