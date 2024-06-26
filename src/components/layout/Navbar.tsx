function Navbar() {
  return (
    <div className="sticky top-0 left-0 flex gap-5 p-6 pl-3 w-fit sm:pl-6 sm:gap-12 ">
      <h2 className="text-2xl font-bold">UniverChat</h2>
      <a
        className="mt-1 text-lg transition duration-100 hover:scale-95 "
        href="/sign-in"
      >
        Sign in
      </a>
      <a
        className="mt-1 text-lg transition duration-300 hover:scale-95"
        href="sign-up"
      >
        Sign up
      </a>
    </div>
  );
}

export default Navbar;
