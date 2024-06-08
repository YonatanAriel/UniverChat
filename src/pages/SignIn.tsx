import { Button, Input } from "react-chat-elements";

function SignIn() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="color-black" onSubmit={handleSubmit}>
        <Button text="Click me" type="submit" />
      </form>
    </>
  );
}

export default SignIn;
