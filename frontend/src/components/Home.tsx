import Heading from "./header/Heading";

export default function Home() {
  return (
    <div className="container">
      <header className="text-center my-5">
        <Heading content="Welcome to Recipe World!"></Heading>
        <p className="lead">
          Explore delicious recipes shared by our community
        </p>
      </header>
      <main>
        <section className="row center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Recent Recipes</h2>
            <div className="card mb-4">
              <img
                src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg"
                className="card-img-top"
                alt="Recipe"
              />
            </div>
            <div className="card mb-4">
              <img
                src="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg"
                className="card-img-top"
                alt="Recipe"
              />
            </div>
            <div className="card mb-4">
              <img
                src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
                className="card-img-top"
                alt="Recipe"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center my-5">
        <p>Start sharing your own recipes today!</p>
      </footer>
    </div>
  );
}
