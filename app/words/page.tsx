import React from 'react';

const Words = async () => {
  const wordsJson = await fetch(
    'https://random-word-api.vercel.app/api?words=10'
  );
  const words: [] = await wordsJson.json();
  return (
    <>
      <h1>Random Words</h1>
      {words.map((word) => (
        <div className="stack" key={word}>
          <div className="text-center border border-base-content card w-36 bg-base-100">
            <div className="card-body">{word}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Words;
