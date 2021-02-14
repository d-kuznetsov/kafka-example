const { Kafka } = require("kafkajs");
const { kafkaConfig, topicName } = require("./kafka-common");

const kafka = new Kafka(kafkaConfig);

const setup = async () => {
  const admin = kafka.admin();
  await admin.connect();
  await admin.createTopics({
    topics: [
      {
        topic: topicName,
        numPartitions: 2,
        replicationFactor: 1,
      },
    ],
  });
  await admin.disconnect();
};

setup().then(() => console.log("Topic is created"));
