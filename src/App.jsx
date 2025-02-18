// import React, { useState } from 'react'

// const App = () => {

//   //let name = 'Md Ruhul Amin';
//   const age = 25;
//   const [ name, setName ] = useState('Md Ruhul Amin');
//   const changeName = () => {
//    setName ( 'James Ron');
//   }

//   const [num, setNum] = useState(0);
 
//   const nameSubmitted = (e) => {
//     e.preventDefault();
//      let b  = setInput(e.target.value);
//       console.log(b);
//     console.log('Hello form submission', e)
//   }
//   const [input, setInput] = useState('');
//   // const handleSubmitted = (e) => {
//   //   setInput(e.target.value);
//   // }
  
//   return (
//     <div>
//       <h1>My name is :{name} and i am {age} years old.</h1>
//       <button onClick={changeName}>change name</button>
//       <br />
//       <h1 className='text-8xl bg-yellow-700 mt-5 mb-10 pl-10 text-black'>Number is : {num}</h1>
//       <button onClick={ ()=>setNum(num+1)}>Increment</button>
//       <button onClick={ () =>setNum(num-1) }>Decrement</button>
//       <br />
      
//       <form onSubmit = {nameSubmitted} >
//       <input 
//       className='m-5 rounded text-5xl px-4 py-4 text-black' 
//       type = "text" 
//       placeholder = 'write your name'
//       value = {input}
//      />
//       <br /><button className='ml-5 bg-emerald-200'>submit</button>
//       </form>
//       <h2 className='mt-5 text-8xl text-black bg-emerald-200'> you typed: {input}</h2>
        

//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react';

// const App = () => {
//   const [input, setInput] = useState('');
//   const [name, setName] = useState('');

//   // Handle input change
//   const handleInputChange = (e) => {
//     setInput(e.target.value); // Update input state with user-typed value
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();  // Prevents page refresh
//     setName(input);       // Updates `name`
//     setInput('');         // Clears input field
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           className='text-5xl ml-3 rounded px-3 py-3'
//           type="text"
//           placeholder='Write your name'
//           value={input}  // Controlled input
//           onChange={handleInputChange}  // Ensure input updates as you type
//         />
//         <br />
//         <button type="submit" className='rounded ml-5 mt-3'>Submit</button> 
//       </form>

//       <h2 className='text-5xl mt-5'>Your name is: {name}</h2>
//     </div>
//   );
// };

// export default App;

import React from 'react'
// import Card from './components/Card'
// import Card from './components/Card'
import Card from './components/Card'
const App = () => {
  
  const users = [
    {
      "name": "Alice Johansson",
      "age": 28,
      "city": "Stockholm",
      "profession": "Software Engineer",
      "photo": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      "name": "David Eriksson",
      "age": 35,
      "city": "Gothenburg",
      "profession": "Data Scientist",
      "photo": "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      "name": "Emma Karlsson",
      "age": 30,
      "city": "Malmo",
      "profession": "UX Designer",
      "photo": "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      "name": "Johan Svensson",
      "age": 40,
      "city": "Uppsala",
      "profession": "Project Manager",
      "photo": "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      "name": "Sara Lindgren",
      "age": 25,
      "city": "Lund",
      "profession": "Marketing Specialist",
      "photo": "https://randomuser.me/api/portraits/women/5.jpg"
    }
  ]
  
  return (
    <div>
      <div className='p-10'>
        {
          users.map(function(user,index) {
            return <Card 
            key={index}
              name={user.name} 
              age={user.age} 
              city={user.city} 
              profession={user.profession} 
              photo={user.photo} 
            />
          })
        }
      </div>
    </div>
  )
}

export default App




