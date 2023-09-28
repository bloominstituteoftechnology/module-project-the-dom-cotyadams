function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  let widgets = document.body.querySelectorAll('div');
  widgets.forEach(widget => {
    widget.classList.add('widget');
  })
  let headers = document.body.querySelectorAll('h3');
  headers.forEach(header => {
    header.classList.add('header')
  })
  
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  //create the quote
  let widget = document.getElementsByClassName('widget')[0];
  let header = widget.getElementsByTagName('h3')[0];
  
  let text = document.createElement('p');
  text.id = 'body_quote';
  // add content to quote
  text.textContent = 'It\'s not at all important to get it right the first time. It\'s vitally important to get it right the last time.'
  widget.appendChild(text);
  //create author
  let author = document.createElement('p');
  author.id = 'author';
  author.textContent = 'Andrew Hunt and David Thomas in 1999';
  author.style.width = '100%'
  author.style.textAlign = 'right';
  widget.appendChild(author);
  
  //  ✨ add your code here
  let corporate_widgets = document.getElementsByClassName('corporatespeak')[0]
  console.log(corporate_widgets)
  corporate_widgets.id = 'corporate_speak';
  text = document.createElement('p');
  text.textContent = 'We need to synergize our paradigms synergistically in order to transform our platforms agilely.';
  corporate_widgets.appendChild(text);
  let corporate_header = corporate_widgets.getElementsByTagName('h3')[0];
  



  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  let Countdown_widget = document.getElementsByClassName('countdown')[0]
  text = document.createElement('p');
  text.textContent = 'Liftoff! 🚀';
  Countdown_widget.appendChild(text)
  
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  let friend_widget = document.getElementsByClassName('friends')[0];
  text = document.createElement('p')
  text.textContent = 'Luis Gonzalez was born in 1990 and has no friends.'
  friend_widget.appendChild(text)
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  /*let is_orange = false;
  headers.forEach(header =>
    header.addEventListener('click', () => {
      if (is_orange) {
        header.style.color = 'rgb(133, 133, 133)'
      }
      else {
        header.style.color = '#ff4b00'
      }
      is_orange = !is_orange;
    }))
  widgets.forEach(widget => {
  widget.addEventListener('focus', () => {
    widget.classList.add('focused');
  });
  widget.addEventListener('blur', () => {
    widget.classList.remove('focused');
  });
  });*/
  let is_orange = false;
let currentHeader = null;

// Get all widgets with the class "widget"
const filler = document.querySelectorAll('.widget');

// Function to reset the color of the currently selected header
function resetHeaderColor() {
  if (currentHeader) {
    currentHeader.style.color = 'rgb(133, 133, 133)';
  }
}

// Add a click event listener to each widget
filler.forEach(widget => {
  widget.addEventListener('click', () => {
    // Reset the color of the previously selected header
    resetHeaderColor();

    // Change the color of the clicked header
    const header = widget.querySelector('h3');
    header.style.color = '#ff4b00';

    // Update the currentHeader reference
    currentHeader = header;
  });
});

// Add a keydown event listener to handle tab navigation
document.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    // Reset the color of the currently selected header when tab is pressed
    resetHeaderColor();
  }
});

// Add a focus event listener to indicate the focused widget
filler.forEach(widget => {
  widget.addEventListener('focus', () => {
    widget.classList.add('focused');
  });
  widget.addEventListener('blur', () => {
    widget.classList.remove('focused');
  });
});

  
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
