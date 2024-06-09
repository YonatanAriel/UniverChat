function SignIn() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="color-black" onSubmit={handleSubmit}></form>
    </>
  );
}

export default SignIn;
