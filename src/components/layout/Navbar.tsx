function Navbar() {
  return (
    <div className="absolute top-0 left-0 pl-10  flex gap-10 p-6">
      <h2 className="font-bold text-2xl">UniverChat</h2>
      <a className="mt-1 text-lg " href="/sign-in">
        Sign in
      </a>
      <a className=" mt-1  text-lg" href="sign-up">
        Sign up
      </a>
    </div>
  );
}

export default Navbar;