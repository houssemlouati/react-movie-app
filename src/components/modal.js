import React from "react";
import Modal from "react-modal";
import "../App.css";
class Modall extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      img: "",
      name: "",
      star: "",
      year: "",
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  // afterOpenModal=()=> {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  add = (e) => {
    e.preventDefault();
    const { img, name, star, year } = this.state;
    const newMovie = {
      img,
      name,
      star,
      year,
    };
    console.log(newMovie);
    this.props.add(newMovie);
    this.setState({
      modalIsOpen: false,
    });
  };
  render() {
    return (
      <div className="">
        <button className="btn-modal" onClick={this.openModal}>
          <span role="img" aria-label="add">
            🔽{" "}
          </span>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="modall"
          contentLabel="Example Modal"
        >
          <label for="lname">Image Url</label>
          <input
            type="text"
            id="lname"
            name="img"
            placeholder="Image url.."
            onChange={this.handleChange}
          />
          <label for="fname">Film Name</label>
          <input
            type="text"
            id="fname"
            name="name"
            placeholder="Film name.."
            onChange={this.handleChange}
          />

          <label for="lname">Film rating</label>
          <input
            type="text"
            id="lname"
            name="star"
            placeholder="Film rating.."
            onChange={this.handleChange}
          />
          <label for="lname">year</label>
          <input
            type="text"
            id="lname"
            name="year"
            placeholder="Year"
            onChange={this.handleChange}
          />

          <button onClick={(e) => this.add(e)}>add movie</button>
        </Modal>
      </div>
    );
  }
}
export default Modall;
