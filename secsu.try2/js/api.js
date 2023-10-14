window.onload = function () { fetch("https://api.lanyard.rest/v1/users/505011007165431819").then(response => response.json()).then(async opz => {
       
const info = opz.data.discord.user;
const profileImg = document.querySelector('.profile-img');
const nameElement = document.getElementById('name'); 
const globalElement = document.getElementById('global'); 

profileImg.src = info.avatar ? `https://cdn.discordapp.com/avatars/${info.id}/${info.avatar}.${info.avatar.startsWith("a_") ? 'gif' : 'png'}?size=512` : "https://cdn.discordapp.com/embed/avatars/5.png";
nameElement.textContent = info.username;
})
.catch(error => { });
};
