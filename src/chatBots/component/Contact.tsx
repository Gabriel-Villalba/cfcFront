// import { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import image from "../../common/cfcLogo-removebg-preview.png";


// const APIKEY = process.env.REACT_APP_OPENAI_API_KEY;

// const Contact: React.FC = () => {
//   const humanMessage = useRef<HTMLDivElement>(null);
//   const botMessage = useRef<HTMLDivElement>(null);
//   const input = useRef<HTMLInputElement>(null);
//   const date = new Date();
//   const day = date.getDay();
//   const month = date.getMonth();
//   const year = date.getFullYear();
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const [dateTime] = useState(`${days[day]}, ${months[month]} ${year}`);

//   useEffect(() => {
//     checkStatus();
//   }, [dateTime]);

//   const checkStatus = () => {
//     const status = document.querySelector(".status") as HTMLElement;
//     if (dateTime === "Tuesday, October 2023") {
//       status.innerHTML = "Fuera de linea";
//       status.style.color = "red";
//     } else {
//       status.innerHTML = "En linea";
//       status.style.color = "green";
//     }
//   };

//   const handleInput = async () => {
//     const botMessageElement = botMessage.current;
//     const humanMessageElement = humanMessage.current;
//     const inputElement = input.current;

//     if (!inputElement || !botMessageElement || !humanMessageElement) return;

//     const userMessage = inputElement.value;
//     humanMessageElement.innerText = userMessage;
//     console.log(userMessage);
//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//           model: "gpt-3.5-turbo",  
//           messages: [
//             { role: "system", content: "You are a helpful assistant." },
//             { role: "user", content: userMessage }
//           ],
//           max_tokens: 150,
//           temperature: 0.7,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${APIKEY}`,
//           },
//         }
//       );

//       const botResponse = response.data.choices[0].message.content.trim();
//       botMessageElement.innerText = botResponse;
//     } catch (error) {
//       botMessageElement.innerText = "Lo siento, hubo un error al procesar tu solicitud.";
//       console.error("Error al llamar a la API de OpenAI:", error);
//     }

//     inputElement.value = "";
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       handleInput();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <div className="flex items-center mb-4">
//           <img src={image} alt="Bot" className="w-12 h-12 rounded-full mr-4" />
//           <div>
//             <h2 className="text-xl font-bold">Charlemos</h2>
//             <div className="status text-sm text-green-500">En linea</div>
//           </div>
//         </div>
//         <div className="h-48 overflow-y-auto bg-gray-50 p-4 rounded-lg mb-4">
//           <div className="bot-message mb-2" id="message1" ref={botMessage}></div>
//           <div className="human-message mb-2" id="message2" ref={humanMessage}></div>
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             id="input"
//             placeholder="Escribe tu mensaje ..."
//             ref={input}
//             className="flex-1 p-2 border rounded-l-lg"
//             onKeyPress={handleKeyPress}
//           />
//           <button
//             onClick={handleInput}
//             className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
//           >
//             <i className="fas fa-paper-plane"></i> Enviar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;








// import { useState, useRef, useEffect } from 'react';
// import image from "../../common/cfcLogo-removebg-preview.png";

// const Contact: React.FC = () => {
//   const humanMessage = useRef<HTMLDivElement>(null);
//   const botMessage = useRef<HTMLDivElement>(null);
//   const input = useRef<HTMLInputElement>(null);
//   const date = new Date();
//   //const hours = date.getHours();
//   //const seconds = date.getSeconds();
//   const day = date.getDay();
//   const month = date.getMonth();
//   const year = date.getFullYear();
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  // const [time, setTime] = useState(`${hours}:${seconds}`);
//   const [dateTime, setDateTime] = useState(`${days[day]}, ${months[month]} ${year}`);

//   useEffect(() => {
//     checkStatus();
//   }, [dateTime]);

//   const checkStatus = () => {
//     let isActive = true;
//     if (dateTime === "Tuesday, October 2023") {
//       isActive = false;
//     }
//     const status = document.querySelector(".status") as HTMLElement;
//     if (isActive) {
//       status.innerHTML = "En linea";
//       status.style.color = "green";
//     } else {
//       status.innerHTML = "Fuera de linea";
//       status.style.color = "red";
//     }
//   };

//   const handleInput = () => {
//     const botMessageElement = botMessage.current;
//     const humanMessageElement = humanMessage.current;
//     const inputElement = input.current;

//     if (!inputElement || !botMessageElement || !humanMessageElement) return;

//     const goodwords = ["idiota", "malo", "estúpido", "inútil", "perra", "loco", "pelotudo", "tarado"];
//     const welcome = ["hola", "hola", "hola", "qué tal", "yo", "qué pasa", "qué tal", "holis", "saludos", "buenos días", "buenas tardes", "buenas noches"];
//     const bye = ["adiós", "hasta luego", "nos vemos", "nos vemos luego"];
//     const thanks = ["gracias", "muchas gracias", "que tengas un bendecido día", "que tengas un buen día"];
//     const how = ["cómo estás", "cómo te va", "cómo te va hoy"];
//     const good = ["eso es bueno", "suena bien", "eso suena increíble", "eso suena genial", "genial", "suena genial", "bien"];
//     const response = ["estoy bien", "estoy bien", "estoy bien hoy", "estoy genial", "estoy bien"];
//     const nameAsk = ["what's your name", "what is your name"];
//     const owner = ["quién es el dueño", "quién te hizo", "quién es tu creador", "quién es tu dueño"];
//     const ageAsk = ["what's your age", "what is your age", "how old are you"];
//     const meettings = [
//       "cuántas reuniones tienen",
//       "hay reunión el domingo",
//       "hay reunión el domingo",
//       "cuándo hay reunión",
//       "cuando hay reunion",
//       "qué día tienen reunión",
//       "que dia tienen reunion",
//       "que dias y horarios son las reuniones",
//       "que días y horarios son las reuniones"
//     ];

//     let inputValue = inputElement.value.toLowerCase();
//     inputValue = inputValue.replace(/[!¡¿?.,]/g, '');

//     const checkWords = (words: string[], response: string) => {
//       if (words.some(word => inputValue.includes(word))) {
//         botMessageElement.innerText = "Escribiendo...";
//         setTimeout(() => {
//           botMessageElement.innerText = response;
//           inputElement.value = "";
//         }, 2000);
//         return true;
//       }
//       return false;
//     };

//     if (checkWords(goodwords, "Como el que escribe 😎")) return;
//     if (checkWords(welcome, "Hola, ¿cómo estás hoy?")) return;
//     if (checkWords(bye, "Adiós, que tengas un buen día")) return;
//     if (checkWords(thanks, "De nada")) return;
//     if (checkWords(how, "Estoy bien, gracias")) return;
//     if (checkWords(good, "Me alegra oír eso")) return;
//     if (checkWords(response, "Eso es bueno")) return;
//     if (checkWords(nameAsk, "Mi nombre es Bot")) return;
//     if (checkWords(owner, "El dueño de este bot es Treasure")) return;
//     if (checkWords(meettings, "Tenemos reunión los días Miércoles a las 20hs y Domingos a las 10hs y 20hs. Te esperamos ")) return;
//     if (checkWords(ageAsk, "Tengo 1 año de edad")) return;

//     humanMessageElement.innerText = inputElement.value;
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       handleInput();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <div className="flex items-center mb-4">
//           <img src={image} alt="Bot" className="w-12 h-12 rounded-full mr-4" />
//           <div>
//             <h2 className="text-xl font-bold">Charlemos</h2>
//             <div className="status text-sm text-green-500">En linea</div>
//           </div>
//         </div>
//         <div className="h-48 overflow-y-auto bg-gray-50 p-4 rounded-lg mb-4">
//           <div className="bot-message mb-2" id="message1" ref={botMessage}></div>
//           <div className="human-message mb-2" id="message2" ref={humanMessage}></div>
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             id="input"
//             placeholder="Escribe tu mensaje ..."
//             ref={input}
//             className="flex-1 p-2 border rounded-l-lg"
//             onKeyPress={handleKeyPress}
//           />
//           <button
//             onClick={handleInput}
//             className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
//           >
//             <i className="fas fa-paper-plane"></i> Enviar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



// import React, { useState } from 'react';
// import { MessageSquare } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState<string[]>([]);

//   const handleSendMessage = () => {
//     if (message.trim() !== '') {
//       setChatHistory([...chatHistory, `Usuario: ${message}`]);
//       // Aquí iría la lógica para procesar la pregunta y obtener una respuesta
//       const botResponse = "Gracias por tu pregunta. Un miembro de nuestro equipo te responderá pronto.";
//       setChatHistory(prev => [...prev, `Bot: ${botResponse}`]);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Contacto</h2>
//       <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-4 md:p-6">
//         <div className="flex items-center mb-4">
//           <MessageSquare className="text-blue-600 mr-2" />
//           <h3 className="text-lg md:text-xl font-semibold">ChatBot de CFC</h3>
//         </div>
//         <div className="h-48 md:h-64 overflow-y-auto mb-4 p-4 bg-gray-100 rounded">
//           {chatHistory.map((msg, index) => (
//             <p key={index} className="mb-2">{msg}</p>
//           ))}
//         </div>
//         <div className="flex flex-col md:flex-row">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Escribe tu pregunta aquí..."
//             className="flex-grow p-2 border rounded-t md:rounded-l md:rounded-t-none mb-2 md:mb-0"
//           />
//           <button
//             onClick={handleSendMessage}
//             className="bg-blue-600 text-white px-4 py-2 rounded-b md:rounded-r md:rounded-b-none hover:bg-blue-700 transition duration-300"
//           >
//             Enviar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;