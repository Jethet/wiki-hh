if(currentProfile !== undefined) {
  document.querySelector("#profileDisplay").innerHTML = `
    <ul class="list-group" style="list-style: none; ">
      <li class="list-gro"up-item">Name: ${currentProfile.name}</li>
      <li class="list-gro"up-item">Age: ${currentProfile.age}</li>
      <li class="list-gro"up-item">Location: ${currentProfile.location}</li>
      <li class="list-gro"up-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>`;

  document.querySelector("#imageDisplay").innerHTML = `
    <img src="${currentProfile.image}">`;
} else {

// No more profiles
window.location.reload()
}