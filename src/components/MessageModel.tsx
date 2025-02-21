type MessageModelProps = {
  isModelOpen: boolean;
  setIsModelOpen: (arg: boolean) => void;
};

const MessageModel = ({ setIsModelOpen }: MessageModelProps) => {
  const closeModel = () => {
    setIsModelOpen(false);
  };
  return (
    <div className='absolute top-0 left-0 rignt-0 w-full h-screen bg-gray-200/50 flex flex-col justify-center items-center max-w-5xl mx-auto py-40 '>
      <button className='absolute top-20 right-20' onClick={closeModel}>
        x
      </button>
      <form className='flex flex-col items-center space-y-4 bg-indigo-500 p-4 rounded-md'>
        <input
          type='text'
          placeholder='Name'
          className='w-80 p-2 border border-gray-400 rounded-md'
        />
        <input
          type='email'
          placeholder='Email'
          className='w-80 p-2 border border-gray-400 rounded-md mt-4'
        />
        <textarea
          placeholder='Message'
          className='w-80 p-2 border border-gray-400 rounded-md mt-4'
        ></textarea>
        <button className='w-80 p-2 bg-indigo-400 text-white border rounded-md mt-4'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default MessageModel;
