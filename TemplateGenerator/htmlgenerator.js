function htmlgenerate(teamnames) {
  let htmlsyntaxlist = [];

  for (let i = 0; i < teamnames.length; i++) {
    let info;
    if (teamnames[i].getRole() === "Engineer") {
      info = `GitHub: ${teamnames[i].getGithub()}`;
    } else if (teamnames[i].getRole() === "Intern") {
      info = `School: ${teamnames[i].getSchool()}`;
    } else if (teamnames[i].getRole() === "Manager") {
      info = `Office Number: ${teamnames[i].getOfficeNumber()}`;
    }
    let singleMemberSyntax = `<div class="card">
    <div class="card-body">
      <h5 class="card-title">Team Memeber Name: ${teamnames[i].getName()} </h5>
      <h6 class="card-text">Memeber Role: ${teamnames[i].getRole()}</h6>
      <ul class="card-text">
          <li>ID: ${teamnames[i].getId()}</li>
          <li>Email: ${teamnames[i].getEmail()}</li>
          <li>${info}</li>
      </ul>
    </div>
  </div> 
</div>`;
    htmlsyntaxlist.push(singleMemberSyntax);
  }
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header class="subnav-hero-section">
      <h1 class="subnav-hero-headline">Team Profile Generator</h1>
    </header>

    <div class="card-group">
    ${htmlsyntaxlist}
      </div>
      

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
}
module.exports = htmlgenerate;
