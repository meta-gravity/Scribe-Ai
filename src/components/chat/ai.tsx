'use client';
 
import { useCompletion } from 'ai/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { SparklesIcon } from 'lucide-react';
 
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