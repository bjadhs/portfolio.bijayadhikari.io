const stacks = [
  {
    id: 1,
    title: 'JavaScript',
    img: 'icons/nodejs.svg',
  },
  {
    id: 2,
    title: 'NodeJS',
    img: 'icons/nodejs-icon.svg',
  },
  {
    id: 3,
    title: 'ReactJS',
    img: 'icons/react-2.svg',
  },
  {
    id: 4,
    title: 'Flutter',
    img: 'icons/flutter-logo.svg',
  },
  {
    id: 5,
    title: 'SwiftUI',
    img: 'icons/swift-15.svg',
  },
];

const Stacks = () => {
  return (
    <div className='w-full flex justify-center items-center space-x-20 p-4 bg-blue-50'>
      {stacks.map((stack, index) => {
        return (
          <img
            key={index}
            src={stack.img}
            alt={stack.title}
            className='w-30 h-15'
          />
        );
      })}
    </div>
  );
};

export default Stacks;
