function Title(p) {
    if (p.age <= 1 && p.type == "dog") {
        return (
            <><div className="title">Nice Puppy!</div>
                <div>Please adopt a puppy!</div></>
        )
    }
    if (p.type == "dog") {
        return (
            <><div className="title">{p.title}</div>
                <div>Please adopt a dog!</div></>
        )
    }
    if (p.type == "cat") {
        return (
            <><div className="title">Nice CATS 4 U</div>
                <div>Please adopt a cat!</div></>
        )
    }
    else {
        return (
            p.type == "bird" ? <div className="title">{p.title}&#128038;</div> : ""
        )
    }
}

function Navbar() {
    return (
        <div className="navbar">
            <a href="index.html">Home</a>
            <a href="cats.html">Cats</a>
            <a href="dogs.html">Dogs</a>
            <a href="birds.html">Birds</a>
        </div>
    )
}

function Home() {
    return (
        <div className="main">
            <Navbar />
            <BirdStories title="Cats" />
            <DogStories title="Dogs" />
            <CatStories title="Cats" />
        </div>
    )
}

const main = ReactDOM.createRoot(document.getElementById("main"));

main.render(<Home />)
