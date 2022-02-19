import { useState } from 'react';
import { Tweet } from './components/Tweet';
import { AppRoutes } from './routes/app.routes';

function App() {
    // const [tweets, setTweets] = useState<string[]>([
    //     'Tweet 1',
    //     'Tweet 2',
    //     'Tweet 3',
    //     'Tweet 4',
    // ]);

    // function createTweets() {
    //     setTweets([...tweets, 'Tweet 10']);
    // }

    return (
        <AppRoutes />
        // <div>
        //     {tweets.map((tweet) => {
        //         return <Tweet text={tweet} />;
        //     })}

        //     <button
        //         style={{
        //             backgroundColor: '#8257e6',
        //             border: 0,
        //             padding: '6px 12px',
        //             color: '#fff',
        //         }}
        //         onClick={createTweets}
        //     >
        //         Adicionar tweet
        //     </button>
        // </div>
    );
}

export default App;
