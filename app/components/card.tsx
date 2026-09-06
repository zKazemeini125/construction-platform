interface CardProps {
  title: string;
  count: string;
}
export default function Card({ title, count }: CardProps) {
  return (
    <div
      className="flex flex-col w-64 h-42 rounded-xl justify-between"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;",
      }}
    >
      <span className="text-3xl text-center p-6">{count}</span>
      <span className="text-xl text-center p-2 ">{title}</span>
    </div>
  );
}
