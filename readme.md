# Safe Path Recommender Based on Crime Statistics of Delhi NCR
Because you must look before you leave!


We are going to address the issue of safety in our project named ‘Safe Path Recommender’.

Delhi, national capital of India, is a hub for murder, kidnapping and abduction, juveniles in conflict and economic offences. Delhi tops the list of IPC crimes according to the National Crimes Records Bureau (NCRB). Among the top 19 cities, Delhi accounts for 38.8% of the crimes.
People walk on the streets but they are not safe, back from work, parties, late night dinners, parks, etc. and even coffee shops and different shopping or grocery stores during the day, children walk back from school and tuitions. Like any metropolitan city might have some spots as safe and others not, Delhi has them too. People should be able to judge whether a specific area or neighborhood is safe from possible crimes or not at a certain time of day. We have done this research on a web app which tells the safest route using crime data of Delhi Ncr to reach the desired destination SAFE!


## Our solution to the problem:

Google Maps app give the fastest route between two points without even considering security but our web app in the research finds the safest route by considering the danger index of the possible paths.To test the app, we further created “Dummy” Crime data for Noida and Gurgaon as well. Now, the research is done considering Delhi, Gurgaon and Noida in specific where crime rates have been alarmingly high, as compared to the other states.


## Technical concept used:

We have applied above Unsupervised Machine Learning Algorithm, K-means clustering to find danger index of the many possible paths between two places (starting and destination locations) assigning a magnitude of  criminal activities on the  map  of  Delhi Ncr (Delhi, Noida & Gurgaon)  in range of 0 to 4. We used Google map and Google Places Apis to display all possible routes between any two locations A & B.
* Firstly, Danger Index of the different possible paths to a destination has been calculated to compare the safest paths out of the total paths considered. 
* An autocomplete feature in the search boxes of the starting and destination locations is introduced so that user does not have to type the whole address and the drop down list emerges as other alternative suggestions for a user to pick from a varied list of places. 
* The functionality of the choice for the user to pick from different mode of travel has been introduced ie. Walking, Transit and Driving.
* Markers have been placed on all the possible paths to indicate the Danger Index associated with the path ie. Smiley: safest, Green Tick: moderately safe, Exclamation Mark Triangle: be careful, Skull: moderately dangerous and Cross: extremely dangerous.
* Statistics of the Safety of paths in the form of detailed information is output below the map so that user also knows what all things he has to consider while making his choice to make smart decisions like Distance, Time Duration, Danger Index, Route Number, and Color of the Route.
* We have divided the backend using MongoDB into a distributed database into 4 nodes representing 4 zones of Indian map - East, West, North and South. 
* Having a distributed database gives us the advantage of fault tolerance over regular databases, in case of failure of a node, other nodes can still access the crime data which is possible because of replica sets. 
* In the “Crime in Delhi” dataset we have used Google Maps Reverse Geocoding Api using the longitudes and lattitudes from the dataset to be more precise. In the “Crime in India” dataset we have used Google Maps Api using the names of the districts. Google Apis used:
  *	Google Maps JavaScript API
  *	Google Maps Embed API
  *	Google Maps Directions API
  *	Google Maps Geolocation API
  *	Google Places API Web Service: 

## Result of training the model:

- The k-means algorithm assigns 0-4 magnitude of crime level to all locations in Delhi Ncr (Delhi, Noida and Gurgaon).
- The Danger Index of ‘0’ implies that the place considered is relatively much safe with less crime records in past while an index of 4 means that the place has high crime records in the past.
- The figure below is showing detailed information of the Safety of paths  below the map so that user also knows what all things he has to consider while making his choice to make smart decisions like Distance, Time Duration, Danger Index, Route Number, and Color of the Route.

## Legend
- Green Ticks: Safest
- Smiley: Moderately safe
- Exclamation mark: Be careful
- Skull: Moderately dangerous
- Cross: Extremely dangerous

### Homepage of the app looks like:
![Screenshot 1](https://github.com/ishank62/Safe-Path-Recommender/blob/master/images/Screenshot%20(147).png)


### This is how the Web App looks like while recommending Safe Paths:
![Screenshot 2](https://github.com/ishank62/Safe-Path-Recommender/blob/master/images/Screenshot%20(149).png)


### Web App Showing Safe Path between “Saket, New Delhi, India” to “Karkardooma, New Delhi, India” with the different markers (Skull, Exclamation Mark Triangle, Smiley, Green Ticks, etc) and different routed each colored differently.:
![Screenshot 3](https://github.com/ishank62/Safe-Path-Recommender/blob/master/images/Screenshot%20(148).png)


### Figure showing the statistics of the recommended 3 Safe Paths like its Color, Time Duration for the respective path, Distance of the path, Danger Index (according to which the priority of listing of paths is set):
![Screenshot 4](https://github.com/ishank62/Safe-Path-Recommender/blob/master/images/Screenshot%20(150).png)



This Project was made by [Ishank Agarwal](https://www.github.com/ishank62) as a part of College Minor Project.