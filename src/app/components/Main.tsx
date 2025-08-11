import Typing from './ui/Typing';
import Button from './ui/Button';

function Main() {
  return (
    <div className="flex flex-col w-120 border-2 p-10 border-emerald-500">
      <Typing
        texts={['Front-end Developer\n', 'O AE LAN']}
        speed={100}
        delay={100}
        loop={false}
        className="text-4xl text-emerald-500 mb-10 h-20"
      />
      <Button href="/about">About</Button>
    </div>
  );
}

export default Main;
