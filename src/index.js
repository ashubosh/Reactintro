import React from 'react';
import ReactDOM from 'react-dom/client';
import HeadingComponentFunctional from './HeadingComponentFunctional';
import HeadingComponentUsingClass from './HeadingComponentUsingClass';
import './index.css';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));



const CurrentTime =()=>
{
  return <p>{new Date().toLocaleTimeString()} ------

  <HeadingComponentUsingClass title="This is a Class Component"/></p>
};
setInterval(()=>{
  root.render(
    <React.StrictMode>
    <HeadingComponentFunctional title="This is a Functional Componenet"/>
      <CurrentTime/>
      <Counter/>
    </React.StrictMode>
  );
},1000);



