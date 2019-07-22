import React, { useState } from "react";
import {
  Alert,
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";

export default function NewBeer() {
  const [state, setState] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
    message: null
  });

  function handleChange(e) {
    let value = e.target.value
    if (e.target.type === "number") value = Number(e.target.value)
    setState({
      ...state,
      [e.target.name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault(); // Stop the form submission
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", state)
      .then(response => {
        // This setState is used to reset the form 
        setState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: "",
          contributed_by: "",
          message: response.data.message
        });
      })
      .catch(err => {
        setState({
          ...state,
          message: "Sorry, an error happened, make sure you filled all the values"
        })
        setTimeout(() => {
          setState({
            ...state,
            message: null
          })
        }, 2000)
      })
  }
  return (
    <div>
      <Container>
        <h1>New Beer</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={state.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tagline">Tagline</Label>
            <Input
              type="text"
              name="tagline"
              id="tagline"
              value={state.tagline}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={state.description}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="first_brewed">First brewed</Label>
            <Input
              type="text"
              name="first_brewed"
              id="first_brewed"
              value={state.first_brewed}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="brewers_tips">Brewers tips</Label>
            <Input
              type="text"
              name="brewers_tips"
              id="brewers_tips"
              value={state.brewers_tips}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="attenuation_level">Attenuation level</Label>
            <Input
              type="number"
              name="attenuation_level"
              id="attenuation_level"
              value={state.attenuation_level}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="contributed_by">Contributed by</Label>
            <Input
              type="text"
              name="contributed_by"
              id="contributed_by"
              value={state.contributed_by}
              onChange={handleChange}
            />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
        {state.message && <Alert className="my-3" color="primary">{state.message}</Alert>}
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Container>
    </div>
  );
}
