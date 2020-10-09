import React from 'react';
import './App.css';
import Card from "./Card/Card";
import content from './CONTRIBUTE_HERE/content'

const App = () => {
    return (
        <div className="App">

            <header className="site__header">

                <div className="site__header--title">Look Ma, I'm codin'!</div>

                <span>
              Photo by <a
                    href="https://unsplash.com/@blakeconnally?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Blake Connally</a>
                </span>
            </header>

            <section className="site__content">
                {
                    content.map(item => (
                        <Card
                            name={item.name}
                            title={item.title}
                            image={require(`./CONTRIBUTE_HERE/screenshots/${item.image}`)}
                            github={item.github}
                        />
                    ))
                }

            </section>

        </div>
    );
}

export default App;
