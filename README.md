# React Slider Component

This is a simple React slider component that allows you to navigate through a list of reviews. It includes left and right navigation buttons to cycle through the reviews.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Data](#data)
- [License](#license)

## Installation

#### 1. Clone the repository:

   ```
   git clone https://github.com/your-username/react-slider.git
   ```
#### 2. Navigate to the project directory:

```
    cd react-slider
```
## Usage
To use the Slider component in your React application, you can import it and include it in your JSX:

```
import React from 'react';
import Slider from './path-to-slider-component/Slider';

const App = () => {
  return (
    <div>
      {/* Your other components */}
      <Slider />
      {/* Your other components */}
    </div>
  );
};

export default App;
```

## Customization

The component is customizable in terms of styling. You can modify the CSS in the slider.css file to suit your design preferences.

## Data 

The component uses a data array to populate the reviews. The data array is imported from the data.js file. You can customize the reviews by modifying this data.

```
// data.js
const people = [
    {
        id: 1,
        image: 'https://www.course-api.com/images/people/person-1.jpeg',
        name: 'maria ferguson',
        title: 'office manager',
        quote:
            'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
        id: 2,
        image: 'https://www.course-api.com/images/people/person-4.jpeg',
        name: 'john doe',
        title: 'regular guy',
        quote:
            'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
        id: 3,
        image: 'https://www.course-api.com/images/people/person-3.jpeg',
        name: 'peter smith',
        title: 'product designer',
        quote:
            'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
        id: 4,
        image: 'https://www.course-api.com/images/people/person-2.jpeg',
        name: 'susan andersen',
        title: 'the boss',
        quote:
            'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
];

export default people;
```
## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- HTML
- CSS

## Contributors

- [osamalmezouari](https://github.com/osamalmezouari)

## License

This project is licensed under the [john smilga](https://github.com/john-smilga).
