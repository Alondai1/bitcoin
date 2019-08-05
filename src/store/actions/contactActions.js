import types from "../types";
import contactService from "../../services/ContactService";



export const fetchData = (data , type) => {
    return {
      type,
      data
    }
  };
// export const fetchEditedContact = (user) => {
//     return {
//       type: types.EDIT_CONTACT,
//     user
//     }
//   };


  
  export const getContacts = () => {
    return (dispatch) => {
      return  contactService.getContacts()
        .then(response => {
          dispatch(fetchData(response, types.FETCH_CONTACTS))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const deleteContact = (id) => {
    return (dispatch) => {
      return  contactService.deleteContact(id)
        .then(response => {
          dispatch(fetchData(response))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const editContact = (editedContact) => {
    return (dispatch) => {
      return  contactService.saveContact(editedContact)
        .then(response => {
          dispatch(fetchData(response , types.EDIT_CONTACT))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

 