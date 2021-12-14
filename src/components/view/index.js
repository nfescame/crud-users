import React from "react";
import { AuthContext } from "../../providers/index";

export default function View() {
  const { users, handleDelete, handleUpdate } = React.useContext(AuthContext);

  return (
    <section className='sectionContainer p-3'>
      <div className=' mb-3'>
        <div className='titleContent'>
          <h3>View users</h3>
        </div>

        <table className='table'>
          <thead className='container'>
            <tr className='row'>
              <th className='col-1'>ID</th>
              <th className='col-4'>name</th>
              <th className='col-6'>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user.id}
                  className=' row'
                  style={{ borderTop: "none" }}
                >
                  <th className='col-1'>{user.id}</th>
                  <td className='col-4'>{user.name}</td>
                  <td className='col-6'>{user.email}</td>

                  <td
                    className='row'
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      border: "none",
                    }}
                  >
                    <button
                      className='btn btn-primary col-3 ml-5'
                      onClick={(e) => {
                        handleUpdate(e.target.getAttribute("name"));
                      }}
                      name={user.id}
                      type='submit'
                    >
                      Edit
                    </button>

                    <button
                      className='btn btn-danger  col-3 ml-5'
                      onClick={(e) => {
                        handleDelete(e.target.getAttribute("name"));
                      }}
                      name={user.id}
                      type='submit'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
