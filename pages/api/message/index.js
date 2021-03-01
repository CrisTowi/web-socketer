import connectDB from '../../../middleware/mongodb';
import Message from '../../../model/message';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const messages = await Message.find();

    return res.status(200).send(messages);
  } else if (req.method === 'POST') {
    const { type, data } = req.body;

    if (type && data) {
        try {
          const message = new Message({
            type,
            data,
          });

          const messageCreated = await message.save();
          return res.status(200).send(messageCreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
}

export default connectDB(handler);
