import React from "react";

const EditForm = ({
 allInfo,
 editContent,
 setEdit,
 setAllInfo,
 setEditContent,
 edit,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditContent((prevContent) => ({ ...prevContent, [name]: value }));
  };

  const handleEdit = () => {
    const updatedInfo = allInfo.map((info) => {
      if (info.id === editContent.id) {
        return editContent;
      }
      return info;
    });
    setAllInfo(updatedInfo);
    setEdit(false);
  };

  return (
    <div>
      <div className="edit-form">
          <div className="edit-form-item">
            <label htmlFor="location">
              Location <span className="required-symbol">*</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={editContent.location}
              required
              onChange={handleChange}
            />
          </div>

          <div className="edit-form-item">
            <label htmlFor="gpslocation">
              GPS Location <span className="required-symbol">*</span>
            </label>
            <input
              type="text"
              name="gpslocation"
              placeholder="GpsLocation"
              value={editContent.gpslocation}
              required
              onChange={handleChange}
            />
          </div>

          <button
            type="button"
            onClick={() => {
              navigator.geolocation.getCurrentPosition((position) => {
                const location = `${position.coords.latitude}, ${position.coords.longitude}`;
                setEditContent((prevContent) => ({
                  ...prevContent,
                  gpslocation: location,
                }));
              });
            }}
          >
            Get GPS Location
          </button>

          {/* Add other form inputs and labels here */}

          <label htmlFor="selectpool">
          Select Pool <span className="required-symbol">*</span>
        </label>
        <select
          name="selectpool"
          value={editContent.selectpool}
          required
          onChange={handleChange}
          style={{
            margin: "8px 0",
            // backgroundColor: "inherit",
            // color: "inherit",
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            transition: "border-color 0.3s ease-in-out",
          }}
        >
          <option value="">Select Pool </option>
          <option value="Concrite Square Pool"> Concrite Square Pool</option>
          <option value="Concrite Round Pool"> Concrite Round Pool</option>
          <option value="Metal Pool"> Metal Pool</option>
          <option value="Wooden Pool"> Wooden Pool</option>
          <option value="Bamboo Pool"> Bamboo Pool</option>

          {/* Add more options as needed */}
        </select>

        <label htmlFor="selectpoolstatus">
          Select Pool Status<span className="required-symbol">*</span>
        </label>
        <select
          name="selectpoolstatus"
          value={editContent.selectpoolstatus}
          required
          onChange={handleChange}
          style={{
            margin: "8px 0",
            // backgroundColor: "inherit",
            // color: "inherit",
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            transition: "border-color 0.3s ease-in-out",
          }}
        >
          <option value="">Select Pool Status</option>
          <option value="In Great Condition"> In Great Condition</option>
          <option value="In Moderate Condition"> In Moderate Condition</option>
          <option value="In Bad Condition"> In Bad Condition</option>

          {/* Add more options as needed */}
        </select>

        <label htmlFor="selectpoollocation">
          Select Pool Location <span className="required-symbol">*</span>
        </label>
        <select
          name="selectpoollocation"
          value={editContent.selectpoollocation}
          required
          onChange={handleChange}
          style={{
            margin: "8px 0",
            // backgroundColor: "inherit",
            // color: "inherit",
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            transition: "border-color 0.3s ease-in-out",
          }}
        >
          <option value="">Select Pool Location</option>
          <option value="Near House"> Near House</option>
          <option value="Inside House"> Inside House</option>
          <option value="No House NearBy"> No House NearBy</option>
          <option value="In Open Space"> In Open Space</option>

          {/* Add more options as needed */}
        </select>

        <label htmlFor="description">
          Description <span></span>
        </label>
        <textarea
          name="description"
          placeholder="Description"
          value={editContent.description}
          onChange={handleChange}
          style={{
            margin: "8px 0",
            minHeight: "100px",
            // backgroundColor: "inherit",
            // color: "inherit",
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            transition: "border-color 0.3s ease-in-out",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #337ab7")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <label htmlFor="image">
          Pool Image <span></span>
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          style={{
            margin: "8px 0",
            // backgroundColor: "inherit",
            // color: "inherit",
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            transition: "border-color 0.3s ease-in-out",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #337ab7")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <div>
          <label htmlFor="Available ISP">
            Available ISP <span className="required-symbol">*</span>
          </label>
          <div>
            <input
              type="radio"
              name="availableisp"
              value="Yes"
              checked={editContent.availableisp === "Yes"}
              onChange={handleChange}
              style={{
                margin: "8px 0",
                borderRadius: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                transition: "border-color 0.3s ease-in-out",
              }}
            />
            <label htmlFor="availableisp">Yes</label>
            <input
              type="radio"
              name="availableisp"
              value="No"
              checked={editContent.availableisp === "No"}
              onChange={handleChange}
            />
            <label htmlFor="availableisp">No</label>
          </div>
        </div>

        {/* Show detailed image input only when 'availableisp' is 'Yes' */}
        {userInfo.availableisp === "Yes" && (
          <div>
            <label htmlFor="selectisp">
              Select ISP <span className="required-symbol">*</span>
            </label>

            <select
              name="selectisp"
              value={editContent.selectisp}
              required
              onChange={handleChange}
              style={{
                margin: "8px 0",
                borderRadius: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                transition: "border-color 0.3s ease-in-out",
              }}
            >
              <option value="">Select ISP</option>
              <option value="World Link">WorldLink</option>
              <option value="Nepal Telecom">Nepal Telecom</option>
              <option value="Vianet">Vianet</option>
              <option value="ClaasicTech">ClassicTech</option>
              <option value="Subisu">Subisu</option>
              {/* Add more options as needed */}
            </select>

            <label htmlFor="multipleimage">
              {" "}
              Multiple Images <span className="required-symbol">*</span>{" "}
            </label>
            <input
              multiple
              type="file"
              name="multipleimages"
              onChange={handleSliderImages}
              style={{
                margin: "8px 0",
                borderRadius: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                transition: "border-color 0.3s ease-in-out",
              }}
            />
          </div>
        )}


          <button type="submit" className="update-button" onClick={handleEdit}>
            Update
          </button>
        
      </div>
    </div>
  );
};

export default EditForm;