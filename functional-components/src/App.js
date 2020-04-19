import React from 'react';

/* Functional Component */
// function App(props) {
//   return(
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   );
//
// }

/* Functional Component (Arrow Function)*/
// const App = props => {
//   return (
//     <div>
//         <h1>{props.name}</h1>
//     </div>
//   );
// }

/* Functional Component (Arrow Function short form because of only one compoent )*/
const App = props => (
  <div>
    <h1> {props.name} </h1>
  </div>
)

export default App;
