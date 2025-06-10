import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${!variables.name ? "Ernesto" : variables.name} ${
    !variables.lastName ? "Caraballo" : variables.lastName
  }</h1>
          <h2>${!variables.role ? "You tell me" : variables.role}</h2>
          <h3>${!variables.city ? "Coacalco de Berriozabal" : variables.city} ${
    !variables.country ? "Mexico" : variables.country
  }</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${
              variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/school/${
              variables.linkedin
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://th.bing.com/th/id/R.10b3c787251fc7aedd4671a644ce93e0?rik=CHL%2bMs69ENJHVg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-R3sZQ9gMTmM%2fUPArwu6SLQI%2fAAAAAAAAVOE%2fSUzSsA5HIMI%2fs640%2fpinguinos_de_la_mano-1280x800.jpg&ehk=CpYzQUUb2PnCQjQl6o%2f2Bipd9kmRHqzirhGDbybtRmo%3d&risl=&pid=ImgRaw&r=0",
    // this is the url for the profile avatar
    avatarURL:
      "https://avatars.githubusercontent.com/u/205842820?s=400&u=59067997a683ef377ce0f8315dc22385beb91684&v=4",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
