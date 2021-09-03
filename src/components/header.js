const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const result = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleHead = document.createElement('h1');
  const tempSpan = document.createElement('span');

  result.appendChild(dateSpan);
  result.appendChild(titleHead);
  result.appendChild(tempSpan);

  result.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  dateSpan.textContent = date;
  titleHead.textContent = title;
  tempSpan.textContent = temp;

  return result;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const entry = document.querySelector(selector);
  const headerResult = Header('Lambda Times', 'September 3rd, 2021', '75 degrees');
  entry.appendChild(headerResult);
}

export { Header, headerAppender }
