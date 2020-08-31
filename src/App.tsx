import React from 'react';
// @ts-ignore
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';
import github from './logo/github2.svg';

function App() {
    return (
        <UnderConstruction
            background={{
                image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
                textColor: '#fff',
                overlay: {
                    color: '#000',
                    opacity: '.5'
                }
            }}
            logo={{
                src: 'https://image.ibb.co/b7guP5/Rubbby_without_text.png',
                alt: 'alt text'
            }}
            title={{
                text: 'Jnabijonov'
            }}
            description={{
                text: 'Website is under construction. We\'ll be here soon',
                style: {
                    maxWidth: '440px',
                }
            }}

            links={[
                {
                    url: 'https://github.com/jasurn',
                    image: github,
                },
                {
                    url: 'https://www.linkedin.com/in/jasurn/',
                    image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
                },
                {
                    url: 'mailto:jnabijonovs@gmail.com',
                    image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
                },
            ]}
        />
    );
}

export default App;
