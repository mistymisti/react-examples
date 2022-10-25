console.log("This is a jSx file !!");

const app = {
    title: 'Indecision App',
    subtitle: 'this is a jsx app',
    options: [
      
    ]
};

const submitForm = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reRenderDOMJS();
    }
    
};

const user = {
    name : 'Hello world',
    age: 19,
    location: 'new york'
};

const getLocation = function(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

const removeAll = () => {
    app.options = [];
    reRenderDOMJS();
};

const appDiv = document.getElementById('app');

const reRenderDOMJS = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            { app.subtitle && <p>{app.subtitle}</p> }
            { app.options && app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
            <p>{app.options.length}</p>
            <button id="remove" onClick={removeAll}>Remove All</button>
            <ol>
               {
                   app.options.map((option) => {
                       return <li key={option}>{option}</li>;
                   })
               }
            </ol>
            <form onSubmit={submitForm}>
                <input type="text" name = "option" />
                <button id="submit">Add Note</button>
            </form>
            
        </div>
    );
    ReactDOM.render(template, appDiv);
};

reRenderDOMJS();

