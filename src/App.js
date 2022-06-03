import * as React from 'react';

// function getTitle(title) {
//     return title;
// }

// const title = 'React';

// const list = [
//     {
//         title: 'React',
//         url: 'https://reactjs.org',
//         author: 'Jordan Walke',
//         num_comments: 3,
//         point: 4,
//         objectID: 0,
//     },
//     {
//         title: 'Redux',
//         url: 'https://redux.js.org',
//         author: 'Dan Abramov, Andrew Clark',
//         num_comments: 2,
//         points: 5,
//         objectID: 1,
//     },
// ];

function List(props) {
    return (
        <ul>
            {props.list.map(function (item) {
                return <Item item={item} />;
            })}
        </ul>
    );
}

const Item = ({ item }) => {
    // const item = props.item;
    // object destructuring
    // const { item } = props;
    return (
        <li key={item.objectID}>
            <span>
                <a href={item.url}>{item.title}</a>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
            </span>
        </li>
    );
};

function Search() {
    // const handleChange = (event) => {
    //     console.log(event);
    // };

    // const handleMouseOver = (event) => {
    //     console.log(event);
    // };

    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input
                id="search"
                type="text"
                // onChange={handleChange}
                // onMouseOver={handleMouseOver}
            />
        </div>
    );
}

//function component
function App() {
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

    // const javascriptLibraries = [
    //     {
    //         title: 'JQuery',
    //         url: 'https://jquery.org',
    //         author: 'Jonh Resig',
    //         num_comments: 3,
    //         point: 4,
    //         objectID: 0,
    //     },
    //     {
    //         title: 'Angular',
    //         url: 'https://angularjs.org',
    //         author: 'Miško Hevery',
    //         num_comments: 2,
    //         points: 5,
    //         objectID: 1,
    //     },
    // ];

    return (
        //not HTML but JSX (Javascript XML syntax)
        <div>
            <h1>My Hacker Stories</h1>
            {/* <h1>Hello {getTitle('React')}</h1> */}
            <Search />
            {/* <div>
            <h1>Hello {title}</h1>
        </div> */}
            <hr />
            {/* render the list */}
            <List list={stories} />
            {/* <List list={javascriptLibraries} title="Javascript Libraries" /> */}
        </div>
    );
}

export default App;
