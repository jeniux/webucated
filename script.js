// General utility functions for the Web Time Machine

// Add some console easter eggs
console.log('%c🕰️ Web Time Machine', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%cExperiencing the nostalgia? These were real pain points!', 'font-size: 14px; color: #764ba2;');
console.log('%cFun fact: Modern websites load ~100x faster than sites from 2000', 'font-size: 12px; color: #888;');

// Track which era the user visits (could be used for analytics in a real site)
const trackEraVisit = (era) => {
    const visits = JSON.parse(localStorage.getItem('eraVisits') || '{}');
    visits[era] = (visits[era] || 0) + 1;
    localStorage.setItem('eraVisits', JSON.stringify(visits));
    console.log(`You've visited the ${era} era ${visits[era]} time(s)`);
};

// Add some fun console logs based on the page
if (window.location.pathname.includes('1993')) {
    trackEraVisit('1993');
    console.log('Welcome to 1993! When HTML was simple and images rarely loaded.');
} else if (window.location.pathname.includes('1999')) {
    trackEraVisit('1999');
    console.log('Welcome to 1999! The golden age of GeoCities and web chaos.');
} else if (window.location.pathname.includes('2002')) {
    trackEraVisit('2002');
    console.log('Welcome to 2002! Dial-up internet at its finest (slowest).');
} else if (window.location.pathname.includes('2005')) {
    trackEraVisit('2005');
    console.log('Welcome to 2005! Flash everywhere, and your CPU is crying.');
}

// Show total visits
const getTotalVisits = () => {
    const visits = JSON.parse(localStorage.getItem('eraVisits') || '{}');
    const total = Object.values(visits).reduce((a, b) => a + b, 0);
    return total;
};

console.log(`Total time machine visits: ${getTotalVisits()}`);
