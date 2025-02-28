import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../database";
import Auth from "./Auth";

interface MessageAttributes {
  id: number;
  content: string;
  userId: number;
}

interface MessageCreationAttributes extends Optional<MessageAttributes, "id"> {}

class Message
  extends Model<MessageAttributes, MessageCreationAttributes>
  implements MessageAttributes
{
  public id!: number;
  public content!: string;
  public userId!: number;
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
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
    tableName: "messages",
  }
);


export default Message;
