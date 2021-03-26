[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/amamenko/electric-bill-calculator">
    <img src="images/Bolt.png" alt="Logo" width="150"  />
  </a> 

  <h3 align="center">Electric Bill Calculator</h3>

  <p align="center">
    Electric Bill Calculator Tool for Electric Vehicles Based on a Given Load Profile
    <br />
    <br />
    <a href="https://electric-bill-calculator.netlify.app">View Demo</a>
    · 
    <a href="https://github.com/amamenko/electric-bill-calculator/issues">Report Issue</a>  
  </p>
</p>

## Introduction

The Electric Bill Calculator was developed for [ZappyRide](https://www.zappyride.com) to demonstrate the fundamentals of electric bill calculations. This calculator uses an example yearly load profile for a user's home as the baseline load profile.

This tool factors in an additional three components: which electric rate - a flat rate of $0.15/kWh or a time-of-use (TOU) rate of $0.20/kWh between noon and 6pm, and $0.08/kWh otherwise - the customer is currently on, how many miles the user plans to drive per year, and what hours of the day the user plans to charge their electric vehicle (presumably in their home's garage). 
The tool then calculates whether it makes more sense from a financial standpoint for the user to stay with their current chosen rate (either fixed or TOU) or switch to a different one.

This calculation is based on the impact of the electric vehicle on the electric bill. This is found by first finding the value of the initial electric bill without the electric vehicle factored in. The user's home load profile and the initial electric rate of the user are used to find this value.

Next, based on the user's inputs, the load profile added by the electric vehicle is calculated based on how much energy it uses and when it is being charged (an electric vehicle consumes about 0.3 kWh per mile driven).

The home load profile and the electric vehicle load profiles are added and the new bill is calculated based on both potential rates. The bill impact, therefore, is found by subtracting the new bill value from the initial bill value. A decision can be made at this point as to whether to swith rates or stay on the same one.

## UX / UI

<br /> 
<p align="center">
<a href="https://inkydoodle.ml">
    <img  src="https://media.giphy.com/media/MaiIRE8jNYPWyZlFQ3/giphy.gif" alt="Electric Bill Calculator Screenshot" width="700" />
</a>
</span>
<br/ >
<br />

The calculator tool was built mainly by using React and [Styled Components](https://github.com/styled-components/styled-components). A mobile-first design was used for the tool.

The modal feature uses the package [react-responsive-modal](https://www.npmjs.com/package/react-responsive-modal) and the slider feature for when a user selects the number of miles they plan to drive uses the package [rc-slider](https://www.npmjs.com/package/rc-slider).

This project was deployed to [Netlify](https://www.netlify.com).

## Local Development

To set up this project locally, you can follow the steps below.

### Prerequisites

You will need to have the following software installed:

- npm
- Git
- Node.js

### Installation

1. Clone the Github repository.
   ```sh
   git clone https://github.com/amamenko/electric-bill-calculator.git
   ```
2. Install all NPM packages.
   ```sh
   npm install
   ```
3. Start the local server.
   ```JS
   npm start
   ```
4. Build for production.
   ```JS
   npm run build
   ```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

Avraham (Avi) Mamenko - avimamenko@gmail.com

Project Link: [https://github.com/amamenko/electric-bill-calculator](https://github.com/amamenko/electric-bill-calculator)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [ZappyRide](https://www.zappyride.com) 
- [styled-components](https://styled-components.com)
- [React Icons](https://react-icons.github.io/react-icons)
- [react-responsive-modal](https://www.npmjs.com/package/react-responsive-modal)
- [rc-slider](https://www.npmjs.com/package/rc-slider)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/amamenko/electric-bill-calculator/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/avrahammamenko
