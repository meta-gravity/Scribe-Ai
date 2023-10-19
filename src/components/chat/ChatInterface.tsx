import React, { useState, useEffect } from 'react';
import { SparklesIcon } from 'lucide-react';
import AIComponent from './AIComponent';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import prisma from './prisma'; 
// Import your Prisma client

interface Message {
  user: string;
  aiResponse?: string; // Add a field for AI responses
}

const ChatInterface: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  useEffect(() => {
    // Fetch previous chat history from Prisma and set it in chatHistory state
    const fetchChatHistory = async () => {
      try {
        const history = await prisma.chatMessage.findMany({
          orderBy: { createdAt: 'asc' }, // Order messages by creation time
        });
        setChatHistory(history);
      } catch (error) {
        console.error('Error fetching chat history from Prisma:', error);
      }
    };

    fetchChatHistory();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() !== '') {
      const newUserMessage = { user: input, aiResponse: '' };
      setChatHistory([...chatHistory, newUserMessage]);
      setInput(''); // Clear the input field

      // Send the user's message to the AI API
      try {
        const aiResponse = await fetch('/api/completion', {
          method: 'POST',
          body: JSON.stringify({ message: input }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const aiResponseText = await aiResponse.text();

        // Update the AI response in the chat history
        const updatedChatHistory = [...chatHistory];
        updatedChatHistory[updatedChatHistory.length - 1].aiResponse = aiResponseText;
        setChatHistory(updatedChatHistory);

        // Store the user's message and AI response in Prisma
        await prisma.chatMessage.create({
          data: {
            userMessage: input,
            aiResponse: aiResponseText,
          },
        });
      } catch (error) {
        console.error('Error sending message to AI API:', error);
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      <div className="bg-gray-500 border border-md rounded-md p-2">
        {/* Display chat history */}
        {chatHistory.map((message, index) => (
          <div key={index}>
            <span className="font-bold">User:</span> {message.user}
            {message.aiResponse && (
              <div>
                <span className="font-bold">AI:</span> {message.aiResponse}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-300 rounded border-neutral-700 border w-full max-w-md">
        <form
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex items-center gap-3 mb-8"
        >
          <label className="grow">
            <Input
              className="border border-gray-300 rounded shadow-xl p-2"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message here..."
            />
          </label>
          <Button type="button" onClick={sendMessage}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
