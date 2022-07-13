import * as React from 'react';

const App = () => {
    // Array of objects with unique IDs
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org',
            author: 'Jordan Walke',
            num_comments: 3,
            point: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ];
    // Hook state with getter and setter in empty string
    // use state to set local storage for searches
    const [searchTerm, setSearchTerm] = React.useState(
        localStorage.getItem('search') || 'React'
    );
    // Update in local storage
    React.useEffect(() => {
        localStorage.setItem('search', searchTerm);
    }, [searchTerm]);

    // Handler for setSearchTerm
    const handleSearch = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };
    // Filter for search that would show only matching results and force them to lower case
    const searchedStories = stories.filter((story) =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>My Hacker Stories</h1>
            {/* Passing handler and props/state through component */}
            <Search onSearch={handleSearch} searchTerm={searchTerm} />
            <hr />
            <List list={searchedStories} />
        </div>
    );
};
// Handler of any change on value target
const Search = (props) => {
    const handleChange = (event) => {
        props.onSearch(event);
        console.log(event.target.value);
    };

    return (
        <div>
            <label htmlFor="search">Search:</label>
            {/* Using handler for any chanmge on input */}
            <input id="search" type="text" onChange={handleChange} />
            <p>
                {/* Using property of searchTerms here */}
                Searching for <strong>{props.searchTerm}</strong>
            </p>
        </div>
    );
};

const List = (props) => {
    return (
        <ul>
            {/* Iterating through List for rendering */}
            {props.list.map(function (item) {
                // Rendering items in list
                return <Item key={item.objectID} item={item} />;
            })}
        </ul>
    );
};

const Item = (props) => {
    const item = props.item;
    return (
        <li>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </li>
    );
};

export default App;
