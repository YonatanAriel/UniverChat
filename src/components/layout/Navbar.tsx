function Navbar() {
  return (
    <div className="sticky top-0 left-0 pl-10  flex gap-10 p-6 w-fit">
      <h2 className="font-bold text-2xl">UniverChat</h2>
      <a
        className="mt-1 text-lg hover:scale-95  transition duration-100 "
        href="/sign-in"
      >
        Sign in
      </a>
      <a
        className=" mt-1  text-lg hover:scale-95  transition duration-300"
        href="sign-up"
      >
        Sign up
      </a>
    </div>
  );
}

export default Navbar;
