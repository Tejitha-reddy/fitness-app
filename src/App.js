import './App.css';
import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { PlusCircle, Edit, Trash2, Calendar } from 'react-feather'; 
import DatePicker from 'react-datepicker';
import { Modal } from 'react-responsive-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

function App() {
  const blankuser = {
    name: "",
    lastName: "",
    address: "",
    appointment: null
  };

  const localizer = momentLocalizer(moment);
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('Add');
  const [userdata, setUserdata] = useState([]);
  const [user, setUser] = useState(blankuser);
  const [editIndex, setEditIndex] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setAction('Add');
  };

  const addUser = () => {
    setUserdata([...userdata, user]);
    setUser(blankuser);
    onCloseModal();
    toast.success('User added successfully!');
  };

  const editUser = (index) => {
    setAction('Edit');
    const selectedUser = userdata.find((x, i) => i === index);
    setUser(selectedUser);
    setEditIndex(index);
    onOpenModal();
  };

  const updateUser = () => {
    const newusers = userdata.map((x, i) => (i === editIndex ? user : x));
    setUserdata(newusers);
    setUser(blankuser);
    setEditIndex(null);
    onCloseModal();
    toast.success('User updated successfully!');
  };

  const handleDeleteConfirmed = () => {
    const newusers = userdata.filter((x, i) => i !== editIndex);
    setUserdata(newusers);
    setEditIndex(null);
    setConfirmDelete(false);
    onCloseModal();
    toast.success('User deleted successfully!');
  };

  const deleteUser = (index) => {
    setEditIndex(index);
    setConfirmDelete(true);
  };

  const getCalendarEvents = () => {
    return userdata.map((user, index) => ({
      id: index,
      title: `${user.name} ${user.lastName}`,
      start: new Date(user.appointment),
      end: new Date(user.appointment),
    }));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      const calendarButton = document.getElementById('calendar-button');
      const calendarContainer = document.getElementById('calendar-container');
  
      if (calendarButton && calendarContainer) {
        if (!calendarButton.contains(event.target) && !calendarContainer.contains(event.target)) {
          onCloseModal();
        }
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className="container">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="d-flex">
        <h1>FITNESS APP</h1>
        <button  id="calendar-button" className='btn btn-p' onClick={() => setAction('Calendar')}>
          <Calendar size={16}></Calendar>
          <span>Show Calendar</span>
        </button>
      </div>
      {action === 'Calendar' ? (
        <div id="calendar-container" className="calendar-container">
          <BigCalendar
            localizer={localizer}
            events={getCalendarEvents()}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      ) : (
        <>
          <div className="toolbar">
            <button className='btn btn-p' onClick={onOpenModal}>
              <PlusCircle size={16}></PlusCircle>
              <span>Add</span>
            </button>
          </div>
          <hr />
          <table className='table'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Location</th>
                <th>Appointment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userdata.length > 0 &&
                userdata.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td>
                      {user.appointment?.toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                      })}
                    </td>
                    <td>
                      <button className='btn ml2' onClick={() => editUser(index)}>
                        <Edit size={16}></Edit>
                        <span>Edit</span>
                      </button>
                      <button className='btn ml2' onClick={() => deleteUser(index)}>
                        <Trash2 size={16}></Trash2>
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Modal open={open} onClose={onCloseModal} center>
            <h2>{action === 'Add' ? 'Add User' : 'Edit User'}</h2>
            <div className='form'>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
              <label htmlFor="">Location</label>
              <textarea
                name=""
                id=""
                value={user.address}
                cols="30"
                rows="5"
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              ></textarea>
              <label htmlFor="">Appointment</label>
              <DatePicker
                selected={user.appointment}
                onChange={(date) => setUser({ ...user, appointment: date })}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy/MM/dd HH:mm"
                timeCaption="Time"
              />
              <br />
              {action === 'Add' ? (
                <button className='btn' onClick={() => addUser()}>
                  Submit
                </button>
              ) : (
                <React.Fragment>
                  <button className='btn' onClick={() => updateUser()}>
                    Update
                  </button>
                  <button className="btn" onClick={() => setConfirmDelete(true)}>
                    Delete
                  </button>
                </React.Fragment>
              )}
            </div>
          </Modal>
          <Modal open={confirmDelete} onClose={() => setConfirmDelete(false)} center>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="form">
              <button className="btn" onClick={() => handleDeleteConfirmed()}>
                Yes, Delete
              </button>
              <button className="btn" onClick={() => setConfirmDelete(false)}>
                Cancel
              </button>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;
