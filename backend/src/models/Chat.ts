import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../database";
import bcrypt from "bcrypt";
import Auth from "./Auth";

interface ChatAttributes {
  id: number;
  title: string;
  userId: number;
}

interface ChatCreationAttributes extends Optional<ChatAttributes, "id"> {}

class Chat
  extends Model<ChatAttributes, ChatCreationAttributes>
  implements ChatAttributes
{
  public id!: number;
  public title!: string;
  public userId!: number;
}

Chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Auth,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "chats",
  }
);


export default Chat;
