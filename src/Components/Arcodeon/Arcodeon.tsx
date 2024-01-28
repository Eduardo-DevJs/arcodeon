import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

interface ArcodeonProps {
  title: string;
  description: string;
}

const Arcodeon = ({ title, description }: ArcodeonProps) => {
  const [arcodeonOpen, setArcodeonOpen] = useState<boolean>(false);

  function isOpenAcordeon() {
    setArcodeonOpen((prevState) => !prevState);
  }

  return (
    <div className="w-full px-5 flex flex-col gap-px">
      <header
        className="bg-gray-900 cursor-pointer flex items-center justify-between hover:bg-gray-800 rounded transition-all p-3 text-xl"
        onClick={isOpenAcordeon}
      >
        <h1 className="text-white font-bold uppercase md:p-3">{title}</h1>

        {arcodeonOpen ? (
          <IoIosArrowUp size={25} color="#fff" />
        ) : (
          <IoIosArrowDown size={25} color="#fff" />
        )}
      </header>

      {arcodeonOpen && (
        <section className="mt-px bg-gray-900 p-3 text-xs">
          <p className="text-white leading-normal md:text-xl p-3">
            {description}
          </p>
        </section>
      )}
    </div>
  );
};

export default Arcodeon;
