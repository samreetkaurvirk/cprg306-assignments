import React from "react";

const Item = ({ item, onItemSelect }) => {
  const handleClick = () => {
    if (onItemSelect) {
      const cleanedItemName = item.name
        .split(",")[0]
        .trim()
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');

      onItemSelect({ ...item, name: cleanedItemName });
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px",
        width: 300,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <h3 style={{ display: "inline", marginRight: "10px" }}>{item.name}</h3>
      <p style={{ display: "inline" }}>
        {" "}
        Amount: {item.quantity} - {item.category}
      </p>
    </div>
  );
};

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = React.useState("name");

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <div style={{ textAlign: "left", minHeight: "100vh", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
        <div>
          <label style={{ color: "#ffffff" }}>
            Sort by:
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              style={{
                marginLeft: "5px",
                padding: "5px",
                cursor: "pointer",
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="name">Name</option>
              <option value="category">Category</option>
            </select>
          </label>
        </div>

        <div>
          <button
            onClick={() => handleSortChange("name")}
            style={{
              padding: "8px 15px",
              marginRight: "5px",
              marginLeft: "5px",
              cursor: "pointer",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            Name
          </button>
          <button
            onClick={() => handleSortChange("category")}
            style={{
              padding: "8px 15px",
              cursor: "pointer",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            Category
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', textAlign: "center", alignItems: "center" }}>
        {items
          .slice()
          .sort((a, b) => (sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)))
          .map((item) => (
            <Item key={item.id} item={item} onItemSelect={onItemSelect} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
