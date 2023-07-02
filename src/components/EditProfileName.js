import React from "react";
import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { displayedProfileEdit } from "../redux/slices/profileSlice";
import "../styles/editProfile.css";
import { editprofileNameModal } from "../styles/allModals";
import { useForm } from "react-hook-form";
import editNameIcon from "../images/editname.svg";
import editMailIcon from "../images/mail-icon.png";
import clearEdit from "../images/clearEdit.svg";

function EditProfileModal() {
  const { register, handleSubmit } = useForm();
  const { displayEdit } = useSelector((state) => state.profile);
  function editSubmit(data) {
    console.log(data);
  }
  const dispatch = useDispatch();
  function closeProfileEdit() {
    dispatch(displayedProfileEdit());
  }

  return (
    <ReactModal
      isOpen={displayEdit}
      contentLabel="editprofilemodal"
      onRequestClose={closeProfileEdit}
      style={editprofileNameModal}
    >
      <h2 className="editProfile_heading">Your Details</h2>
      <form className="editProfile_form" onSubmit={handleSubmit(editSubmit)}>
        <label htmlFor="edit-name" className="editProfile_title">
          Name
        </label>
        <div className="editProfile_input_container">
          <input
            type="text"
            className="editProfile_input"
            placeholder="mariam"
            id="edit-name"
            {...register("edit-name", { required: "this is required" })}
          />
          <img src={editNameIcon} alt="edit name icon" className="icon-start" />
          <img src={clearEdit} alt="clear edit icon" className="icon-end" />

        </div>
        <label htmlFor="edit-email" className="editProfile_title">
          Email
        </label>
        <div className="editProfile_input_container">
          <input
            type="text"
            className="editProfile_input"
            id="edit-email"
            placeholder="marmtee@gmail.com"
            {...register("edit-email", {
              required: "this is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid Email Address",
              },
            })}
          />
        </div>
        <button type="submit" className="edit-profile_submit">
          SUBMIT
        </button>
      </form>
      <button onClick={closeProfileEdit}>CLOSE MODAL</button>
    </ReactModal>
  );
}

export default EditProfileModal;
