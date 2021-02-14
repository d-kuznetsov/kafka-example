const { Kafka } = require("kafkajs");
const { kafkaConfig, topicName } = require("./kafka-common");

const kafka = new Kafka(kafkaConfig);

const useProducer = async () => {
  const producer = kafka.producer();
  await producer.connect();
  const sendMessage = async (message) => {
    await producer.send({
      topic: topicName,
      messages: [{ value: message }],
    });
    console.log("Message sent");
  };
  return {
    sendMessage,
  };
};

module.exports = {
  useProducer,
};

