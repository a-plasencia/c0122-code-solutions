import React from 'react';

class Accordion extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <button>Hyptertext Markup Language</button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio veniam veritatis,
          exercitationem vitae recusandae eius dolorum voluptates!
          Non, error repellendus!</p>
        <div>
          <button>Cascading Style Sheets</button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio veniam veritatis,
          exercitationem vitae recusandae eius dolorum voluptates!
          Non, error repellendus!</p>
        <div>
          <button>JavaScript</button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio veniam veritatis,
          exercitationem vitae recusandae eius dolorum voluptates!
          Non, error repellendus!</p>
      </React.Fragment>
    );
  }
}

export default Accordion;
