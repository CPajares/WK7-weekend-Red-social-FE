import useRegister from "../../hooks/useRegister";

import("./Card.css");

const Card = ({ name, age, image, friends, enemies, id }) => {
  const { addFriend } = useRegister();

  const addFriendClick = (event) => {
    event.preventDefault();
    addFriend(id);
  };
  return (
    <>
      <div className="card">
        <div className="upper">
          <img
            src="https://i.imgur.com/Qtrsrk5.jpg"
            alt="img"
            className="img"
          />
        </div>
        <div className="user text-center">
          <div className="profile">
            {" "}
            <img
              src={image}
              alt="card img"
              className="rounded-circle"
              width="80"
            />{" "}
          </div>
        </div>
        <div className="mt-5 text-center">
          <h4 className="mb-0">{name}</h4>{" "}
          <span className="text-muted d-block mb-2">{age}</span>{" "}
          <button
            onClick={addFriendClick}
            className="btn btn-primary btn-sm follow"
          >
            Friend
          </button>
          <button className="btn btn-danger btn-sm follow">Enemy</button>
          <div className="d-flex justify-content-between align-items-center mt-4 px-4">
            <div className="stats">
              <h6 className="mb-0">Friends</h6> <span>{friends.length}</span>
            </div>

            <div className="stats">
              <h6 className="mb-0">Enemies</h6> <span>{enemies.length}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
