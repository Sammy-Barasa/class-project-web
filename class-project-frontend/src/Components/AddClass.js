import React from 'react'
import { IoIosAdd } from "react-icons/io";

function AddClass() {
    return (
        <div>
            <h3>Add New Farm</h3>
        <div>
          <form>
            <div class="form-group">
              <label for="building">Building</label>
              <input
                type="text"
                class="form-control"
                id="building"
                placeholder="Building name"
              />
            </div>

            <div class="form-group">
              <label for="floor">Floor</label>
              <input
                type="text"
                class="form-control"
                id="floor"
                placeholder="floor in the building"
              />
            </div>

            <div class="form-group">
              <label for="room_no">Room No.</label>
              <input
                type="text"
                class="form-control"
                id="room_no"
                placeholder="Room number of the class"
              />
            </div>
            <div class="form-group col-md-6">
                <label for="status">Status</label>
                <select id="status" class="form-control">
                  <option>Live</option>
                  <option>Available</option>
                </select>
              </div>
            <button type="submit" class="btn btn-primary btn-block">
              <span><IoIosAdd size={30}/></span> New Farm
            </button>
          </form>
        </div>
        </div>
    )
}

export default AddClass
