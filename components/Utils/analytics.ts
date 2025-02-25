export const initGA = () => {
  console.log(
    `%c
    CONTACT ME
   ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     || 
                
  Hey there! I'm glad you liked the site. Check out the repo at https://github.com/hanorah/hanorah 
  
  And don't forget to shoot me an email at hellohanorah@gmail.com if you need me to do awesome work at your company!`,
    'font-family:inherit'
  );
};

export const logPageView = () => {
  console.log('Page viewed:', window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    console.log(`Event logged: ${category} - ${action}`);
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    console.log(`Exception: ${description}, Fatal: ${fatal}`);
  }
};
