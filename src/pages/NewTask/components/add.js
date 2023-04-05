import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const Add = () => {
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://api.github.com/repos/huahua1215/DcardHw/issues', {
      title,
      body
    }, {
      headers: {
        Authorization: `token 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` 
      }
    });
    console.log(response.data); 
    setTitle('');
    setBody('');
  };


  return (
    <Container>
      <Row>
        <Col>
          <h2>Create Issue</h2>
          <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <button type="submit">Create Issue</button>
           </form>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Add;








