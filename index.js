//H11_3

// let S = 'https://weather338.p.rapidapi.com/locations/search?language=en-US&query=',
// 	S_lat = '',
// 	S_lon = '',
// 	S_Date = '20200622'


// function renderList(data) {
//   console.log(data);
//   //document.body.innerHTML = data[0].country;
// }

// function ask_weather() {
// 	let S1;
// 	S1 = S + document.querySelector("input.city").value;

// 	fetch(S1, {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "weather338.p.rapidapi.com",
// 			"x-rapidapi-key": "ad77c505c6mshb228f8fc25f361bp197708jsnb775b647dc8d"
// 		}
// 	})
// 	.then(response => {  
// 	return response.json();
// 	})
// 	.then(res => {
// 	      	console.log('res',res);
// 			console.log('res',res.location);
// 			console.log('res',res.location.latitude[0]);
// 			console.log('res',res.location.longitude[0]);	

// 			fetch(`https://weather338.p.rapidapi.com/weather/forecast?units=m&language=en-US&latitude=50.45&longitude=30.524&date=${S_Date}`, {
// 				"method": "GET",
// 				"headers": {
// 					"x-rapidapi-host": "weather338.p.rapidapi.com",
// 					"x-rapidapi-key": "ad77c505c6mshb228f8fc25f361bp197708jsnb775b647dc8d"
// 				}
// 			})
// 			.then(response => {  
// 				return response.json();
// 			})
// 			.then(res => {
// 				console.log('res',res);
// 			})
// 			.catch(err => {
// 				console.log(err);
// 			});

// 	})
// 	.catch(err => {
// 		console.log(err);
// 	})
// };

// var el = document.querySelector("input.find_weather");
// el.addEventListener("click", ask_weather);
