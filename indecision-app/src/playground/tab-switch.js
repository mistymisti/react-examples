import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const sections = ['Section 1', 'Section 2', 'Section 3'];

const countryCapitalMap = new Map ([['india','delhi'], ['usa', 'washington'], ['japan', 'tokyo'], ['australia', 'canberra']]);

const country = ['india', 'usa', 'japan', 'australia'];

const capital = ['delhi', 'washington', 'tokyo', 'canberra'];

//const countryCapitalMap = new Map ([['india','delhi'], ['usa', 'washington'], ['japan', 'tokyo'], ['australia', 'canberra']]);




const CountryCap = () => {

    const[current,setCurrent] = useState('');

    useEffect(() => {
        console.log('use effect called !!');
        var countryIndex = country.indexOf(current);
        if(countryIndex > 0) {
            var capitalCurrent = capital[countryIndex];
            if(document.getElementById(capitalCurrent).tick == 'tick') {
                document.getElementById(capitalCurrent).className = 'hide';
            } else {
                document.getElementById(current).className = 'normal';
            }
        }
    }, [current]);

    useEffect(() => {
        console.log('calling this one too use effect !!');
    }, [current]);
   
    
    const highlight = (e) => {
        console.log(e.target.id);
        e.target.className = 'click';
        e.target.tick = 'tick';
        setCurrent(e.target.id);
    };

    return (
        
        <div>
                { country.map((k) => <div id= {k} tick='' key={k} onClick={highlight}>{k}</div>) }
                { capital.map((k) => <div id= {k} tick='' key={k} onClick={highlight}>{k}</div>) }
        </div>
    );
};



const TabSwitch = () => {
    
    const [current,setCurrent] = useState('');

    useEffect(() => {
        console.log('in use effect ran !!');
        console.log('Current clicked element :: '  + current);
        sections.map((s) => {
            if(current != s) {
                document.getElementById(s).style.color = 'black';
                document.getElementById(s).style.border = 'none';
            } else {
                document.getElementById(s).style.color = 'blue';
                document.getElementById(s).style.border = 'solid 1px';
            }
        });
    }, [current]);
    
    const highlight = (e) => {
        //console.log(e.target.id);
        e.target.style.color = 'blue';
        setCurrent(e.target.id);
        //e.target.parentElement.getElementsByTagName
    };


    
      return (
        <div>
            <ol>
            {sections.map(section => <li id={section} key = {section} onClick={highlight}>{section}</li>)}
            </ol>
        </div>
    );
};
ReactDOM.render(<CountryCap />, document.getElementById('app'));