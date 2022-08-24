import { Modal } from "react-bootstrap";

const SearchModal = ({ show, setShow }) => {
  return (
    <Modal show={show} onHide={setShow} centered className="search-modal">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShow();
        }}
      >
        <div className="form_group">
          <input
            type="text"
            className="form_control"
            placeholder="Unesi tekst ovde..."
          />
          <button className="search_btn">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default SearchModal;
