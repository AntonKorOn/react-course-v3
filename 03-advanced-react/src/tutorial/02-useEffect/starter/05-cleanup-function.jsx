import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />} {/* each time it will mount and unmount (instead of simple rerender, so useEffect would run each time) */}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting');
    const intID = setInterval(() => {
      console.log('hello from interval');
    }, 1000); // basically even when you unmount the component it still keeps running in the background (a more realistic example could be something like service subscription)
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intID); // this is cleanup function, you return it inside useEffect to clean any attachments which you created inside it (so basically when you unmount it, some attachemnets like eventlisteners or intervals are still there)
  }, []);

  return <h1>hello there</h1>;
};
export default CleanupFunction;