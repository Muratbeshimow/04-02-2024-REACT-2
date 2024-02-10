
function BirdStories(p) {
    return (
        <><Title type="bird" title="Birds" /><div className="pictures border">
            <BirdStory image="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/325521391/900" age='2' story="Story about a new bird" name="Birdy" url="https://www.google.com" />
            <BirdStory image="https://d1jyxxz9imt9yb.cloudfront.net/medialib/4268/image/s768x1300/WC202209_LAST_006_430968_reduced.jpg" story="Story about a new bird" name="PPuki" url="https://www.google.com" />
            <BirdStory image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmcH18ektW4f789cel7vUsJ7nuFtPlFUbCg&usqp=CAU" story="Story about a new bird" name="Tuki" url="https://www.google.com" />
        </div></>
    )
}

function BirdStory(props) {
    return (
        <div>
            <Title type="bird" title="this is a bird" age='1' />
            <img src={props.image} />
            <p> {props.story}</p>
            <p>His name is {props.name}</p>
            <div className="age">Age: {props.age}</div>
            <a href={props.url}>Link to {props.name} for adopt</a>
        </div>
    )
}

function Birds() {
    return (
        <div className="main">
            <Navbar />
            <BirdStories title="new bird title" />
        </div>
    )
}

const dogs = ReactDOM.createRoot(document.getElementById("birds"));

dogs.render(<Birds />)
