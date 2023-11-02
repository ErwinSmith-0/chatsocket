import authModel from "../DB/Model/authModel.js";
import roomModel from "../DB/Model/roomModel.js";
import CustomError from "../Utils/ResponseHandler/CustomError.js";
import CustomSuccess from "../Utils/ResponseHandler/CustomSuccess.js";
import { comparePassword, hashPassword } from "../Utils/SecuringPassword.js";

const createProfile = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = hashPassword(password);
    const User = await authModel.findOne({ username });
    if (!User) {
      //   const User = await authModel.create();
      let authData = {
        username,
        password: hashedPassword,
      };
      const Auth = new authModel(authData);
      await Auth.save();
      //   const token = await OtptokenGen({ authData });
      return next(
        CustomSuccess.createSuccess(
          { authData: Auth },
          // { token },
          "user created and logged in",
          200
        )
      );
    }
    const isPasswordValid = comparePassword(password, User.password);
    if (!isPasswordValid) {
      return next(CustomError.unauthorized("Invalid Password"));
    }
    // const token = await OtptokenGen({ authData });
    return next(
      CustomSuccess.createSuccess(
        { authData: User },
        // { token },
        "user logged in",
        200
      )
    );
  } catch (error) {
    return next(CustomError.createError(error.message, 500));
  }
};

const getall = async (req, res, next) => {
  const result = await authModel.find();
  if (!result) {
    return next(
      CustomSuccess.createSuccess(
        {},
        // { token },
        "no users",
        200
      )
    );
  }
  return next(
    CustomSuccess.createSuccess(
      result,
      // { token },
      "All users",
      200
    )
  );
};

// export async function joinRoom(req, res, next) {
//   try {
//     const { sender, receiver } = req.body;

//     const senderUserData = await authModel
//       .findOne({
//         username: sender,
//       })
//       .populate({
//         path: "userRooms",
//         populate: {
//           path: "users",
//           select: "username",
//         },
//       });
//     const receiverUserData = await authModel.findOne({
//       username: receiver,
//     });

//     if (senderUserData !== null && receiverUserData !== null) {
//       let roomData = senderUserData.userRooms.find((userRoom) => {
//         return (
//           (userRoom.users[0]._id.toString() === senderUserData._id.toString() && userRoom.users[1]._id.toString() === receiverUserData._id.toString()) ||
//           (userRoom.users[1]._id.toString() === senderUserData._id.toString() && userRoom.users[0]._id.toString() === receiverUserData._id.toString())
//         );
//       });

//       if (!roomData) {
//         roomData = await roomModel.create({
//           users: [senderUserData._id, receiverUserData._id],
//         });

//         await userModel.updateOne(
//           { userName: senderUserName },
//           {
//             userRooms: [...senderUserData.userRooms, roomData._id],
//           }
//         );

//         await userModel.updateOne(
//           { userName: receiverUserName },
//           {
//             userRooms: [...receiverUserData.userRooms, roomData._id],
//           }
//         );
//       }

//       return res.status(200).json({
//         message: `Room Joint.`,
//         data: { roomData },
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// }
export async function room(req, res, next) {
  try {
    const { sender, receiver } = req.body;

    let room = await roomModel.findOne({
      sender,
      receiver,
    });
    if (!room) {
      room = await roomModel.findOne({
        sender: receiver,
        receiver: sender,
      });
      if (!room) {
        console.log("yeeeeeeeeep");
        const roomData = {
          sender,
          receiver,
        };
        room = new roomModel(roomData);
        await room.save();
      }
    }
    return res
      .status(201)
      .json({ success: true, data: room, message: "Room created" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

const AuthController = {
  createProfile,
  getall,
  room,
};

export default AuthController;
