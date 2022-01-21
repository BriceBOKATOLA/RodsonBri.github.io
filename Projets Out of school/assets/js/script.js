// Test pour voir si le fichier est bien charger 
// console.log('Document');

//-------------------------------------------------------
//fonction permettant de générer un code html avec le bon nombre d'étoiles
  let getUSB = (vote) => {
    vote = parseInt(vote)
    let starVote = vote / 2
    let starFill = ''
    for (i = 0; i < 5; i++) {
      if (i < starVote) {
        starFill += `<i class="fas fa-star"></i>`
      } else {
        starFill += `<i class="far fa-star"></i>`
      }
    }
    return starFill;
  }
// ------------------------------------------------------------------
// Récupération du fichier en local
  fetch('assets/data/USB.json')
    .then(response => response.json())
    .then((jsonMovies) => {
      jsonMovies.results.map((USB) => {
//-------------------------------------------------------------------
// declaration des varables 

        let title = USB.original_title;
        let overview = USB.overview;
        let poster = USB.poster_path;
        let vote = USB.vote_average;
        let star = getUSB(vote); // fonction qui va retourner un contenu html avec les étoiles
        
        let USBElToInject = `
        <div class='col-12 col-sm-6 col-xl-4 mb-3'>
          <div class='row no-gutters'>
            <div class='col-md-5'>
              <img class='img-fluid' src='${poster}' />
            </div>
            <div class='col-md-7 pl-2'>
              <h5 class="pt-3 pt-md-0">${title}</h5>
              <p class='text'>${overview}</p>
              <p>${star}</p>

              <button type="button" class="btn btn-primary">Ajouter au Panier</button>
            </div>
          </div>
        </div>
      `;
        document.getElementById('filmTable').innerHTML += USBElToInject;
        
        // ajout des elements dans le panier 
        $(function () {
          $(".btn-primary").click(function () { 
          $("#panier").html(""); 
          });
          });

      //  $('#pied').html(div);

          
      })
    })