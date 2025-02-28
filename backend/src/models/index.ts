
import Auth from './Auth';
import Chat from './Chat';
import Message from './Message';

Auth.hasMany(Chat, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

Chat.belongsTo(Auth, {
  foreignKey: 'userId',
  targetKey: 'id',
});

Auth.hasMany(Message, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

Message.belongsTo(Auth, {
  foreignKey: 'userId',
  targetKey: 'id',
});

Chat.hasMany(Message, {
  foreignKey: 'chatId',
  sourceKey: 'id',
});

Message.belongsTo(Chat, {
  foreignKey: 'chatId',
  targetKey: 'id',
});


export { Auth, Chat, Message };
