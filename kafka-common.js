const kafkaConfig = {
  clientId: "online-shop",
  brokers: ["localhost:9092"],
};
const topicName = "orders";

module.exports = {
  kafkaConfig,
  topicName,
};
