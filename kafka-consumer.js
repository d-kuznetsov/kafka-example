const { Kafka } = require("kafkajs");
const { kafkaConfig, topicName } = require("./kafka-common");

const kafka = new Kafka(kafkaConfig);

const useConsumer = async (onMessage, groupId = 1) => {
  const consumer = kafka.consumer({ groupId: `group-${groupId}` });
  await consumer.connect();
  await consumer.subscribe({ topic: topicName });
  await consumer.run({
    eachMessage: ({ topic, partition, message }) => {
      onMessage(message.value.toString());
    },
  });
  console.log("Consumer is running")
};

module.exports = {
  useConsumer,
};
