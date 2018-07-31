import React, { Component } from 'react';

let time = new Date().toLocaleString();

class Clock extends Component {
    render () {
        return (
            <p>{time} </p>

        );
    }
}

export default Clock;



// export const months = [
// 	'January',
// 	'February',
// 	'March',
// 	'April',
// 	'May',
// 	'June',
// 	'July',
// 	'August',
// 	'September',
// 	'October',
// 	'November',
// 	'December',
// ];

// export let currentMonth = new Date().getMonth();

// export function getDay() {
// 	let currentDay = new Date().getDate();
// 	if (currentDay < 9) {
// 		currentDay = '0' + currentDay.toString();
// 	}
// 	return currentDay;
// }

// export function getExactDate(date) {
// 	let day = date.slice(8, 10);
// 	let month = date.slice(5, 7);
// 	let i = month[0] === '0' ? (month = month[1]) : month;
// 	month = months[i - 1];
// 	return [day, month];
// }