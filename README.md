# TastyTV

> Website to advertise new company TastyTV including some special feature requests
> Live demo [_here_](https://lhm6b.csb.app/).

## Table of Contents

- [General Info](#general-information)
- [Planning](#planning)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Wireframes & User Stories](#wireframe&user-stories)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)

## General Information

TastyTv needs to publicize their company and its offerings online. For that, they needed a promotional website that displays information about the company, the stream programming for the next few days, and regular announcements.

They wanted the following special features:  
People to get a random tasty movie or TV show recommendation from our collection.
Links to our social media accounts on YouTube, Instagram, Twitter, Facebook, and LinkedIn.

## Planning

I first started with the wireframe once those where completed I created the basic structure based on wireframes and the
user stories ensuring all those user stories where included on the site.
Then I started on the features of the site (randomizer & programming). I had some difficulty with my programming and
the InnerHTML these where resolved.

Once all site features where in place I cleaned up the HTML code ensuring it was working and nothing irrelevant was left in
or opens didn't have a close.

Once HTML code was cleaned I worked on the CSS to get this into a viewable state.

On all issues I had I went back to lessons we covered to understand where I had missed something and them implemented
the changes in all cases I was able to get my functions working. The only issue I had to get additional clarification on
was the InnerHTML issue which once explained was resolved and completed.

## Technologies Used

- html
- JavaScript

## Features

**Special Feature and how I solved them**

**Randomiser**
Added an array list of movie titles and used the js to then call the list and pull a random name via the Math.Random syntax.

**Programming**
Created an array with titles and descriptions then used .InnerHTML to add the name and description to page.

**Favourite Functions**
When looking for an alternative way to switch between pages I found "window.location" js function this can be activated by button press and swaps to another page/link. I added this to my programming pages as alternative to links.

List the site features here:

- Button that when pressed pulls a random movie
- Form to submit account information
- Page showing day listings (pulling from array)
- Company information and Announcements page

## Wireframes & User Stories

link to [wireframes and user stories](https://miro.com/app/board/o9J_lqbG68M=/?invite_link_id=340353651619)

## Project Status

Project is: _complete_
Based on specifications from the customer.

## Room for Improvement

Include areas you believe need improvement / could be improved. Also add TODOs for future development.

| Improvement               | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| Array Call                | Improve the JS array call for the daily (using ForEach)                       |
| Add bootstrap             | Improve visual style of site to a more modern look                            |
| Add array calling to news | add array to news so when connected to a backend can be updated more smoothly |
| Add movie to Randomizer   | as movies get added new movie name gets added to array                        |

To do:

- Mobile site version
- When user is logged in top bar changes to reflect this
- login button functions as login to account

## Contact

Created by Andrew Ralph-Gledhill
