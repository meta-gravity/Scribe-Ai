import { Button } from './ui/button';
import { Input } from './ui/input';
import { SparklesIcon } from 'lucide-react';
import { useCompletion } from 'ai/react';
 
export default function Completion() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: '/api/completion',
  });
 
  return (
    <div className='mx-auto w-full max-w-md py-24 flex flex-col stretch'>
      <div className='bg-gray-500 border border-md rounded-md p-2 '> 
        <output>{completion}</output>
      </div>

      <div className='bg-gray-300 rounded border-neutral-700 border w-full max-w-md'>

        <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-8">
          <label className="grow">
            <Input
              className=" border border-gray-300 rounded shadow-xl p-2"
              value={input}
              onChange={handleInputChange}
              placeholder="write a blog post about dalle-3..."
            />
          </label>
          <Button type="button"  onClick={stop}>
            Stop
          </Button>
          <Button disabled={isLoading} type="submit">
            <SparklesIcon className='h-5 w-5'/>
            Send
          </Button>
        </form>
      </div>

      
    </div>
  );
}

// <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      // <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-8">
      //   <label className="grow">
      //     <input
      //       className="w-full max-w-md bottom-0 border border-gray-300 rounded shadow-xl p-2"
      //       value={input}
      //       onChange={handleInputChange}
      //       placeholder="write a blog post about dalle-3..."
      //     />
      //   </label>
      //   <button type="button" onClick={stop}>
      //     Stop
      //   </button>
      //   <button disabled={isLoading} type="submit">
      //     Send
      //   </button>
      // </form>
    //   <output>Completion result: {completion}</output>
    // </div>

// import { useState } from 'react';
// // import  Button  from './ui/button';
// // import  Input  from './ui/input';
// import { SparklesIcon } from 'lucide-react';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';

// const AI = () => {
//   const [input, setInput] = useState<string>('');
//   const [chatHistory, setChatHistory] = useState<string[]>([]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };

//   const sendMessage = async () => {
//     if (input.trim() !== '') {
//       const newUserMessage = `User: ${input}`;
//       setChatHistory([...chatHistory, newUserMessage]);
//       setInput(''); // Clear the input field

//       try {
//         // Send the user's message to the AI API and retrieve the AI response
//         const response = await fetch('/api/completion', {
//           method: 'POST',
//           body: JSON.stringify({ message: input }),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           const aiResponse = await response.text();

//           // Update the chat history with the AI response
//           setChatHistory([...chatHistory, `AI: ${aiResponse}`]);

//           // Store the user's message and AI response in Prisma (assuming you have Prisma setup)
//           // Replace 'storeInPrisma' with the actual function to store data in Prisma
//           storeInPrisma(newUserMessage, `AI: ${aiResponse}`);
//         } else {
//           console.error('AI API request failed.');
//         }
//       } catch (error) {
//         console.error('Error sending message to AI API:', error);
//       }
//     }
//   };

//   // Function to store messages in Prisma
//   const storeInPrisma = async (userMessage: string, aiResponse: string) => {
//     // Implement the logic to store userMessage and aiResponse in Prisma here.
//     // You should have Prisma set up with a model for storing chat messages.

//   };

//   return (
//     <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
//       <div className="bg-gray-500 border border-md rounded-md p-2">
//         {/* Display chat history */}
//         {chatHistory.map((message, index) => (
//           <div key={index}>{message}</div>
//         ))}
//       </div>

//       <div className="bg-gray-300 rounded border-neutral-700 border w-full max-w-md">
//         <form
//           onSubmit={(e: React.FormEvent) => {
//             e.preventDefault();
//             sendMessage();
//           }}
//           className="flex items-center gap-3 mb-8"
//         >
//           <label className="grow">
//             <Input
//               className="border border-gray-300 rounded shadow-xl p-2"
//               value={input}
//               onChange={handleInputChange}
//               placeholder="Type your message here..."
//             />
//           </label>
//           <Button type="button" onClick={sendMessage}>
//             Send
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AI;
