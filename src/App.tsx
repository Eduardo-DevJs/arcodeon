import React, { useState } from 'react';
import Arcodeon from './Components/Arcodeon/Arcodeon';

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-200">
      <div className="flex flex-col w-full gap-1">
        <Arcodeon
          title="Título 1"
          description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero facere modi, exercitationem natus rerum cum dolorum, voluptatum voluptatibus delectus ut, accusantium tenetur assumenda illum quidem officia harum praesentium aspernatur nisi?"
        />

        <Arcodeon
          title="Título 2"
          description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero facere modi, exercitationem natus rerum cum dolorum, voluptatum voluptatibus delectus ut, accusantium tenetur assumenda illum quidem officia harum praesentium aspernatur nisi?"
        />

        <Arcodeon
          title="Título 3"
          description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero facere modi, exercitationem natus rerum cum dolorum, voluptatum voluptatibus delectus ut, accusantium tenetur assumenda illum quidem officia harum praesentium aspernatur nisi?"
        />
      </div>
    </div>
  );
};

export default App;
