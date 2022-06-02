import * as React from 'react';

function getTitle(title) {
    return title;
}

// const title = 'React';

//function component
function app() {
    return (
        //not HTML but JSX (Javascript XML syntax)
        <div>
            <h1>Hello {getTitle('React')}</h1>

            {/* <div>
            <h1>Hello {title}</h1>
        </div> */}
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" />
        </div>
    );
}

export default app;
