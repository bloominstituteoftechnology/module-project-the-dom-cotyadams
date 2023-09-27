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
  let is_orange = false;
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  //create the quote
  let widget = document.getElementsByClassName('widget')[0];
  console.log(widget)
  let header = widget.getElementsByTagName('h3')[0];
  console.log(header)
  widget.addEventListener('click', () => {
    if (!is_orange) {
      header.style.color = '#ff4b00';
    }
    else {
      header.style.color = 'rgb(133, 133, 133)';
    }
    is_orange = !is_orange;
  })
  let text = document.createElement('p');
  text.id = 'body_quote';
  // add content to quote
  text.textContent = 'All our dreams can come true, if we have the courage to pursue them.'
  widget.appendChild(text);
  //create author
  let author = document.createElement('p');
  author.id = 'author';
  author.textContent = '--Walt Disney';
  author.style.width = '100%'
  author.style.textAlign = 'right';
  console.log(author)
  widget.appendChild(author);
  
  //  ✨ add your code here
  
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here


  
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
