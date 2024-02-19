interface IHeading {
  content: string;
  size?: number;
}
export default function Heading({ content, size = 1 }: IHeading) {
  return (
    <div className="container">
      <h1 className={`display-${size}`}>{content}</h1>
    </div>
  );
}
