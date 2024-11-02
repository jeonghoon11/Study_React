// import { useState } from "react";

// export default function Hello() {
//     // let name = "Mike";
//     const [name, setName] = useState('Mike');

//     function changeName() {
//         const newName = name === "Mike" ? "Jane" : "Mike";
//         setName(newName);
//         // document.getElementById("name").innerText = name;
//     }
//     return (
//         <div>
//             <h2 id="name">{name}</h2>
//             <button onClick={changeName}>Change</button>
//         </div>
//     );
// }


import { useState } from "react";

export default function Hello() {
    // let name = "Mike";
    const [name, setName] = useState('Mike');

    return (
        <div>
            <h2 id="name">{name}</h2>
            <button
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike");
                }}
            >
                Change
            </button>
        </div>
    );
}





// const Hello = () => {
//     return <p>Hello</p>;
// }
// export default Hello;


// const Hello = function () { 
//     return <p>Hello</p>;
// };

// export default Hello;



// export default function Hello() {
//     return <p>Hello</p>;
// }