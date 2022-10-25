
let current = true;

const toggleTextVisibility = (e) => {
    current = !current;
    render();
};

const appDiv = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visbility Toggle</h1>
            <button name="showButton" onClick={toggleTextVisibility}>
                {current ? 'Hide details' : 'Show details'}
            </button>
            {
                current && (
                    <div><p>Here are some details</p></div>
                )
            }
        </div>
    );
    ReactDOM.render(template, appDiv);
};

render();