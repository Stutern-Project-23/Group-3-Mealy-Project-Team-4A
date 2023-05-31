import React from "react";
import ReactModal from "react-modal";
import "../styles/editProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { closedProfileEdit } from "../redux/slices/profileSlice";
import { editprofileNameModal } from "../styles/allModals";
import { ButtonPill } from "./Buttons";
import { useForm } from "react-hook-form";
import editNameIcon from "../images/editname.svg";
import editMailIcon from "../images/mail-icon.png";
import clearEdit from "../images/clearEdit.svg";
import close from "../images/close.svg";

function EditProfileModal() {
  const { register, handleSubmit } = useForm();
  const { displayEdit } = useSelector((state) => state.profile);
  function editSubmit(data) {
    console.log(data);
  }
  const dispatch = useDispatch();
  function closeProfileEdit() {
    dispatch(closedProfileEdit());
  }

  return (
    <ReactModal
      isOpen={displayEdit}
      contentLabel="editprofilemodal"
      onRequestClose={closeProfileEdit}
      style={editprofileNameModal}
    >
      <img
        src={close}
        alt="close icon"
        className="closeEditProfile-icon"
        onClick={closeProfileEdit}
      />
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
          <img src={editMailIcon} alt="edit name icon" className="icon-start" />
          <img src={clearEdit} alt="clear edit icon" className="icon-end" />
        </div>

        <ButtonPill text="Submit" className="button-pill_editProfileName" />
      </form>
    </ReactModal>
  );
}

export default EditProfileModal;
