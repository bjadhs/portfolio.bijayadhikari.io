const stacks = [
  {
    id: 1,
    title: 'JavaScript',
    img: 'icons/nodejs.svg',
  },
  {
    id: 2,
    title: 'NodeJS',
    img: 'icons/nodejs-2.svg',
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
    <div className='relative'>
      {stacks.map((stack, index) => {
        return (
          <img
            key={index}
            src={stack.img}
            alt={stack.title}
            className={`absolute left-${stack.id * 20} w-15 h-15 bg-white`}
          />
        );
      })}
    </div>
  );
};

export default Stacks;
