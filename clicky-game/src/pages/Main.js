import React, { Component } from "react";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Header from "../components/Header";

import { Col, Row, Container } from "../components/Grid";
class Cards extends Component {
    state = {
      books: [],
      title: "",
      author: "",
      synopsis: ""
    };
  
    componentDidMount() {
      this.loadBooks();
    }
  

render() {
    return (
<Container fluid></Container>
        );
    }
}
  
  export default Cards;