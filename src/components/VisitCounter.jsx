import { db } from '../../database/FireBaseDB';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';


const VisitCounter = () => {
    const [visitCounter, setVisitCounter] = useState(0)

    async function incrementVisitorCounter() {
  
  console.log(localStorage)
  const hasVisited = localStorage.getItem('hasVisited');
  console.log("visited?: ", hasVisited)
  if (hasVisited !== 'true') {
    console.log("inside not visited")
    try {
      const counterRef = doc(db, 'counter', 'visitorCount');
      const counterSnap = await getDoc(counterRef);

      if (counterSnap.exists()) {
        const currentCount = counterSnap.data().counter || 0;
        setVisitCounter(currentCount + 1)
        await updateDoc(counterRef, {
          counter: currentCount + 1
        });
        console.log('Counter incremented!');
      }

      localStorage.setItem('hasVisited', 'true');

    } catch (error) {
      console.error('Error incrementing counter:', error);
    }
  } else {
    console.log('User already visited. No increment.');
    const counterRef = doc(db, 'counter', 'visitorCount');
    const counterSnap = await getDoc(counterRef);
    setVisitCounter(counterSnap.data().counter)
    console.log(counterRef, counterSnap.data().counter)
  }
}
useEffect(()=>{
    //localStorage.setItem('hasVisited', 'false'); This is to reset the current localstorat at current machine.
    // For global reset there is need ot accessing the DB
    incrementVisitorCounter()
}, [])
    return (
        <section >
            <h2>Total Visits to my Porfolio: {visitCounter}</h2>
        </section>
    )
}
export default VisitCounter;
