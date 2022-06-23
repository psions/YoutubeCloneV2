import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm]=useState('');
  function handleSubmit(event) {
    event.preventDefault()
    debugger
    props.getVideo(searchTerm)
  }

  return (
    <Form className="d-flex center" onSubmit={handleSubmit}>
      <FormControl
        className="me-2"
        type="search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}    

export default SearchBar;
