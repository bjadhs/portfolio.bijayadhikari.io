type MessageModelProps = {
  isModelOpen: boolean;
  setIsModelOpen: (arg: boolean) => void;
};

const MessageModel = ({ setIsModelOpen }: MessageModelProps) => {
  const closeModel = () => {
    setIsModelOpen(false);
  };
  return (
    <div className='absolute top-0 left-0 rignt-0 w-full h-screen bg-gray-200/50 flex flex-col justify-center align-center max-w-5xl mx-auto py-40 '>
      <button className='absolute top-10 left-10' onClick={closeModel}>
        x
      </button>
      MessageModel
    </div>
  );
};

export default MessageModel;
