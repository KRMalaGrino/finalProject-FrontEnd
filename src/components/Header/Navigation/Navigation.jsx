function Navigation({ isSignedIn }) {
  return (
    <div className="navigation">
      <button className="navigation__home">Home</button>
      {isSignedIn ? (
        <>
          <button className="navigation__saved-articles">Saved articles</button>
          <div className="navigation__author-wrapper">
            <button className="navigation__author">Ryan</button>
            <img className="navigation__exit-icon" src="" alt="username" />
          </div>
        </>
      ) : (
        <>
          <button className="navigation__sign-in">Sign in</button>
        </>
      )}
    </div>
  );
}

export default Navigation;
