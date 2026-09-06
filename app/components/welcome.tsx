interface WelcomeProps {
  message: string;
}
export default function Welcome({ message }: WelcomeProps) {
  return (
    <>
      <h3 className="text-xl font-medium">{message}</h3>
    </>
  );
}
